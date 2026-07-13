import dotenv from "dotenv";
dotenv.config();
import { v2 as cloudinary } from 'cloudinary'
import { log } from 'console';
import fs from 'fs'

cloudinary.config({ 
  cloud_name: process.env.MY_CLOUD_NAME, 
  api_key: process.env.MY_API_KEY, 
  api_secret: process.env.MY_API_SECRET
});


const uploadOnCloudinary = async(LocalFilePath) =>{
  if(!LocalFilePath) return null
  try{
    const response = await cloudinary.uploader.upload(LocalFilePath, {
      resource_type : "image",
    })
    console.log('File is upload', response.url);
    return response
  }catch(err){
    fs.unlinkSync(LocalFilePath)
    console.log(err);
    
    return null
  }
}

export {uploadOnCloudinary}