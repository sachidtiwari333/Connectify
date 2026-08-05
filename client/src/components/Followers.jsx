import { CircleUserRound, EllipsisVertical } from "lucide-react"
import { useAuth } from "../context/AuthContext"
import UserCard from "./UserCard"

const Followers = () => {
  const {user, loading} = useAuth()
  if(loading){
    <h1>Loading ...</h1>
  }
  
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
       
       {
        user?.followers?.map((follower) =>{
          return (
            <UserCard key = {follower._id} fullname = {follower.fullname} username = {follower.username} profileImage = {follower.profileImage} />
          )
        })
       }
    </div>
  )
}

export default Followers