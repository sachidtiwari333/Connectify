import { EllipsisVertical  } from 'lucide-react'

const UserCard = (props) => {
  return (
    <>
    <button className="flex items-center justify-between w-full">
            <div className="flex gap-3">
              {
                props.profileImage 
                ? <img src={props.profileImage} alt='Profile Image' />
                : <h1 className='text-3xl font-bold'>{props.fullname?.charAt(0) || "U"}</h1>
              }

              <div className="flex flex-col">
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