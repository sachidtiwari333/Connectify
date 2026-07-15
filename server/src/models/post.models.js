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
  },
  likedBy : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'User',
    default: [],
  }]
},{timestamps : true})

export const Post  = mongoose.model('Post', postSchema)