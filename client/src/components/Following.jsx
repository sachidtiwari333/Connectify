import { useAuth } from "../context/AuthContext"
import UserCard from "./UserCard"
const Following = () => {
  const {user, loading} = useAuth()
  if(loading){
    <h1>Loading ...</h1>
  }
  
  return (
    <div className="flex flex-wrap justify-between gap-10 p-10">
       
       {
        user?.following?.map((followed) =>{
          return (
            <UserCard key = {followed._id} fullname = {followed.fullname} username = {followed.username} profileImage = {followed.profileImage} />
          )
        })
       }
    </div>
  )
}

export default Following