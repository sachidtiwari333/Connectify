import express from 'express'
import cors from 'cors'
import userRouter from './routes/auth.routes.js'
import { errorHandler } from './middlewares/errorHandler.js'
import cookieParser from 'cookie-parser'
import router from './routes/user.routes.js'
import authRouter from './routes/auth.routes.js'
import postRouter from './routes/post.routes.js'

const app = express()

app.use(cors({
  origin: ["http://localhost:5173"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.use('/api/v1/auth', authRouter)
app.use('/api/v1/user', router)
app.use('/api/v1/user/post', postRouter)

// Error handling middleware (must be last)
app.use(errorHandler)

export {app}