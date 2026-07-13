import mongoose  from "mongoose";

const postSchema = mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  image : {
    type : String
  },
  createdBy : {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User'
  }
},{timestamps : true})

export const Post  = mongoose.model('Post', postSchema)