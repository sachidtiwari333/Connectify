import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

import NotFound from "./pages/NotFound";


import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;