
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">Connectify</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <Link to='/' className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to='/about' className="text-gray-700 hover:text-blue-600 transition">About</Link>
            <Link to='/services' className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to='/contact' className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <Link to='/signin' className="px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">
              Sign In
            </Link>
            <Link to='/signup' className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to='/' className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Home</Link>
            <Link to='/about' className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded transition">About</Link>
            <Link to='/services' className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Services</Link>
            <Link to='/contact' className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded transition">Contact</Link>
            <div className="flex gap-2 pt-2">
              <Link to='/signup' className="flex-1 px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition">
                Sign In
              </Link>
              <Link to='/signup' className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar