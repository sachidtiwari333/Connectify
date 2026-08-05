import { CircleUserRound, EllipsisVertical } from "lucide-react"
import { useAuth } from "../context/AuthContext"

const Following = () => {
  const {user, loading} = useAuth()
  if(loading){
    <h1>Loading ...</h1>
  }
  
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
       
       {
        user?.following.map((followed, index) =>{
          return (
            <button key={index} className="flex items-center justify-between w-65">
            <div className="flex gap-3">
              <CircleUserRound size={40} />

              <div className="flex flex-col">
                <p>{followed?.fullname}</p>
                <p className="-mt-2">@{followed?.username}</p>
              </div>
            </div>

            <EllipsisVertical size={20} />
          </button>
          )
        })
       }
    </div>
  )
}

export default Following