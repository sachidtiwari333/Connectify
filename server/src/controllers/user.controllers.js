import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Post } from "../models/post.models.js";
import { User } from "../models/user.models.js";
import { log } from "console";

const userController = (req, res) => {
  try {
    return res
      .status(200)
      .json(new ApiResponse(200, req.user, "User fetched successfully"));
  } catch (err) {
    throw new ApiError(500, err.message);
  }
};

const createPostController = async (req, res) => {
  const { title } = req.body;

  if (!title) {
    throw new ApiError(400, "Title is required");
  }

  const user = await User.findById(req.user.id);

  const imageLocalPath = req.files?.image?.[0]?.path;
  const image = await uploadOnCloudinary(imageLocalPath);

  const post = await Post.create({
    title,
    image: image.secure_url,
    createdBy: user._id,
  });

  // Save the post reference in the user
  user.posts.push(post);
  await user.save();

  // Populate the owner details
  const postCreated = await Post.findById(post._id).populate(
    "createdBy",
    "fullname username",
  );

  if (!postCreated) {
    throw new ApiError(400, "Something went wrong");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, postCreated, "Post created successfully"));
};

const postsController = async (req, res) => {
  try {
    const posts = await Post.find().populate("createdBy", "username, fullname");
    return res
      .status(200)
      .json(new ApiResponse(200, posts, "Posts fetched successfully"));
  } catch (err) {
    throw new ApiError(500, err.message);
  }
};

const likeController = async (req, res) => {
  try {
    const user = req.user;
    const { postId } = req.body;

    const post = await Post.findById(postId);

    if (!post) {
      throw new ApiError(400, "Post not found ");
    }
    if (post.likedBy.includes(user._id)) {
      throw new ApiError(409, "User already liked");
    }
    post.likedBy.push(user._id);
    await post.save();

    res.status(201).json(new ApiResponse(200, post, "Post liked Sucessfully"));
  } catch (err) {
    throw new ApiError(400, err.message);
  }
};

const suggestedUsersController = async (req, res) => {
  try {
    const user = req.user
    const allusers = await User.find({
      _id : {$ne : user._id}
    });
    
    return res
      .status(200)
      .json(new ApiResponse(200, allusers, "Users fetched successfully"));
  } catch (err) {
    throw new ApiError(500, err.message);
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

    const alreadyFollowing = user.followers.some(
      id => id.equals(follower._id)
    )
    if(alreadyFollowing){
       throw new ApiError(409, "User already follow");
    }

    user.followers.push(follower._id);
    await user.save();
    
    follower.following.push(user._id)
    await follower.save()
    
    res
      .status(201)
      .json(new ApiResponse(201, user, "User followed sucessfully"));
  } catch (err) {
    throw new ApiError(400, err.message)
}
};

export {
  userController,
  createPostController,
  postsController,
  likeController,
  suggestedUsersController,
  followUserController,
};
