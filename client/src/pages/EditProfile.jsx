import {
  UserRound,
  AtSign,
  Hash,
  Star,
  UserRoundPlus,
} from "lucide-react";
import TagInput from "../components/TagInput";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const EditProfile = () => {
  const {user , loading} = useAuth()
  const [tags, setTags] = useState(user.tags);
  const [hobbies, setHobbies] = useState(user.hobbies);
  const [fullname, setFullname] = useState(user.fullname);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [profileImage, setProfileImage] = useState("")
  const [coverImage, setCoverImage] = useState("")
  const navigate = useNavigate();

  if(loading){
    return<h1>Loading</h1>
  }
  if(!user){
    return<h1>Please login</h1>
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData
    formdata.append("fullname", fullname)
    formdata.append("username", username)
    formdata.append("bio", bio)
    formdata.append("tags", tags)
    formdata.append("hobbies", hobbies)
    formdata.append("profileImage", profileImage)
    formdata.append("coverImage", coverImage)
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/edit-profile",
        formdata,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
    console.log("Form submitted");
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white min-h-screen font-mono">
      <form
        action=""
        className="flex flex-col gap-6 w-full"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div>
          <label htmlFor="fullname">Profile image</label>
         
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setProfileImage(e.target.files[0])
              }}
              placeholder="Enter your full name"
              className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
            />
             {profileImage && (
          <div className="bg-gray-100 rounded-xl p-3 text-gray-700">
            📷 Selected: <span className="font-semibold">{profileImage.name}</span>
          </div>
        )}
        </div>
        <div>
          <label htmlFor="fullname">Cover image</label>
         
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                setCoverImage(e.target.files[0])
              }}
              className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
            />
             {coverImage && (
          <div className="bg-gray-100 rounded-xl p-3 text-gray-700">
            📷 Selected: <span className="font-semibold">{coverImage.name}</span>
          </div>
        )}
        </div>
        <div>
          <label htmlFor="fullname">Full Name</label>
          <div className="relative w-full mt-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <UserRound className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
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
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter your username"
              className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
            />
          </div>
          <p className="text-gray-400 mt-2 text-sm">
            This will beyour unique indentify on Connectify.
          </p>
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="bio">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
            }}
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

          <p className="text-gray-400 text-sm">Add hobbies you enjoy doing.</p>
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

        <button
          type="submit"
          className="flex gap-3 bg-green-700 py-3 px-4 rounded-xl items-center justify-center text-lg sm:text-xl active:scale-95 hover:bg-green-800 w-full"
        >
          <UserRoundPlus className="w-5 h-5" />
          Edit profile
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
