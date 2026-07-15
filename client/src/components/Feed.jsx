import PostCreate from "./PostCreate";
import Posts from "./Posts";

const Feed = ({ posts }) => {

  
  return (
    <div className="space-y-6">

      <PostCreate />

      <Posts posts={posts} />

    </div>
  );
};

export default Feed;