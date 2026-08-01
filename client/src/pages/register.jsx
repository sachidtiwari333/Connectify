import {
  UserRound,
  AtSign,
  Mail,
  Lock,
  Hash,
  Star,
  UserRoundPlus,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import TagInput from "../components/TagInput";
import { useState } from "react";

const Register = () => {
  const [tags, setTags] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center px-4 sm:px-6 py-6">
      <div className="p-5 sm:p-8 flex flex-col items-start gap-5 justify-center bg-gray-800 text-white rounded-2xl w-full max-w-[520px]">
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl">Create your account</h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Fill in the detials below to get started
          </p>
        </div>

        <form action="" className="flex flex-col gap-6 w-full">
          <div>
            <label htmlFor="fullname">Full Name</label>
            <div className="relative w-full mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <UserRound className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <label htmlFor="fullname">Username</label>
            <div className="relative w-full mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <AtSign className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              This will beyour unique indentify on Connectify.
            </p>
          </div>

          <div>
            <label htmlFor="fullname">Email Address</label>
            <div className="relative w-full mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your full name"
                className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <label htmlFor="fullname">Password</label>
            <div className="relative w-full mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Enter your username"
                className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
            <p className="text-gray-400 mt-2 text-sm">
              Minimum 8 charaters with letters and numbers.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="bio">Bio</label>
            <textarea
              placeholder="Tell us something about yourself ..."
              className="border-2 border-gray-500 p-3 rounded-xl w-full resize-none focus:outline-none focus:ring-0"
              maxLength={150}
            />
            <p className="text-gray-400 text-sm">
              A short bio that others can see in your profile.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>Tags (Interests)</label>

            <TagInput
              items={tags}
              setItems={setTags}
              placeholder="Type a tag and press Enter"
              Icon={Hash}
            />

            <p className="text-gray-400 text-sm">
              Add topics you are interested in.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <label>Hobbies</label>

            <TagInput
              items={hobbies}
              setItems={setHobbies}
              placeholder="Type a hobby and press Enter"
              Icon={Star}
            />

            <p className="text-gray-400 text-sm">
              Add hobbies you enjoy doing.
            </p>
          </div>

          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              name="agrement"
              className="accent-green-400 h-6 w-6 shrink-0 mt-1"
            />
            <p className="text-sm sm:text-base">
              I agree with{" "}
              <span className="text-blue-400">Terms of Services </span> and{" "}
              <span className="text-blue-400">Privacy Policy </span>
            </p>
          </div>

          <button className="flex gap-3 bg-green-700 py-3 px-4 rounded-xl items-center justify-center text-lg sm:text-xl active:scale-95 hover:bg-green-800 w-full">
            <UserRoundPlus className="w-5 h-5" />
            Create Account
          </button>
        </form>

        <div className="flex items-center my-4 sm:my-6 w-full">
          <div className="flex-1 border-t border-gray-600"></div>

          <span className="px-4 text-sm text-gray-500">OR</span>

          <div className="flex-1 border-t border-gray-600"></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <button className="flex gap-3 border-2 border-gray-500 px-5 py-2 rounded-xl hover:bg-gray-900 active:scale-95 items-center justify-center flex-1">
            <FcGoogle size={22} />
            Google
          </button>

          <button className="flex gap-3 border-2 border-gray-500 px-5 py-2 rounded-xl hover:bg-gray-900 active:scale-95 items-center justify-center flex-1">
            <FaGithub size={22} />
            Github
          </button>

          <button className="flex gap-3 border-2 border-gray-500 px-5 py-2 rounded-xl hover:bg-gray-900 active:scale-95 items-center justify-center flex-1">
            <FaApple size={22} />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;