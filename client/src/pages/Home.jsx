import Navbar from "../components/Navbar";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const Home = () => {
  const [user, setUser] = useState('')
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    const userprop = async() =>{
      try{
        const response  = await axios.get(
          'http://localhost:3000/api/v1/user/home',
          {
            withCredentials : true
          }
        )
        console.log(response);
        setUser(response.data.data)
        
      }catch(err){
        console.log(err);
        
      }
    }
    
    const feedPosts = async() =>{
      try{
        const response  = await axios.get(
          'http://localhost:3000/api/v1/user/post/posts',
        {
          withCredentials : true
        }
        )
        setPosts(response.data.data)
      }catch(err){
        console.log(err);
        
      }
    }
  },[])
    
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
    </div>
  );
};

export default Home;