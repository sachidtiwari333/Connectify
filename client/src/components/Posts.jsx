import { Ellipsis, Heart, Bookmark,MessageCircle,Download } from "lucide-react";

const Posts = () => {
  return (
    <div className="w-full md:w-full  flex flex-col gap-5 items-center lg:items-start lg:p-10">
      <div className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3 md:w-full w-90">
        <div className="flex items-center justify-between w-full ">
          <div className="flex gap-3">
            <img
              src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
              className="w-12 rounded-full"
            />
            <div className="flex flex-col ">
              <p className="text-md">Full Name</p>
              <p className="-mt-1 text-sm text-gray-700">@username</p>
            </div>
          </div>
          <Ellipsis />
        </div>
        <img src="https://media.gettyimages.com/id/1124485411/vector/mental-power-concept.jpg?s=612x612&w=0&k=20&c=x71PJ7QUUplpmGCr1TM7Ogr2IkPJl-7twDuGZBNIgbc=" className="w-2xl rounded-2xl">
        </img>
        <div className="flex justify-around w-full ">
          <Heart />
          <MessageCircle />
          <Bookmark />
          <Download />
        </div>
      </div>
      <div className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3  md:w-full w-90">
        <div className="flex items-center justify-between w-full ">
          <div className="flex gap-3">
            <img
              src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
              className="w-12 rounded-full"
            />
            <div className="flex flex-col ">
              <p className="text-md">Full Name</p>
              <p className="-mt-1 text-sm text-gray-700">@username</p>
            </div>
          </div>
          <Ellipsis />
        </div>
        <img src="https://media.gettyimages.com/id/1124485411/vector/mental-power-concept.jpg?s=612x612&w=0&k=20&c=x71PJ7QUUplpmGCr1TM7Ogr2IkPJl-7twDuGZBNIgbc=" className="w-2xl rounded-2xl">
        </img>
        <div className="flex justify-around w-full ">
          <Heart />
          <MessageCircle />
          <Bookmark />
          <Download />
        </div>
      </div>
      <div className="flex flex-col rounded-2xl justify-center items-center border-2 border-gray-400 p-5 max-w-180 gap-3  md:w-full w-90">
        <div className="flex items-center justify-between w-full ">
          <div className="flex gap-3">
            <img
              src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
              alt=""
              className="w-12 rounded-full"
            />
            <div className="flex flex-col ">
              <p className="text-md">Full Name</p>
              <p className="-mt-1 text-sm text-gray-700">@username</p>
            </div>
          </div>
          <Ellipsis />
        </div>
        <img src="https://media.gettyimages.com/id/1124485411/vector/mental-power-concept.jpg?s=612x612&w=0&k=20&c=x71PJ7QUUplpmGCr1TM7Ogr2IkPJl-7twDuGZBNIgbc=" className="w-2xl rounded-2xl">
        </img>
        <div className="flex justify-around w-full ">
          <Heart />
          <MessageCircle />
          <Bookmark />
          <Download />
        </div>
      </div>
    </div>
  );
};

export default Posts;
