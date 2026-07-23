import express from 'express'
import {registerController, loginController, logoutController, profileController} from '../controllers/auth.controllers.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import authMiddleware from '../middlewares/authMiddleware.js'

const authRouter = express.Router()

authRouter.post('/register', asyncHandler(registerController))
authRouter.post('/login', asyncHandler(loginController))
authRouter.post('/logout',authMiddleware, asyncHandler(logoutController))
authRouter.get('/profile',authMiddleware, asyncHandler(profileController))



export default authRouter