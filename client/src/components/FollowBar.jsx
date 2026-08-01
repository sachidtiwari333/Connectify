
const FollowBar = () => {
  return (
    <div className="flex flex-col gap-3 text-white p-3 lg:p-5 w-full">
      <h1 className="text-xl lg:text-2xl font-bold">
        Who to follow
      </h1>

      <div className="flex items-center justify-between w-full p-1 gap-2">
        <div className="flex gap-2 lg:gap-3 items-center min-w-0">
          <img
            src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="w-10 lg:w-12 h-10 lg:h-12 rounded-full shrink-0 object-cover"
          />

          <div className="flex flex-col min-w-0">
            <p className="text-sm lg:text-md truncate">
              Full Name
            </p>
            <p className="text-xs lg:text-sm text-gray-400 truncate">
              @username
            </p>
          </div>
        </div>

        <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-amber-500 rounded-2xl text-sm lg:text-base shrink-0 hover:bg-amber-600 active:scale-95">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between w-full p-1 gap-2">
        <div className="flex gap-2 lg:gap-3 items-center min-w-0">
          <img
            src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="w-10 lg:w-12 h-10 lg:h-12 rounded-full shrink-0 object-cover"
          />

          <div className="flex flex-col min-w-0">
            <p className="text-sm lg:text-md truncate">
              Full Name
            </p>
            <p className="text-xs lg:text-sm text-gray-400 truncate">
              @username
            </p>
          </div>
        </div>

        <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-amber-500 rounded-2xl text-sm lg:text-base shrink-0 hover:bg-amber-600 active:scale-95">
          Follow
        </button>
      </div>

      <div className="flex items-center justify-between w-full p-1 gap-2">
        <div className="flex gap-2 lg:gap-3 items-center min-w-0">
          <img
            src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
            alt=""
            className="w-10 lg:w-12 h-10 lg:h-12 rounded-full shrink-0 object-cover"
          />

          <div className="flex flex-col min-w-0">
            <p className="text-sm lg:text-md truncate">
              Full Name
            </p>
            <p className="text-xs lg:text-sm text-gray-400 truncate">
              @username
            </p>
          </div>
        </div>

        <button className="px-3 lg:px-4 py-1.5 lg:py-2 bg-amber-500 rounded-2xl text-sm lg:text-base shrink-0 hover:bg-amber-600 active:scale-95">
          Follow
        </button>
      </div>
    </div>
  );
};

export default FollowBar;

