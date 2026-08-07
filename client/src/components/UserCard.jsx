import { EllipsisVertical  } from 'lucide-react'

const UserCard = (props) => {
  return (
    <>
    <button className="flex items-center justify-between w-full cursor-pointer ">
            <div className="flex gap-1 items-center justify-center">
              {
                props.profileImage 
                ? <img src={props.profileImage} className='w-20 h-20 rounded-full' alt='Profile Image' />
                : <h1 className='text-3xl font-bold'>{props.fullname?.charAt(0) || "U"}</h1>
              }

              <div className="flex flex-col items-start">
                <p>{props.fullname || "Unknown"}</p>
                <p className="-mt-2">@{props.username || "unknown"}</p>
              </div>
            </div>

            <EllipsisVertical size={20} />
          </button>
    </>
  )
}

export default UserCard