import { MapPin, CalendarDays, Pencil } from "lucide-react";
import PostCreate from "./PostCreate";
import Posts from "./Posts";
import Navbar from "./Navbar";
const Profile = ({ user }) => {
   const isAuthenticated = !!user;
   console.log(user?.posts);
   
  return (
    <div className="min-h-screen bg-gray-100 pt-24 pb-10">
       <Navbar success={isAuthenticated} />
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* Cover */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600"
            alt="cover"
            className="w-full h-72 object-cover"
          />

          {/* Avatar */}
          <div className="absolute -bottom-16 left-10">
            <div className="w-36 h-36 rounded-full border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-6xl font-bold shadow-xl">
              {user?.fullname?.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Edit Button */}
          <button className="absolute right-8 bottom-8 flex items-center gap-2 bg-white px-5 py-2 rounded-xl shadow hover:bg-gray-100 transition">
            <Pencil size={18} />
            Edit Profile
          </button>
        </div>

        {/* User Details */}
        <div className="pt-20 px-10">

          <h1 className="text-4xl font-bold">
            {user?.fullname}
          </h1>

          <p className="text-gray-500 text-lg">
            @{user?.username}
          </p>

          <p className="mt-4 text-gray-700 max-w-xl">
            Dreamer | Developer | Coffee Lover ☕
            <br />
            Building the future, one line of code at a time.
          </p>

          <div className="flex flex-wrap gap-6 mt-4 text-gray-500">

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              Nepal
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              Joined 2025
            </div>

          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-8 border-b pb-8">

            <div>
              <h2 className="text-2xl font-bold">
                {user?.posts?.length || 0}
              </h2>

              <p className="text-gray-500">
                Posts
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {user?.following?.length || 0}
              </h2>

              <p className="text-gray-500">
                Following
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                {user?.followers?.length || 0}
              </h2>

              <p className="text-gray-500">
                Followers
              </p>
            </div>

          </div>

          {/* Tabs */}
          <div className="flex gap-10 mt-6 border-b">

            <button className="pb-4 border-b-2 border-violet-600 text-violet-600 font-semibold">
              Posts
            </button>

            <button className="pb-4 text-gray-500 hover:text-black">
              About
            </button>

            <button className="pb-4 text-gray-500 hover:text-black">
              Photos
            </button>

            <button className="pb-4 text-gray-500 hover:text-black">
              Saved
            </button>

          </div>

        </div>

        {/* Create Post */}
        <div className="px-10 mt-8">
          <PostCreate />
        </div>

        {/* Gallery */}
        <div className="px-10 py-10">

          <h2 className="text-3xl font-bold mb-8">
            My Posts
          </h2>

          <Posts posts={user?.posts} />

        </div>

      </div>
    </div>
  );
};

export default Profile;