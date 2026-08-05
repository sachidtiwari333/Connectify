import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import LeftSideNavBar from "./components/LeftSideNavBar";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Post from "./components/Post";
import EditProfile from "./pages/EditProfile";

const App = () => {

  return (
    <>
      <div className="flex bg-gradient-to-b from-gray-800 to-black text-white min-h-screen font-mono">
        <LeftSideNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="" element={<Post />} />
            <Route path="" element={<Post />} />
            <Route path="followers" element={<Followers />} />
            <Route path="following" element={<Following />} />
            <Route path="edit" element = {<EditProfile />} />
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
