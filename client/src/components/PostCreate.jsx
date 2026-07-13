import axios from "axios";
import { useState } from "react";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/create-post",
        formData,
        {
          withCredentials: true,
        }
      );

      console.log("Post Created Successfully");
      console.log(response);

      // Clear form
      setTitle("");
      setImage("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        ✨ Create a New Post
      </h1>

      <form onSubmit={submitHandler} className="space-y-6">
        {/* Textarea */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            What's on your mind?
          </label>

          <textarea
            rows="5"
            className="w-full rounded-2xl border border-gray-300 p-4 text-lg outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none transition"
            placeholder="Share your thoughts..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Upload an Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full cursor-pointer rounded-xl border border-gray-300 p-3 file:mr-4 file:rounded-lg file:border-0 file:bg-cyan-600 file:px-4 file:py-2 file:text-white file:cursor-pointer hover:file:bg-cyan-700"
          />
        </div>

        {/* Selected Image */}
        {image && (
          <div className="bg-gray-100 rounded-xl p-3 text-gray-700">
            📷 Selected: <span className="font-semibold">{image.name}</span>
          </div>
        )}

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl text-xl font-semibold hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
        >
          🚀 Create Post
        </button>
      </form>
    </div>
  );
};

export default PostCreate;