import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const LogoutButton = () => {
  const navigate = useNavigate()
  const {setUser}  = useAuth()
  const logout = async() =>{
    try{
      const response = await axios.post( 'http://localhost:3000/api/v1/auth/logout',
        {},
        {
          withCredentials : true
        }
       )
       setUser(null)
       navigate('/login')
    }catch(err){
      console.log(err);
      
    }
  } 
  return (
    <>
      <button className="flex gap-3 items-center bg-red-500 hover:bg-red-800 px-3 py-2 rounded-xl w-full justify-center" onClick={()=>{
        logout()
      }}>Logout</button>
    </>
  )
}

export default LogoutButton