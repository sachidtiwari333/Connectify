import { CircleUserRound, EllipsisVertical } from "lucide-react"

const Followers = () => {
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
       <button className="flex items-center justify-between w-65">
            <div className="flex gap-3">
              <CircleUserRound size={40} />

              <div className="flex flex-col">
                <p>Full Name</p>
                <p className="-mt-2">@username</p>
              </div>
            </div>

            <EllipsisVertical size={20} />
          </button>
        <button className="flex items-center justify-between w-65">
            <div className="flex gap-3">
              <CircleUserRound size={40} />

              <div className="flex flex-col">
                <p>Full Name</p>
                <p className="-mt-2">@username</p>
              </div>
            </div>

            <EllipsisVertical size={20} />
          </button>
<button className="flex items-center justify-between w-65">
            <div className="flex gap-3">
              <CircleUserRound size={40} />

              <div className="flex flex-col">
                <p>Full Name</p>
                <p className="-mt-2">@username</p>
              </div>
            </div>

            <EllipsisVertical size={20} />
          </button>
<button className="flex items-center justify-between w-65">
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
  )
}

export default Followers