import { Ellipsis } from "lucide-react"

const TrendingBar = () => {
  return (
    <div className="flex flex-col gap-5 p-5 ">
      <h1 className='text-2xl font-bold'>Trends for you</h1>
      <button className="flex justify-between items-center cursor-pointer">
        <div className="flex flex-col items-start">
          <p className='text-md font-bold'>#WebDevelopment</p>
          <p className='text-gray-500 text-sm'>15.6K posts</p>
        </div>
        <Ellipsis size={20} />
      </button>
       <button className="flex justify-between items-center cursor-pointer">
        <div className="flex flex-col items-start">
          <p className='text-md font-bold'>#Nature</p>
          <p className='text-gray-500 text-sm'>13.2K posts</p>
        </div>
        <Ellipsis size={20} />
      </button>
       <button className="flex justify-between items-center cursor-pointer">
        <div className="flex flex-col items-start">
          <p className='text-md font-bold'>#Traveling</p>
          <p className='text-gray-500 text-sm'>11.6K posts</p>
        </div>
        <Ellipsis size={20} />
      </button>
       <button className="flex justify-between items-center cursor-pointer">
        <div className="flex flex-col items-start">
          <p className='text-md font-bold'>#GameDevelopment</p>
          <p className='text-gray-500 text-sm'>9.3K posts</p>
        </div>
        <Ellipsis size={20} />
      </button>
      <button className="text-blue-300">
        Show more
      </button>
    </div>
  )
}

export default TrendingBar