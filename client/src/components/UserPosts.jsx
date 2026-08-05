
import {
  Ellipsis,
  Heart,
  Bookmark,
  MessageCircle,
  Download,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const UserPosts = () => {

  const {user, loading} = useAuth()
  if(!user) {
    return <h1>Login first</h1>
  }
  if(loading){
    return <h1>Loading ...</h1>
  }
  return (
    <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start lg:p-10">
      {user?.posts?.map((post, index) => {
        // ✅ Safely access the author, fallback to an empty object if missing

        return (
          <div
            key={index}
            className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3 md:w-full w-90"
          >
            <div className="flex items-center justify-between w-full ">
              <div className="flex gap-3">
                {
                  // ✅ Check if author AND profileImage exist
                  post.createdBy.profileImage ? (
                    <img
                      src={post.createdBy.profileImage}
                      alt=""
                      className="w-12 rounded-full"
                    />
                  ) : (
                    // ✅ Also safely access fullname for the fallback initial
                    <h1 className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full">
                      {post.createdBy.fullname
                        ? post.createdBy.fullname.charAt(0).toUpperCase()
                        : "?"}
                    </h1>
                  )
                }

                <div className="flex flex-col ">
                  {/* ✅ Optional chaining prevents crash if author is missing */}
                  <p className="text-md">{post.createdBy.fullname}</p>
                  <p className="-mt-1 text-sm text-gray-700">
                    @{post.createdBy.username }
                  </p>
                </div>
              </div>
              <Ellipsis />
            </div>

            <div>
              <h1>{post.title}</h1>
            </div>

            {/* ✅ Safe image rendering */}
            {post.image && (
              <img
                src={post.image}
                alt="Post content"
                className="w-full rounded-lg"
              />
            )}

            <div className="flex items-center justify-around w-full pt-3 border-t border-gray-100 mt-2">
              {/* Likes */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <Heart className="w-6 h-6 transition-colors duration-200" />
                <span className="text-sm font-semibold">
                  {post.likedBy?.length || 0}
                </span>
              </div>

              {/* Comments */}
              <div className="flex items-center gap-2 cursor-pointer group">
                <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />
                <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">
                  {post.comments?.length || 0}
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
        );
      })}
    </div>
  );
};

export default UserPosts;
