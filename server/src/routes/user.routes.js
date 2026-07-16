import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createPostController, likeController, postsController, userController, suggestedUsersController, followUserController } from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const router = express.Router()

router.get('/profile', authMiddleware, userController)
router.post('/create-post',upload.fields([{name: 'image', maxCount : 1}]),authMiddleware, createPostController)

router.get('/posts',authMiddleware, postsController)

router.post('/like', authMiddleware, likeController)

router.get('/suggested-user', authMiddleware, suggestedUsersController)

router.post('/follow', authMiddleware, followUserController)
export default router