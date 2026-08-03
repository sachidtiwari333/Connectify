
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const submitHandler = async(e) =>{
    e.preventDefault()
    try{
      axios.post(
        'http://localhost:3000/api/v1/auth/login',
        {
          email,
          password
        },{
          withCredentials : true,
          headers : {
            "Content-Type" : "application/json"
          }
        }
      )
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center px-4 sm:px-6 py-6">
      <div className="p-5 sm:p-8 flex flex-col items-start gap-5 justify-center bg-gray-800 text-white rounded-2xl w-full max-w-[520px]">
        
        <div className="w-full">
          <h1 className="text-2xl sm:text-3xl">Welcome Back!</h1>
          <p className="text-gray-300 mt-2 text-sm sm:text-base">
            Login to continue Connectify
          </p>
        </div>

        <form action="" className="flex flex-col gap-6 w-full" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <div>
            <label htmlFor="email">Email Address</label>

            <div className="relative w-full mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>

              <input
                id="email"
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                type="email"
                placeholder="Enter your email"
                className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <div className="relative w-full mt-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock className="w-5 h-5 text-gray-400" />
              </div>

              <input
                id="password"
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password"
                placeholder="Enter your password"
                className="rounded px-10 py-2 border-2 border-gray-500 w-full focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <input
              type="checkbox"
              name="agreement"
              className="accent-green-400 h-6 w-6 shrink-0 mt-1"
            />

            <p className="text-sm sm:text-base">
              I agree with{" "}
              <span className="text-blue-400">Terms of Services</span> and{" "}
              <span className="text-blue-400">Privacy Policy</span>
            </p>
          </div>

          <button type="submit" className="flex gap-3 bg-green-700 py-3 px-4 rounded-xl items-center justify-center text-lg sm:text-xl active:scale-95 hover:bg-green-800 w-full">
            Login
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

export default Login;