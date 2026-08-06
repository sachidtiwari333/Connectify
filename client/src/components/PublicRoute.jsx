import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = () => {
  const { user, loading } = useAuth();

  // Wait until authentication is checked
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        <p>Loading...</p>
      </div>
    );
  }

  // Already logged in -> don't allow Login/Register
  if (user) {
    return <Navigate to="/" replace />;
  }

  // Logged out -> allow Login/Register
  return <Outlet />;
};

export default PublicRoute;
