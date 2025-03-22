import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-red-500 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold">
            <Link to="/">NASA</Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/apod" className="hover:text-gray-300">
              Astronomy Picture of the Day
            </Link>
            <Link to="/earth" className="hover:text-gray-300">
              Earth View
            </Link>
            <Link to="/epic" className="hover:text-gray-300">
              EPIC Images
            </Link>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={toggleMenu}
                  className="block py-2 px-4 hover:bg-red-600 rounded"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/apod"
                  onClick={toggleMenu}
                  className="block py-2 px-4 hover:bg-red-600 rounded"
                >
                  Astronomy Picture of the Day
                </Link>
              </li>
              <li>
                <Link
                  to="/earth"
                  onClick={toggleMenu}
                  className="block py-2 px-4 hover:bg-red-600 rounded"
                >
                  Earth View
                </Link>
              </li>
              <li>
                <Link
                  to="/epic"
                  onClick={toggleMenu}
                  className="block py-2 px-4 hover:bg-red-600 rounded"
                >
                  EPIC Images
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
