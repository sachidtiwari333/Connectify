import { ToastContainer, Bounce } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Profile from "./components/Profile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme="light"
        transition={Bounce}
      />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;