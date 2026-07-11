import { User } from "../models/user.models.js";
import { ApiError } from "../utils/apiError.js";
import jwt from 'jsonwebtoken'
const authMiddleware = async (req,res,next)=>{
  try{
    const token = req.cookies.token;

  if(!token){
    throw new ApiError(400, 'Unauthorized')
  }
  const decoded = await jwt.verify(token,process.env.JWT_SECRET)
  req.user = await User.findById(decoded._id)
  next()
  }catch{
    throw new ApiError(400,'Unauthorized')
  }
}

export default authMiddleware