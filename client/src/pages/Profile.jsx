import { Link, Outlet, useLocation } from "react-router-dom";
import TopProfile from "../components/TopProfile";
import UserProfileDetails from "../components/UserProfileDetails";
import CommentBar from "../components/CommentBar";

const Profile = () => {
  // 1. Call the hook to get the location object
  const location = useLocation(); 
  const pathname = location.pathname; // 2. Extract the pathname string

  const Linkness = (type = '') => {
  // Add transition-all and duration-300 to animate changes smoothly
  let classes = 'text-xl px-5 py-2 ';
  
  if (pathname === type) {
    // The border will now fade/slide in smoothly
    classes += 'border-b-2 border-gray-500';
  } else {
    // Ensure border is explicitly transparent or width 0 when inactive to avoid layout shifts
    classes += ' border-b-2 border-transparent'; 
  }
  return classes;
};   
  
  return (
      <div className="w-full">
        <TopProfile />
        <CommentBar />
        <UserProfileDetails />
        <div className="flex justify-between p-10">
          {/* Pass the specific path to check against */}
          <Link to='/profile' className={Linkness('/profile')}>
            Posts
          </Link>
          <Link to='/profile/followers' className={Linkness('/profile/followers')}>
            Followers
          </Link>
          <Link to='/profile/following' className={Linkness('/profile/following')}>
            Following
          </Link>
        </div>
        <Outlet />
      </div>
  );
};

export default Profile;   