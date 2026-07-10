import { ApiError } from '../utils/apiError.js';
import { ApiResponse } from '../utils/apiResponse.js';

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json(
      new ApiResponse(err.statusCode, null, err.message, err.errors)
    );
  }

  // Handle other errors
  return res.status(500).json(
    new ApiResponse(500, null, err.message || 'Internal Server Error')
  );
};

export { errorHandler };
