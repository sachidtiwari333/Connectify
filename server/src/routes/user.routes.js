import express from 'express'
import authMiddleware from '../middlewares/authMiddleware.js'
import { userController } from '../controllers/user.controllers.js'

const router = express.Router()

router.get('/profile', authMiddleware, userController)

export default router