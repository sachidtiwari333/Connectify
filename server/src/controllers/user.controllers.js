import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Post } from "../models/post.models.js";
import { User } from "../models/user.models.js";


const homeController = (req, res)=>{
  try{
    res.status(200).json(
      new ApiResponse(200, req.user, "Welcome to connectify" )
    )
  }catch(err){
    throw new ApiError(400, err.message)
  }
}

const profileController = async (req, res) => {
  try {
    const updatedUser = await User.findById(req.params.id)
      .populate("followers", "fullname username")
      .populate("following", "fullname username")
      .populate({
        path: "posts",
        populate: {
          path: "createdBy",
          select: "fullname username",
        },
      });
    return res
      .status(200)
      .json(new ApiResponse(200, updatedUser, "User fetched successfully"));
  } catch (err) {
    throw new ApiError(500, err.message);
  }
};

const suggestedUsersController = async (req, res) => {
  try {
    // 1. Get the current logged-in user's data first to get their clean followers array
    const currentUser = await User.findById(req.user._id).select("followers following");
    
    if (!currentUser) {
      return res.status(404).json(new ApiError(404, "Current user not found"));
    }

    // 2. Fetch suggestions where the ID is NOT the current user AND NOT in their followers/following lists
    // Mongoose maps the arrays cleanly behind the scenes here
    const allUsers = await User.find({
      _id: {
        $nin: [currentUser._id,  ...currentUser.following]
      }
    })
    .limit(10) // Best practice: Limit the recommendations size so your app stays fast
    .select("-password"); // Security: Do not expose password hashes to the frontend

    return res
      .status(200)
      .json(new ApiResponse(200, allUsers, "Suggested users fetched successfully"));

  } catch (err) {
    // Catch-all block ensures your server never hangs up or crashes
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error"
    });
  }
};

const followUserController = async (req, res) => {
  try {
    const follower = await User.findById(req.user._id);
    const { userId } = req.body;
    if (!userId) {
      throw new ApiError(400, "User is required");
    }
    const user = await User.findById(userId);
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    if (userId === follower) {
      throw new ApiError(409, "User cannot follow themselves");
    }

    const alreadyFollowing = user.followers.some((id) =>
      id.equals(follower._id),
    );
    if (alreadyFollowing) {
      throw new ApiError(409, "User already follow");
    }

    user.followers.push(follower._id);
    await user.save();

    follower.following.push(user._id);
    await follower.save();

    res
      .status(201)
      .json(new ApiResponse(201, user, "User followed sucessfully"));
  } catch (err) {
    throw new ApiError(400, err.message);
  }
};

const unfollowUserController = async (req, res) => {
  try {
    const { followerId } = req.body;
     
    if (!followerId) {
      // Assuming ApiError matches your custom error class footprint
      return res.status(400).json(new ApiError(400, "FollowerId is required"));
    }

    // 1. Remove logged-in user from the target user's 'followers' array
    // Mongoose automatically converts string/object IDs properly without .toString()
    const follower = await User.findByIdAndUpdate(
      followerId,
      { $pull: { followers: req.user._id } }, 
      { returnDocument: "after" }
    );

    // Check immediately if the target user was found
    if (!follower) {
      return res.status(404).json(new ApiError(404, "Target user not found"));
    }
    
    // 2. Remove the target user from the logged-in user's 'following' array
    await User.findByIdAndUpdate(
      req.user._id,
      { $pull: { following: followerId } },
      { returnDocument: "after" }
    );

    return res.status(200).json(new ApiResponse(200, {}, "User unfollowed successfully"));

  } catch (err) {
    // Avoid 'throw new ApiError' inside catch blocks to prevent express app crashes
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Internal Server Error"
    });
  }
};

export {
  homeController,
  profileController,
  suggestedUsersController,
  followUserController,
  unfollowUserController,
};
