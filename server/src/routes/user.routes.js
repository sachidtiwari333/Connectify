import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { createPostController, userController } from '../controllers/user.controllers.js'
import { upload } from '../middlewares/multer.middleware.js'
const router = express.Router()

router.get('/profile', authMiddleware, userController)
router.route('/create-post').post(upload.fields([{name: 'image', maxCount : 1}]),authMiddleware, createPostController)
export default router