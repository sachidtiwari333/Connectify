import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Post } from "../models/post.models.js";
import { User } from "../models/user.models.js";

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
    "fullname username profileImage",
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
    const posts = await Post.find()
      .populate("createdBy", "username fullname profileImage")
      .populate("comments.user", "username fullname profileImage");
    return res
      .status(200)
      .json(new ApiResponse(200, posts, "Posts fetched successfully"));
  } catch (err) {
    throw new ApiError(500, err.message);
  }
};

const likeController = async (req, res) => {
  try {
    const userId = req.user._id;
    const postId = req.params.postId;

    const post = await Post.findById(postId);

    if (!post) {
      throw new ApiError(404, "Post not found");
    }

    const alreadyLiked = post.likedBy.some(
      (id) => id.toString() === userId.toString(),
    );
    let data = {
      post,
      liked: !alreadyLiked,
      likeCount: post.likedBy.length,
    };

    if (alreadyLiked) {
      post.likedBy = post.likedBy.filter(
        (id) => id.toString() !== userId.toString(),
      );
      await post.save();
      data.likeCount = post.likedBy.length;
      return res
        .status(200)
        .json(new ApiResponse(200, data, "Like removed sucessfully"));
    }

    post.likedBy.push(userId);
    await post.save();
    data.likeCount = post.likedBy.length;
    return res
      .status(200)
      .json(new ApiResponse(200, data, "Post liked sucessfully"));
  } catch (err) {
    throw new ApiError(400, err.message);
  }
};

const commentController = async (req, res) => {
  try {
    const { text } = req.body;
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      throw new ApiError(400, "Post does not exist");
    }
    post.comments.push({
      user: req.user._id,
      text: text,
    });
    await post.save();
    await post.populate("comments.user", "fullname username profileImage");
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { comments: post.comments },
          "Commented sucessfully",
        ),
      );
  } catch (err) {
    throw new ApiError(400, err.message);
  }
};

export {
  createPostController,
  postsController,
  likeController,
  commentController,
};
