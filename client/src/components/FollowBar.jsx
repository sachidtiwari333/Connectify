
const FollowBar = () => {
  return (
    <div className="flex flex-col gap-3  text-white p-5 min-w-80">
      <h1 className="text-2xl font-bold">Who to follow</h1>
      <div className="flex items-center justify-between w-full p-1">
        <div className="flex gap-3">
          <img src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-12 rounded-full" />
        <div className="flex flex-col ">
          <p className="text-md">Full Name</p>
          <p className="-mt-1 text-sm text-gray-700">@username</p>
        </div>
        </div>
        <button className="px-4 py-2 bg-amber-500 rounded-2xl">Follow</button>
      </div>
      <div className="flex items-center justify-between w-full p-1">
        <div className="flex gap-3">
          <img src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-12 rounded-full" />
        <div className="flex flex-col ">
          <p className="text-md">Full Name</p>
          <p className="-mt-1 text-sm text-gray-700">@username</p>
        </div>
        </div>
        <button className="px-4 py-2 bg-amber-500 rounded-2xl">Follow</button>
      </div>
      <div className="flex items-center justify-between w-full p-1">
        <div className="flex gap-3">
          <img src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80" alt="" className="w-12 rounded-full" />
        <div className="flex flex-col ">
          <p className="text-md">Full Name</p>
          <p className="-mt-1 text-sm text-gray-700">@username</p>
        </div>
        </div>
        <button className="px-4 py-2 bg-amber-500 rounded-2xl">Follow</button>
      </div>
    </div>
  )
}

export default FollowBar