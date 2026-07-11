import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

const userController = (req, res) => {
  try {
    return res.status(200).json(
      new ApiResponse(200, req.user, "User fetched successfully")
    );
  } catch (err) {
    throw new ApiError(500, err.message);
  }
};

export { userController };