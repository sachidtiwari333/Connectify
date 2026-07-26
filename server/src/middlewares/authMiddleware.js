import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/apiError.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.Token;

    if (!token) {
      throw new ApiError(401, "Unauthorized");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id).select("-password").populate('posts');

    if (!user) {
      throw new ApiError(401, "User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    next(new ApiError(401, "Unauthorized"));
  }
};

export default authMiddleware;