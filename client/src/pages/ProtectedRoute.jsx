import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

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

    checkUser();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Pass the user prop to the child component
  return React.cloneElement(children, { user });
};

export default ProtectedRoute;