import CreatePost from "../components/CreatePost";
import FollowBar from "../components/FollowBar";
import LeftSideNavBar from "../components/LeftSideNavBar";
import Posts from "../components/Posts";
import TrendingBar from "../components/TrendingBar";

const Home = () => {
  return (
   <div className="flex bg-gradient-to-b from-gray-800 to-black text-white min-h-screen">

  <LeftSideNavBar />

  <main className="flex-1 min-w-0 flex flex-col gap-5 items-center px-3 sm:px-5 lg:px-8 py-5">
    <div className="w-full max-w-2xl">
      <CreatePost />
    </div>

    <div className="w-full max-w-2xl">
      <Posts />
    </div>
  </main>

  <aside className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col gap-5 sticky top-0 h-screen p-5">
    <TrendingBar />
    <FollowBar />
  </aside>

</div>
  );
};

export default Home;

