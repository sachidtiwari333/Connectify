import axios from "axios";
import { FaHeart, FaRegCommentDots, FaShare } from "react-icons/fa";

const Posts = ({ posts }) => {
  const likeHandler = async (postId) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/like",
        {
          postId: postId,
        },
        {
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response?.data);
      console.log(err.response?.status);
    }
  };

  return (
    <div className="flex flex-col gap-10">
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100"
        >
          {/* Header */}
          {post.createdBy.fullname && (
            <div className="flex items-center gap-4 px-6 py-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {post.createdBy.fullname.charAt(0).toUpperCase()}
              </div>

              <div>
                <h1 className="text-lg font-bold text-gray-800">
                  {post.createdBy.fullname}
                </h1>
                <p className="text-sm text-gray-500">Posted recently</p>
              </div>
            </div>
          )}

          {/* Image */}
          <div className="mx-5 rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-5">
              {post.title}
            </h2>

            <div className="border-t pt-4 flex justify-between items-center">
              {/* Like */}
              <button
                onClick={() => likeHandler(post._id)}
                className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 hover:bg-red-100 hover:text-red-500 transition-all duration-300 active:scale-95"
              >
                <FaHeart className="text-red-500 text-lg" />
                <span className="font-semibold">
                  {post.likedBy.length} Likes
                </span>
              </button>

              {/* Comment */}
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 hover:bg-blue-100 hover:text-blue-500 transition-all duration-300">
                <FaRegCommentDots />
                <span>Comment</span>
              </button>

              {/* Share */}
              <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 hover:bg-green-100 hover:text-green-500 transition-all duration-300">
                <FaShare />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;