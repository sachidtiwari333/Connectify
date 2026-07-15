import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";


const Home = ({ user,posts }) => {
  const isAuthenticated = !!user;
 
  
  const avatar = user?.fullname?.charAt(0)?.toUpperCase() || "U";
  
  
 
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar success={isAuthenticated} avatar = {avatar}/>

      <div className="max-w-7xl mx-auto pt-16 px-5">
        <div className="grid grid-cols-12 gap-6">

          {/* Left Sidebar */}
          <div className="hidden lg:block col-span-3">
            <LeftSidebar user={user} />
          </div>

          {/* Feed */}
          <div className="col-span-12 lg:col-span-7">
            <Feed posts={posts} />
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block col-span-2">
            <RightSidebar />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;