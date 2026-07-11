import { Link } from "react-router-dom";
import LogoutButton from "./LogutButton";

const Navbar = ({ success }) => {
  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition"
        >
          MyApp
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-lg">
          <Link
            to="/"
            className="hover:text-cyan-400 transition duration-200"
          >
            Home
          </Link>

          {success ? (
            <>
              <Link
                to="/profile"
                className="hover:text-cyan-400 transition duration-200"
              >
                Account
              </Link>

              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-cyan-400 transition duration-200"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg transition duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;