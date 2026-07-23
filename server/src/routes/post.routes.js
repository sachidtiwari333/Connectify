import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createPostController, likeController, postsController} from '../controllers/post.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const postRouter = express.Router()

postRouter.post('/create-post',upload.fields([{name: 'image', maxCount : 1}]),authMiddleware, createPostController)

postRouter.get('/posts',authMiddleware, postsController)

postRouter.post('/like', authMiddleware, likeController)

export default postRouter