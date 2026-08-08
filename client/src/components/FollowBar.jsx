import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const FollowBar = () => {
  const [suggestionLoading, setSuggestionLoading] = useState(false);
  const [suggestedUser, setSuggestedUser] = useState([]);
  const fetchSuggestedUser = async () => {
    if (suggestionLoading) return;
    try {
      setSuggestionLoading(true);
      const response = await axios.get(
        "http://localhost:3000/api/v1/user/suggested-user",
        {
          withCredentials: true,
        },
      );
      console.log(response);
      setSuggestedUser(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchSuggestedUser();
  }, []);
  
  const followhandler = async(userId) =>{
    try{
      const response = await axios.post(
        `http://localhost:3000/api/v1/user/${userId}/follow`,
        {},
        {
          withCredentials : true
        }
      )
      console.log(response);
      
    }catch(err){
      Error(err)
    }
  }
  return (
    <div className="flex flex-col gap-3 text-white  w-full">
      <h1 className="text-xl lg:text-2xl font-bold">Who to follow</h1>

      {suggestedUser?.map((suggestion) => {
        return (
          <div
            key={suggestion._id}
            className="flex items-center justify-between w-full gap-2"
          >
            <div className="flex gap-2 lg:gap-3 items-center min-w-0">
              {
                suggestion.profileImage 
                ? <img src={suggestion.profileImage} className='w-20 h-20 rounded-full' alt='Profile Image' />
                : <h1 className='text-3xl font-bold'>{suggestion.fullname?.charAt(0) || "U"}</h1>
              }

              <div className="flex flex-col min-w-0">
                <p className="text-sm lg:text-md truncate">
                  {suggestion?.fullname}
                </p>
                <p className="text-xs lg:text-sm text-gray-400 truncate">
                  @{suggestion?.username}
                </p>
              </div>
            </div>

            <button onClick={()=>{
              followhandler(suggestion._id)
            }} className="px-3 lg:px-4 py-1.5 lg:py-2 bg-amber-500 rounded-2xl text-sm lg:text-base shrink-0 hover:bg-amber-600 active:scale-95">
              Follow
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowBar;
