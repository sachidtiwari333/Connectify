import dotenv from 'dotenv'
import { app } from "./app.js";
import connectDB from './db/index.js';

dotenv.config()
connectDB()
app.listen(process.env.PORT || 5000, (req, res) =>{
  console.log(`Server is running at port ${process.env.PORT}`);
  
})