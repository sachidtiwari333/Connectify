import { House, Telescope, Bell, MessageSquareText,ScrollText,User, CircleEllipsis,Pencil,CircleUserRound, EllipsisVertical  } from "lucide-react"

const LeftSideNavBar = () => {
  return (
    <div className="p-5 flex flex-col gap-5 text-white items-start w-80 justify-between min-h-screen ">
      <div className="flex flex-col gap-3 w-full">
      <h1 className="text-3xl text-shadow-gray-8000 font-bold">Connectify</h1>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <House size={20} />
        Home
      </button>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <Telescope size={20} />
        Explore
      </button>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <Bell size={20} />
        Notifications
      </button>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <MessageSquareText size={20} />
        Messages
      </button>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <ScrollText size={20} />
        List
      </button>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <User size={20} />
        Profile
      </button>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full active:bg-gray-900">
        <CircleEllipsis size={20} />
        More
      </button>
      <button className="flex items-center justify-center gap-3 px-3 py-2 rounded-xl w-full bg-amber-400 cursor-pointer">
        <Pencil size={20} />
        Create Post
      </button>
      </div>
      <button className="flex items-center justify-between w-full ">
        <div className="flex gap-3">
          <CircleUserRound size={40} />
        <div className="flex flex-col ">
          <p>Full Name</p>
          <p className="-mt-2">@username</p>
        </div>
        </div>
        <EllipsisVertical size={20} />
      </button>
    </div>
  )
}

export default LeftSideNavBar