import { SquarePlus } from "lucide-react"

const UserProfileDetails = ({user}) => {
  return (
    <div className="p-5 flex flex-col gap-3">
      <div className="-mt-3">
              <h1 className="text-2xl">{user?.fullname}</h1>
      <p className="text-md text-gray-600 -mt-2">@{user?.username}</p>
      </div>

      <p className="whitespace-pre-wrap max-w-100">{user?.bio}</p>
      <p className="flex gap-2">
        {
          user?.tags.map((tag, index) =>{
            return (
               <button key={index} className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1  ">{tag}</button>
            )
          })
        }
      </p>
      <p className="flex gap-2">
        {
          user?.hobbies.map((hobby, index) =>{
            return (
               <button key={index} className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1  ">{hobby}</button>
            )
          })
        }
      </p>
      <p className="flex text-gray-600 gap-2"><SquarePlus />Join {user?.createdAt.split("T")[0]}</p>
      <div className="flex gap-4">
        <p className="flex gap-1">{user?.following?.length ?? 0}<span className="text-gray-600 font-semibold">Following</span></p>
        <p className="flex gap-1">{user?.following?.length ?? 0}<span className="text-gray-600 font-semibold">Follower</span></p>
        <p className="flex gap-1">{user?.posts?.length ?? 0}<span className="text-gray-600 font-semibold">Post </span></p>
      </div>
    </div>
  )
}

export default UserProfileDetails