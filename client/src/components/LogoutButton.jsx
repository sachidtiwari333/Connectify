import axios from "axios";
import { useNavigate } from "react-router-dom";


const LogoutButton = () => {
  const navigate = useNavigate()
  const logout = async() =>{
    try{
      const response = await axios.post( 'http://localhost:3000/api/v1/auth/logout',
        {},
        {
          withCredentials : true
        }
       )
       console.log(response);
       navigate('/login')
    }catch(err){
      console.log(err);
      
    }
  } 
  return (
    <>
      <button className="flex gap-3 items-center hover:bg-gray-600 px-3 py-2 rounded-xl w-full" onClick={()=>{
        logout()
      }}>Logout</button>
    </>
  )
}

export default LogoutButton