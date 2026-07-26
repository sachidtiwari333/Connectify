import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import {   userController, suggestedUsersController, followUserController, unfollowUserController } from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const router = express.Router()

router.get('/profile/:id', authMiddleware, userController)


router.get('/suggested-user', authMiddleware, suggestedUsersController)

router.post('/follow', authMiddleware, followUserController)

router.post('/unfollow', authMiddleware, unfollowUserController)


export default router