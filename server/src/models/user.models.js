import mongoose  from "mongoose"

const userSchema = new mongoose.Schema({
  fullname :{
    type : String,
    required: true
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    trim : true
  },
  email :{
    type : String,
    required : true,
    unique: true,
    trim:true,
    lowercase : true
  },
  password: {
    type : String,
    required : true,
    trim : true
  },
  posts :  [
    {
      tpye: mongoose.Schema.Types.ObjectId,
      ref : 'Post'
    }
  ]
},{timestamps : true})

export const  User = mongoose.model('User', userSchema)