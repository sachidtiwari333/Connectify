import axios from "axios";
import { toast, Bounce } from "react-toastify";

const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/logout",
        {},
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response.data);
      toast.success("🎉 User Sign-In successfully!", {
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
    } catch (err) {
      toast.error(err.response?.data?.message || "Sign-In failed", {
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
    <div>
      <button
        onClick={handleLogout}
        className="px-5 py-2 bg-red-500 rounded-2xl m-10 cursor-pointer hover:bg-red-900 active:scale-95 text-2xl"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;