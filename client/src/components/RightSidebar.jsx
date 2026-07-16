import axios from "axios";
import { useEffect, useState } from "react";

const RightSidebar = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async()=>{
    try{
      const response  = await axios.get(
        'http://localhost:3000/api/v1/user/suggested-user',
        {
          withCredentials : true
        },
      )
      await setUsers(response.data.data)
      
    }catch(err){
      console.log(err.message);
      
    }
  }
   useEffect(() => {
    fetchUsers()
  }, []);
   
  return (
    <div className="space-y-6">

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">
          Trending
        </h2>

        <div className="space-y-3">
          <p>#ReactJS</p>
          <p>#TailwindCSS</p>
          <p>#JavaScript</p>
          <p>#NodeJS</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-lg p-6">
        <h2 className="font-bold text-xl mb-4">
          Suggested Users
        </h2>

        {users.map((user) => (
          <div
            key={user._id}
            className="flex justify-between items-center mb-4"
          >
            <div className="flex gap-3 items-center">
              {/* <img
                src={`https://i.pravatar.cc/150?img=${item}`}
                className="w-10 h-10 rounded-full"
              /> */}
              <div className="w-16 h-16 rounded-full border-4 border-white bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold shadow-xl">
              {user?.fullname?.charAt(0).toUpperCase()}
            </div>
              <div>
                <h3>{user.fullname}</h3>
                <p className="text-sm text-gray-500">@user{user.username}</p>
              </div>
            </div>

            <button className="bg-cyan-600 text-white px-3 py-1 rounded-full">
              Follow
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RightSidebar;