import {
  House,
  User,
  Bookmark,
  Compass,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

const LeftSidebar = ({ user }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-24">

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-cyan-600 flex items-center justify-center text-white text-2xl font-bold">
          {user?.fullname?.charAt(0)}
        </div>

        <div>
          <h2 className="font-bold">{user?.fullname}</h2>
          <p className="text-gray-500">@{user?.username}</p>
        </div>
      </div>

      <div className="space-y-2">

        <SidebarItem icon={<House size={20} />} text="Home" />

        <SidebarItem icon={<Compass size={20} />} text="Explore" />

        <SidebarItem icon={<Bookmark size={20} />} text="Saved" />

        <Link to='/profile'><SidebarItem icon={<User size={20} />} text="Profile" />
    </Link>
        <SidebarItem icon={<Settings size={20} />} text="Settings" />

      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-cyan-50 cursor-pointer transition">
    {icon}
    <span>{text}</span>
  </div>
);

export default LeftSidebar;