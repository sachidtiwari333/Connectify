import bcrypt from 'bcrypt'
import { ApiError } from '../utils/apiError.js';
import {User} from '../models/user.models.js'
import { ApiResponse } from '../utils/apiResponse.js';
import jwt from 'jsonwebtoken'


const signupController = async (req, res) => {
    const { fullname,username, email, password } = req.body;

    if(
        [fullname,username,email,password].some((fields)=> fields?.trim() === "")
    )
    {
        throw new ApiError(400," All fields are required !! ")
    }

    const isUserExist = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (isUserExist) {
      throw new ApiError(409, "User already Exist")
    }
    const salt  = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullname,
      username,
      email,
      password: hashedPassword,
      
    });

    const token = jwt.sign({
      _id : user._id,
      email : user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn : process.env.JWT_EXPIRES_IN
    })

    
    const userCreated = await User.findById(user._id).select([
      '-hashedPassword'
    ])
    if(!userCreated){
      throw new ApiError(400, 'Something went wrong')
    }
    return res.status(201).json(
        new ApiResponse(200,userCreated,"User created Sucessfully", token),
    )
}

const signinController = async (req, res) => {
  const {email,password} = req.body

  const user = await User.findOne({email})

  if(!user){
    throw new ApiError(404,"User doesn't Exists")
  }

  const isPasswordValid  = await bcrypt.compare(password, user.password)

  if(!isPasswordValid){
    throw new ApiError(400, "Invalid  Credentials")
  }

  const token = jwt.sign({
    _id : user._id,
    email : user.email
  },
  process.env.JWT_SECRET,
  {
    expiresIn : process.env.JWT_EXPIRES_IN
  })
  const options = {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
};
  return res
  .status(200)
  .cookie("Token", token,options)
  .json(
    new ApiResponse(200, user, "User sign-in Successful", token)
  );
    
}
export  {signupController , signinController }