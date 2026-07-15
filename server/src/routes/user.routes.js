import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createPostController, postsController, userController } from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const router = express.Router()

router.get('/profile', authMiddleware, userController)
router.post('/create-post',upload.fields([{name: 'image', maxCount : 1}]),authMiddleware, createPostController)

router.get('/posts',authMiddleware, postsController)
export default router