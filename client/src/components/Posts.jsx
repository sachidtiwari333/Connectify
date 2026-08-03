import axios from "axios";
import {
  Ellipsis,
  Heart,
  Bookmark,
  MessageCircle,
  Download,
} from "lucide-react";
import { useEffect, useState } from "react";

const Posts = () => {
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
  console.log(posts);
  
  return (
    <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start lg:p-10">
      {
        posts?.map((post,index) =>{
          
          return(
          <div key={index} className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3 md:w-full w-90">
        <div className="flex items-center justify-between w-full ">
          <div className="flex gap-3">
            {
              post.createdBy.profileImage ? <img
              src={post.createdBy.profileImage}
              alt=""
              className="w-12 rounded-full"
            />
            :<h1>post.createdBy.fullname.charAt(0)</h1>

            }
            {/* <img
              src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
              className="w-12 rounded-full"
            /> */}
            <div className="flex flex-col ">
              <p className="text-md">{post.createdBy?.fullname}</p>
              <p className="-mt-1 text-sm text-gray-700">@{post.createdBy?.username}</p>
            </div>
          </div>
          <Ellipsis />
        </div>
        <div>
          <h1>{post.title}</h1>
        </div>
        <img
          src={post.image}
        ></img>
        <div className="flex items-center justify-around w-full pt-3 border-t border-gray-100 mt-2">
  {/* Likes */}
  <div className="flex items-center gap-2 cursor-pointer group">
    <Heart 
      className="w-6 h-6 transition-colors duration-200 "
    />
    <span className="text-sm font-semibold ">
      {post.likedBy?.length || 0}
    </span>
  </div>

  {/* Comments */}
  <div className="flex items-center gap-2 cursor-pointer group">
    <MessageCircle className="w-6 h-6 text-gray-500 group-hover:text-blue-500 transition-colors duration-200" />
    <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">
      {post.comments?.length || 0}
    </span>
  </div>

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
          )
        })
      }
      
      
    </div>
  );
};

export default Posts;
