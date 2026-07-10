import { useState } from "react";
import axios from "axios";
import { toast, Bounce } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});
  const submitHandler = async (e) => {
    e.preventDefault();
    await setUser({ fullname, username, email, password });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        user,
      );
      console.log(response);
      toast.success("🎉 User registered successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/signin");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <div className="flex flex-col items-center m-16 gap-10">
      <h1 className="text-3xl">Create your account</h1>
      <p className="text-2xl">
        Join Connectify and start connecting with the world
      </p>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-5 items-center bg-amber-200 p-10 rounded-4xl"
      >
        <input
          type="text"
          placeholder="Full Name"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button
          className="bg-blue-500 px-7 py-4 border-none rounded-3xl"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
