import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [posts, setposts] = useState([])
  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/profile",
          {
            withCredentials: true,
          }
        );

        setUser(response.data.data);

        
        setIsAuthenticated(true);
      } catch (error) {
        console.log(error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    const feedPosts = async()=>{
      try{
        const response = await axios.get(
          'http://localhost:3000/api/v1/user/post/posts',
          {
            withCredentials: true,
          }
        )
        setposts(response.data.data)

        
      }catch(err){
        console.log(err.message);
        
      }
    }
    checkUser();
    feedPosts()
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Pass the user prop to the child component
  return React.cloneElement(children, { user, posts });
};

export default ProtectedRoute;