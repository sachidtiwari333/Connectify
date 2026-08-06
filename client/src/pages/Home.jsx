import axios from "axios";
import CreatePost from "../components/CreatePost";
import FollowBar from "../components/FollowBar";

import Post from "../components/Post";
import TrendingBar from "../components/TrendingBar";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const feed = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/user/post/posts",
          {
            withCredentials: true,
          },
        );
        setPosts(response.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    feed();
  }, []);

  return (
    <>
      <main className="flex-1 min-w-0 flex flex-col items-center px-3 sm:px-5 lg:px-8 py-5">
        <div className="w-full max-w-2xl">
          <CreatePost />
        </div>

        <div className="w-full max-w-2xl">
          {
            posts.map((post) => {
              return(
                <Post key={post._id} post = {post}  />
              )
            })
          }
        </div>
      </main>

      <aside className="hidden lg:flex lg:w-72 xl:w-80 shrink-0 flex-col gap-5 sticky top-0 h-screen p-5">
        <TrendingBar />
        <FollowBar />
      </aside>
    </>
  );
};

export default Home;
