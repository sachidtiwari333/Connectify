import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Bell,
  MessageCircle,
  User,
} from "lucide-react";
import LogoutButton from "./LogutButton";

const Navbar = ({ success }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-violet-600"
        >
          Connectify
        </Link>

        {/* Search */}
        <div className="hidden md:flex relative w-96">
          <Search
            size={20}
            className="absolute left-4 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search for people, posts..."
            className="w-full bg-gray-100 rounded-full py-3 pl-12 pr-4 outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="p-2 rounded-full hover:bg-violet-100 transition"
          >
            <Home className="text-violet-600" />
          </Link>

          {success ? (
            <>
              <Link
                to="/profile"
                className="p-2 rounded-full hover:bg-violet-100 transition"
              >
                <User className="text-gray-700" />
              </Link>

              <button className="relative p-2 rounded-full hover:bg-violet-100">
                <Bell className="text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <button className="p-2 rounded-full hover:bg-violet-100">
                <MessageCircle className="text-gray-700" />
              </button>

              {/* Avatar */}
              <Link to="/profile">
                <div className="w-11 h-11 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:scale-105 transition">
                  A
                </div>
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-medium text-gray-700 hover:text-violet-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-full transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;