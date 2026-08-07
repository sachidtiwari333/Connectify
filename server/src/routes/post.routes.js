import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { commentController, createPostController, likeController, postsController} from '../controllers/post.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const postRouter = express.Router()

postRouter.post('/create-post',upload.fields([{name: 'image', maxCount : 1}]),authMiddleware, createPostController)

postRouter.get('/posts',authMiddleware, postsController)

postRouter.post('/:postId/like', authMiddleware, likeController)

postRouter.post('/:postId/comment', authMiddleware, commentController)
export default postRouter