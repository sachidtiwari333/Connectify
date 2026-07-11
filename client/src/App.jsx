import { ToastContainer, Bounce } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Register from './pages/register.jsx';
import Login from './pages/Login.jsx';
import "react-toastify/dist/ReactToastify.css";
import Landing from "./pages/Landing.jsx";

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
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;