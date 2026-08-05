import { SquarePen } from "lucide-react";
import { Link } from "react-router-dom";

const TopProfile = (props) => {
  return (
    <div className="relative">
      <div
        className={`w-full h-60 bg-cover bg-center relative ${!props.coverImage ? "bg-gray-900" : ""}`}
        style={
          props.coverImage
            ? { backgroundImage: `url('${props.coverImage}')` }
            : {}
        }
      >
        <Link
          to="/profile/edit"
          className="absolute right-0 bottom-0 px-5 py-2 m-5 border-2 border-gray-800 rounded-3xl hidden md:block lg:block "
        >
          Edit Profile
        </Link>
        <button className="absolute right-0 bottom-0 m-5 rounded-3xl md:hidden">
          <SquarePen size={22} />
        </button>
      </div>
      {props.profileImage ? (
        <img
          src={props.profileImage}
          alt="Profile Image"
          className="w-25 md:w-35 lg:w-40 rounded-full -mt-12 md:-mt-15 lg:-mt-20 border-4 border-amber-200 ml-10 absolute sticky"
        />
      ) : (
        <img
          src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
          alt="profile"
          className="w-25 md:w-35 lg:w-40 rounded-full -mt-12 md:-mt-15 lg:-mt-20 border-4 border-amber-200 ml-10 absolute sticky"
        />
      )}
    </div>
  );
};

export default TopProfile;

// <div className="relative w-full">
//           Cover Image
//           <div className="h-48 sm:h-56 md:h-64 w-full overflow-hidden rounded-b-xl">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1712685912272-96569030d1d7?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="coverImage"
//               className="h-full w-full object-cover"
//             />

//           <div className="relative px-4 sm:px-6 md:px-8">
//             <div className="flex items-end justify-between gap-4">
//               <div className="-mt-16 sm:-mt-20">
//                 <div
//                   className="
//           h-28 w-28
//           sm:h-36 sm:w-36
//           md:h-40 md:w-40
//           rounded-full
//           border-4 border-white
//           bg-white
//           p-1
//           shadow-lg
//         "
//                 >
//                   <img
//                     src="https://img.magnific.com/premium-vector/business-man-avatar-profile_1133257-2431.jpg?semt=ais_hybrid&w=740&q=80"
//                     alt="profile"
//                     className="h-full w-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>

//               <div className="mb-2">

//                 <button
//                   className="
//           hidden sm:flex
//           items-center gap-2
//           rounded-full
//           border-2 border-gray-500
//           px-5 py-2.5
//           font-medium
//           transition-all duration-200
//           hover:bg-amber-300
//           hover:shadow-md
//           active:scale-95
//         "
//                 >
//                   Edit Profile
//                 </button>

//                 <button
//                   className="
//           flex sm:hidden
//           items-center justify-center
//           rounded-full
//           border-2 border-gray-500
//           p-2.5
//           transition-all duration-200
//           hover:bg-amber-300
//           hover:shadow-md
//           active:scale-95
//         "
//                 >
//                   <SquarePen size={20} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
