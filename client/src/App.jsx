import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

import NotFound from "./pages/NotFound";


import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/Profile";
import LeftSideNavBar from "./components/LeftSideNavBar";
import Posts from "./components/Posts";
import Followers from "./components/Followers";
import { Following } from "./components/Following";


const App = () => {
  return (
    <>
    <div className="flex bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">
      <LeftSideNavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
        <Route path="" element={<Posts />} />
          <Route path="" element={<Posts />} />
          <Route path="followers" element={<Followers />} />
          <Route path="following" element={<Following />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Catch all unknown routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </>
  );
};

export default App;