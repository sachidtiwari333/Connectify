import axios from "axios";
import { SendHorizontal, X } from "lucide-react";
import { useState } from "react";
const CommentBar = (props) => {
  const [commentLoading, setCommentLoading] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(props.comments || []);
  const commentHandler = async (e, postId) => {
    e.preventDefault();
    if (!comment.trim()) return;
    if (commentLoading) return;
    try {
      setCommentLoading(true);
      const response = await axios.post(
        `http://localhost:3000/api/v1/user/post/${postId}/comment`,
        {
          text: comment,
        },
        {
          withCredentials: true,
        },
      );
      console.log(response);
      setComments(response.data.data.comments);
      setComment("");
    } catch (err) {
      console.log(err);
    } finally {
      setCommentLoading(false);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      {/* Popup */}
      <div className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Comments</h2>

            <p className="text-sm text-gray-500">
              {props.comments?.length} comments
            </p>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={() => props.onClose(false)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-gray-200 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Comments */}
        <div className="flex-1 max-h-100 overflow-y-auto px-5 py-5">
          <div className="space-y-5">
            {comments.map((comment, index) => (
              <div key={comment._id || index} className="flex gap-3">
                {/* Profile */}
                <div className="shrink-0">
                  {comment.user?.profileImage ? (
                    <img
                      src={comment.user.profileImage}
                      alt="Profile"
                      className="h-11 w-11 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
                      <h1 className="text-lg font-semibold text-gray-600">
                        {comment.user?.fullname?.charAt(0)?.toUpperCase() ||
                          "U"}
                      </h1>
                    </div>
                  )}
                </div>

                {/* Comment */}
                <div className="flex-1">
                  <div className="inline-block max-w-[90%] rounded-2xl bg-gray-100 px-4 py-3">
                    <h1 className="text-sm font-semibold text-gray-900">
                      {comment.user?.fullname || "User"}
                    </h1>

                    <p className="mt-1 text-sm leading-relaxed text-gray-700">
                      {comment.text}
                    </p>
                  </div>

                  <div className="mt-1 flex gap-4 px-3">
                    <button
                      type="button"
                      className="text-xs font-semibold text-gray-500 hover:text-black"
                    >
                      Like
                    </button>

                    <button
                      type="button"
                      className="text-xs font-semibold text-gray-500 hover:text-black"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comment input */}
        <form className="border-t border-gray-200 bg-white p-4">
          <div className="flex items-center gap-3 rounded-full bg-gray-100 px-4 py-2">
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 bg-transparent text-sm text-gray-800 outline-none placeholder:text-gray-500"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />

            <button
              type="submit"
              onClick={(e) => {
                commentHandler(e, props.postId);
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:bg-gray-800"
            >
              <SendHorizontal size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentBar;
