import express from 'express'
import {registerController, loginController, logoutController, profileController} from '../controllers/auth.controllers.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const userRouter = express.Router()

userRouter.post('/register', asyncHandler(registerController))
userRouter.post('/login', asyncHandler(loginController))
userRouter.post('/logout',authMiddleware, asyncHandler(logoutController))
userRouter.get('/profile',authMiddleware, asyncHandler(profileController))



export default userRouter