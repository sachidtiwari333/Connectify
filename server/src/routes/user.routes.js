import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import {   suggestedUsersController, followUserController, unfollowUserController, profileController, homeController } from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const router = express.Router()


router.get('/home',authMiddleware, homeController)

router.get('/profile/:id', authMiddleware, profileController)

router.get('/suggested-user', authMiddleware, suggestedUsersController)

router.post('/follow', authMiddleware, followUserController)

router.post('/unfollow', authMiddleware, unfollowUserController)


export default router