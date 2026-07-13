import PostCreate from "./PostCreate";
import Posts from "./Posts";

const Feed = ({ user }) => {
  return (
    <div className="space-y-6">

      <PostCreate />

      <Posts posts={user?.posts} />

    </div>
  );
};

export default Feed;