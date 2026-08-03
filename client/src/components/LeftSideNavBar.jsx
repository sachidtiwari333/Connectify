
import {
  House,
  Telescope,
  Bell,
  MessageSquareText,
  Bookmark,
  User,
  CircleEllipsis,
  Pencil,
  CircleUserRound,
  EllipsisVertical,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const LeftSideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation()
  const pathname = location.pathname
  
  const linkness = (type) =>{
    let classes = 'flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full'
    if(pathname.startsWith(type)){
      classes += ' bg-green-700'

      
    }
    return classes
  }
  return (
    <>
      {/* ================= MOBILE ================= */}
      <div className="sm:hidden fixed top-0 left-0 z-50 p-4">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-xl  hover:bg-gray-700"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <div
        className={`sm:hidden fixed top-0 left-0 z-50 h-screen w-72 bg-gray-800 p-5 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Connectify</h1>

          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-3">
          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <House size={20} />
            Home
          </button>

          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <Telescope size={20} />
            Explore
          </button>

          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <Bell size={20} />
            Notifications
          </button>

          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <MessageSquareText size={20} />
            Messages
          </button>

          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <Bookmark size={20} />
            Bookmarks
          </button>

          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <User size={20} />
            Profile
          </button>

          <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
            <CircleEllipsis size={20} />
            More
          </button>

          <button className="flex items-center justify-center gap-3 px-3 py-2 rounded-xl w-full bg-amber-400">
            <Pencil size={20} />
            Create Post
          </button>
        </div>
      </div>

      {/* ================= IPAD / TABLET ================= */}
      <aside className="hidden sm:flex lg:hidden w-20 shrink-0 h-screen sticky top-0">
        <div className="p-3 flex flex-col gap-5 text-white items-center w-full justify-between h-screen">
          <div className="flex flex-col gap-3 w-full">

            <h1 className="text-xl font-bold text-center">
              C
            </h1>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <House size={20} />
            </button>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <Telescope size={20} />
            </button>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <Bell size={20} />
            </button>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <MessageSquareText size={20} />
            </button>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <Bookmark size={20} />
            </button>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <User size={20} />
            </button>

            <button className="flex items-center justify-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <CircleEllipsis size={20} />
            </button>

            <button className="flex items-center justify-center px-3 py-2 rounded-xl w-full bg-amber-400">
              <Pencil size={20} />
            </button>

          </div>

          <button>
            <CircleUserRound size={40} />
          </button>
        </div>
      </aside>

      {/* ================= LAPTOP / DESKTOP ================= */}
      <aside className="hidden lg:flex w-64 xl:w-80 shrink-0 h-screen sticky top-0">
        <div className="p-5 flex flex-col gap-5 text-white items-start w-full justify-between h-screen">

          <div className="flex flex-col gap-3 w-full">

            <h1 className="text-3xl font-bold">
              Connectify
            </h1>

            <Link to="/" className={linkness('/home')}>
              <House size={20} />
              Home
            </Link>

            <Link to='/explore' className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <Telescope size={20} />
              Explore
            </Link>

            <Link to='/notifactions' className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <Bell size={20} />
              Notifications
            </Link>

            <Link to='/messages' className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <MessageSquareText size={20} />
              Messages
            </Link>

            <Link to='/bookmarks' className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <Bookmark size={20} />
              Bookmarks
            </Link>

            <Link to="/profile"  className={linkness('/profile')}>
              <User size={20} />
              Profile
            </Link>

            <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full">
              <CircleEllipsis size={20} />
              More
            </button>

            <button className="flex items-center justify-center gap-3 px-3 py-2 rounded-xl w-full bg-amber-400">
              <Pencil size={20} />
              Create Post
            </button>

          </div>

          <button className="flex items-center justify-between w-full">
            <div className="flex gap-3">
              <CircleUserRound size={40} />

              <div className="flex flex-col">
                <p>Full Name</p>
                <p className="-mt-2">@username</p>
              </div>
            </div>

            <EllipsisVertical size={20} />
          </button>

        </div>
      </aside>
    </>
  );
};

export default LeftSideNavBar;
