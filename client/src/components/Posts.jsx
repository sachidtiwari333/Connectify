const Posts = ({ posts }) => {
  
  return (
    <div className="flex flex-col gap-10 ">
      { posts.map((post) => (
        <div
          key={post._id}
          className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col "
        >
          {post.createdBy.fullname ? <div className="flex gap-5 items-center m-3">
            <h1 className="text-4xl bg-amber-200 px-5 py-3 rounded-full">{post.createdBy?.fullname?.charAt(0)}</h1>
            <h1 className="text-3xl">{post.createdBy.fullname}</h1>
          </div> : null}
          
          {/* Image */}
          <div className=" rounded-3xl h-cover overflow-hidden m-5">
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
              <button className="hover:text-red-500 transition" >
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