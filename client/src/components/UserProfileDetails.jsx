import { SquarePlus } from "lucide-react"

const UserProfileDetails = () => {
  return (
    <div className="p-5 flex flex-col gap-3">
      <div className="-mt-3">
              <h1 className="text-2xl">Full Name</h1>
      <p className="text-md text-gray-600 -mt-2">@username</p>
      </div>

      <p className="whitespace-pre-wrap max-w-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae expedita atque incidunt deserunt, </p>
      <p className="flex gap-2">
        <button className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1 animate-float">Travelling</button>
        <button className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1 animate-float">Running</button>
        <button className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1 animate-float">Gaming</button>
      </p>
      <p className="flex gap-2 ">
        <button className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1 animate-float">Traveller</button>
        <button className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1 animate-float">Gamer</button>
        <button className="border-2 border-gray-500  font-semibold rounded-2xl transition hover:scale-95 px-2 py-1 animate-float">Photgrapher</button>
      </p>
      <p className="flex text-gray-600 gap-2"><SquarePlus />Join July 2026</p>
      <div className="flex gap-4">
        <p className="flex gap-1">348<span className="text-gray-600 font-semibold">Following</span></p>
        <p className="flex gap-1">563<span className="text-gray-600 font-semibold">Follower</span></p>
        <p className="flex gap-1">1,603<span className="text-gray-600 font-semibold">Like </span></p>
      </div>
    </div>
  )
}

export default UserProfileDetails