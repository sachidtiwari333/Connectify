import { CircleUserRound, Image, ImagePlay, Video, Vote } from "lucide-react";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState('')

  return (

      <form className="max-w-180 border-2 border-gray-500 w-full rounded-2xl p-5 flex flex-col gap-5 ">
        <div className="flex gap-3 ">
          <CircleUserRound size={40} className="" />

          <textarea
            rows={1}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value)
            }}
            onInput={(e) => {
              e.currentTarget.style.height = "0px";
              e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
            }}
            
            placeholder="What's in your mind, Janne ?"
            className="w-full resize-none overflow-hidden  border-gray-300 px-3 py-2 focus:border-gray-300 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-5">
            <Image size={20} />
            <ImagePlay size={20} />
            <Video size={20} />
            <Vote size={20} />
          </div>
          <button className="px-4 py-1 bg-amber-500 rounded-xl" type="submit">Post</button>
        </div>
      </form>

  );
};

export default CreatePost;
