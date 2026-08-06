import { Heart, Bookmark, MessageCircle, Download } from "lucide-react";
import UserCard from "./UserCard";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
const Post = ({ post }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const pathname = location.pathname;
  
  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (!user) {
    return "Please login";
  }
  if (pathname === "/profile") {
    return (
      <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start">
        {user.posts.map((post) => {
          return (
            <div key={post._id} className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 max-w-180 gap-3 md:w-full w-90">
              <div>
                <h1>{post.title}</h1>
              </div>

              <img
                src={post.image}
                alt="Post content"
                className="w-full rounded-lg"
              />

              <div className="flex items-center justify-around w-full pt-3 border-t border-gray-100 mt-2">
                {/* Likes */}
                <button className="flex items-center gap-2 cursor-pointer group">
                  <Heart className="w-6 h-6 transition-colors duration-200" />
                  <span className="text-sm font-semibold">
                    {post.likedBy.length}
                  </span>
                </button>

                {/* Comments */}
                <button className="flex items-center gap-2 cursor-pointer group">
                  <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">
                    {post.comments.length}
                  </span>
                </button>

                {/* Bookmark */}
                <div className="cursor-pointer group">
                  <Bookmark className="w-6 h-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" />
                </div>

                {/* Share/Download */}
                <div className="cursor-pointer group">
                  <Download className="w-6 h-6 text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start ">
      <div className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3 md:w-full w-90">
        {/* <div className="flex items-center justify-between w-full ">
          <div className="flex gap-3">
            <img src="imagae" alt="image" className="w-12 rounded-full" />

            <div className="flex flex-col ">
              <p className="text-md">{post.createdBy.fullname}</p>
              <p className="-mt-1 text-sm text-gray-700">@{post.createdBy.username}</p>
            </div>
          </div>
          <Ellipsis />
        </div> */}
        <UserCard
          fullname={post?.createdBy?.fullname}
          username={post?.createdBy?.username}
          profileImage={post?.createdBy?.profileImage}
        />
        <div>
          <h1>{post?.title}</h1>
        </div>

        <img
          src={post?.image}
          alt="Post content"
          className="w-full rounded-lg"
        />

        <div className="flex items-center justify-around w-full pt-3 border-t border-gray-100 mt-2">
          {/* Likes */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <Heart className="w-6 h-6 transition-colors duration-200" />
            <span className="text-sm font-semibold">{post?.likedBy.length}</span>
          </div>

          {/* Comments */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />
            <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">
              {post?.comments.length}
            </span>
          </div>

          {/* Bookmark */}
          <div className="cursor-pointer group">
            <Bookmark className="w-6 h-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" />
          </div>

          {/* Share/Download */}
          <div className="cursor-pointer group">
            <Download className="w-6 h-6 text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
