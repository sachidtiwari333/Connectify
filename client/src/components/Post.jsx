import { Heart, Bookmark, MessageCircle, Download } from "lucide-react";
import UserCard from "./UserCard";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CommentBar from "./CommentBar";
const Post = ({ post }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  const pathname = location.pathname;
  const [liked, setLiked] = useState(
    post?.likedBy?.some(
      (likedUser) => likedUser.toString() === user?._id?.toString(),
    ) || false,
  );
  const [likeCount, setLikeCount] = useState(post?.likedBy?.length || 0);
  const [likeLoading, setLikeLoading] = useState(false);
  const [showComment, setShowComment] = useState(false)
  useEffect(() => {
    if (!user || !post) return;

    const userAlreadyLiked = post?.likedBy?.some(
      (likedUser) => likedUser.toString() === user?._id?.toString(),
    )
    setLiked(userAlreadyLiked || false);

    setLikeCount(post?.likedBy?.length || 0);
  }, [post, user]);

  const likeHandler = async (postId) => {
    if (likeLoading) return;
    try {
      setLikeLoading(true);
      const response = await axios.post(
        `http://localhost:3000/api/v1/user/post/${postId}/like`,
        {},
        {
          withCredentials: true,
        },
      );

      setLiked(response.data.data.liked);
      setLikeCount(response.data.data.likeCount);
    } catch (err) {
      console.log("Like error : ", err);
    } finally {
      setLikeLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading ...</h1>;
  }
  if (!user) {
    return "Please login";
  }
  if (pathname === "/profile") {
    return (
      <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start">
        {user.posts.map((post) => {
          return (
            <div
              key={post._id}
              className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 max-w-180 gap-3 md:w-full w-90"
            >
              <div>
                <h1>{post.title}</h1>
              </div>

              <img
                src={post.image}
                alt="Post content"
                className="w-full rounded-lg"
              />

              <div className="flex items-center justify-around w-full pt-3 border-t border-gray-100 mt-2">
                {/* Likes */}
                <button className="flex items-center gap-2 cursor-pointer group">
                  <Heart className="w-6 h-6 transition-colors duration-200" />
                  <span className="text-sm font-semibold">
                    {post.likedBy.length}
                  </span>
                </button>

                {/* Comments */}
                <button onClick={()=>setShowComment(true)} className="flex items-center gap-2 cursor-pointer group">
                  <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">
                    {post.comments.length}
                  </span>
                </button>
            
                {/* Bookmark */}
                <div className="cursor-pointer group">
                  <Bookmark className="w-6 h-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" />
                </div>

                {/* Share/Download */}
                <div className="cursor-pointer group">
                  <Download className="w-6 h-6 text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
                </div>
              </div>
            </div>
          );
        })}
        {showComment && 
            <CommentBar 
            comments = {post?.comments} 
            postId = {post?._id} 
            onClose = {()=>{setShowComment(false)}} />}
      </div>
    );
  }

  return (
    <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start ">
      <div className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3 md:w-full w-90">
        <UserCard
          fullname={post?.createdBy?.fullname}
          username={post?.createdBy?.username}
          profileImage={post?.createdBy?.profileImage}
        />
        <div>
          <h1>{post?.title}</h1>
        </div>

        <img
          src={post?.image}
          alt="Post content"
          className="w-full rounded-lg"
        />

        <div className="flex items-center justify-around w-full pt-3 border-t border-gray-100 mt-2">
          {/* Likes */}
          <button
            onClick={() => {
              likeHandler(post._id);
            }}
            disabled={likeLoading}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <Heart
              className={`w-6 h-6 transition-all duration-200 ${
                liked
                  ? "text-red-500 fill-red-500 scale-110"
                  : "text-gray-500 group-hover:text-red-500"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                liked ? "text-red-500" : "text-gray-600"
              }`}
            >
              {likeCount}
            </span>
          </button>

          {/* Comments */}
          <button onClick={() => setShowComment(true)} className="flex items-center gap-2 cursor-pointer group">
            <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />
            <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">
              {post?.comments.length}
            </span>
          </button>
          
            {/* Bookmark */}
          <div className="cursor-pointer group">
            <Bookmark className="w-6 h-6 text-gray-500 group-hover:text-yellow-500 transition-colors duration-200" />
          </div>

          {/* Share/Download */}
          <div className="cursor-pointer group">
            <Download className="w-6 h-6 text-gray-500 group-hover:text-green-500 transition-colors duration-200" />
          </div>
        </div>
      </div>
      {showComment && 
            <CommentBar 
            comments = {post?.comments} 
            postId = {post?._id} 
            onClose = {()=>{setShowComment(false)}} />}
            
    </div>
  );
};

export default Post;
