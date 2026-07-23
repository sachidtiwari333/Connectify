import mongoose  from "mongoose";

const commentSchema = mongoose.Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "User"
  },
  text : {
    type : String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
},{timestamps : true})

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
  }],
  comments : [commentSchema]

},{timestamps : true})

export const Post  = mongoose.model('Post', postSchema)