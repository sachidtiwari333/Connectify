import CreatePost from "../components/CreatePost"
import FollowBar from "../components/FollowBar"
import LeftSideNavBar from "../components/LeftSideNavBar"
import Posts from "../components/Posts"
import TrendingBar from "../components/TrendingBar"

const Home = () => {
  return (
    <div className="display flex justify-between bg-gradient-to-b from-gray-800 to-black text-white min-h-screen grid grid-cols-12">
      <div className="col-span-3 sticky top-0 h-screen shrink-0">
              <LeftSideNavBar />
      </div>
      <div className="w-full flex flex-col gap-5 items-center col-span-6  p-8">
        <CreatePost />
        <Posts />
      </div>
      <div className="col-span-3 sticky top-0 h-screen shrink-0">
        <TrendingBar />
        <FollowBar />
      </div>
    </div>
  )
}

export default Home