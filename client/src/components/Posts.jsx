const Posts = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {posts?.map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
        >
          {/* Image */}
          <div className="w-full h-56 overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="p-5">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 line-clamp-2">
              {post.title}
            </h2>

            <div className="flex justify-between items-center mt-5 text-gray-500 text-sm">
              <button className="hover:text-red-500 transition">
                ❤️ Like
              </button>

              <button className="hover:text-blue-500 transition">
                💬 Comment
              </button>

              <button className="hover:text-green-500 transition">
                📤 Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;