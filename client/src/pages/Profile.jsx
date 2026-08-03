import { Link, Outlet, useLocation } from "react-router-dom";
import TopProfile from "../components/TopProfile";
import UserProfileDetails from "../components/UserProfileDetails";

const Profile = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const Linkness = (type = "") => {
    let classes = "text-xl px-5 py-2 ";

    if (pathname === type) {
      classes += "border-b-2 border-gray-500";
    } else {
      classes += " border-b-2 border-transparent";
    }
    return classes;
  };

  return (
    <div className="w-full">
      <TopProfile />
      <UserProfileDetails />
      <div className="flex justify-between p-10">
        <Link to="/profile" className={Linkness("/profile")}>
          Posts
        </Link>
        <Link
          to="/profile/followers"
          className={Linkness("/profile/followers")}
        >
          Followers
        </Link>
        <Link
          to="/profile/following"
          className={Linkness("/profile/following")}
        >
          Following
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Profile;
