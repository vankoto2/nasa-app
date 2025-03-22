import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="text-2xl font-extrabold tracking-wide">
                        <Link to="/" className="hover:text-gray-200 transition duration-300">
                            NASA
                        </Link>
                    </div>
                    <div className="hidden sm:flex space-x-6 text-lg font-medium">
                        <Link to="/" className="hover:text-gray-300 transition duration-300">
                            Home
                        </Link>
                        <Link
                            to="/apod"
                            className="hover:text-gray-300 transition duration-300"
                        >
                            Astronomy Picture of the Day
                        </Link>
                        <Link
                            to="/earth"
                            className="hover:text-gray-300 transition duration-300"
                        >
                            Earth View
                        </Link>
                        <Link
                            to="/epic"
                            className="hover:text-gray-300 transition duration-300"
                        >
                            EPIC Images
                        </Link>
                    </div>
                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-8 h-8"
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
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="sm:hidden">
                        <ul className="flex flex-col space-y-2 text-lg font-medium">
                            <li>
                                <Link
                                    to="/"
                                    onClick={toggleMenu}
                                    className="block py-2 px-4 hover:bg-red-600 rounded transition duration-300"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/apod"
                                    onClick={toggleMenu}
                                    className="block py-2 px-4 hover:bg-red-600 rounded transition duration-300"
                                >
                                    Astronomy Picture of the Day
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/earth"
                                    onClick={toggleMenu}
                                    className="block py-2 px-4 hover:bg-red-600 rounded transition duration-300"
                                >
                                    Earth View
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/epic"
                                    onClick={toggleMenu}
                                    className="block py-2 px-4 hover:bg-red-600 rounded transition duration-300"
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
