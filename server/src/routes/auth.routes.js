import express from 'express'
import {signinController, signupController} from '../controllers/auth.controllers.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const userRouter = express.Router()

userRouter.post('/signup', asyncHandler(signupController))
userRouter.post('/signin', asyncHandler(signinController))


export default userRouter