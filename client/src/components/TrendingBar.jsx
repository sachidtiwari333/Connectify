
import { Ellipsis } from "lucide-react";

const TrendingBar = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-5  w-full">
      <h1 className="text-xl lg:text-2xl font-bold">
        Trends for you
      </h1>

      <button className="flex justify-between items-center cursor-pointer w-full gap-3 hover:bg-gray-700/50 rounded-lg">
        <div className="flex flex-col items-start min-w-0">
          <p className="text-sm lg:text-md font-bold truncate">
            #WebDevelopment
          </p>
          <p className="text-gray-500 text-xs lg:text-sm">
            15.6K posts
          </p>
        </div>

        <Ellipsis size={20} className="shrink-0" />
      </button>

      <button className="flex justify-between items-center cursor-pointer w-full gap-3 hover:bg-gray-700/50 rounded-lg p-2">
        <div className="flex flex-col items-start min-w-0">
          <p className="text-sm lg:text-md font-bold truncate">
            #Nature
          </p>
          <p className="text-gray-500 text-xs lg:text-sm">
            13.2K posts
          </p>
        </div>

        <Ellipsis size={20} className="shrink-0" />
      </button>

      <button className="flex justify-between items-center cursor-pointer w-full gap-3 hover:bg-gray-700/50 rounded-lg p-2">
        <div className="flex flex-col items-start min-w-0">
          <p className="text-sm lg:text-md font-bold truncate">
            #Traveling
          </p>
          <p className="text-gray-500 text-xs lg:text-sm">
            11.6K posts
          </p>
        </div>

        <Ellipsis size={20} className="shrink-0" />
      </button>

      <button className="flex justify-between items-center cursor-pointer w-full gap-3 hover:bg-gray-700/50 rounded-lg p-2">
        <div className="flex flex-col items-start min-w-0">
          <p className="text-sm lg:text-md font-bold truncate">
            #GameDevelopment
          </p>
          <p className="text-gray-500 text-xs lg:text-sm">
            9.3K posts
          </p>
        </div>

        <Ellipsis size={20} className="shrink-0" />
      </button>

      <button className="text-blue-300 text-left hover:text-blue-400">
        Show more
      </button>
    </div>
  );
};

export default TrendingBar;

