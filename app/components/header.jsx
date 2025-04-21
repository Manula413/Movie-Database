import { Link } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-[95%] mx-auto px-6 flex justify-between items-center rounded-[50px] py-2 mt-6">
      {/* Logo */}
      <Link to="/">
        <h1 className="text-[#C8E8C8] font-bold text-4xl font-[Rubik] tracking-wide drop-shadow-md">
          MOVIE DATABASE
        </h1>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-8 text-[#C8E8C8] font-[Rubik] text-lg relative">
        <Link to="/" className="hover:text-white transition duration-300">
          Home
        </Link>
        <Link to="/movies" className="hover:text-white transition duration-300">
          Movies
        </Link>
        <Link to="/lists" className="hover:text-white transition duration-300">
          Lists
        </Link>

        {/* Account Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="flex items-center space-x-2 cursor-pointer p-2 rounded-full hover:bg-white/10 transition duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src="/favicon.ico"
              alt="User"
              className="w-8 h-8 rounded-full border-2 border-white/20 hover:shadow-lg transition duration-300"
            />
            <ChevronDown className="w-5 h-5 text-[#C8E8C8]" />
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="absolute right-0 mt-2 bg-[#1F1F1F] bg-opacity-50 border border-gray-700 text-white p-3 w-48 rounded-lg shadow-lg z-50"
            >
              <Link
                to="/profile"
                className="block w-full text-left px-3 py-2 text-[#C8E8C8] hover:bg-gray-700 rounded transition-all duration-200"
              >
                Account
              </Link>
              <Link
                to="/settings"
                className="block w-full text-left px-3 py-2 text-[#C8E8C8] hover:bg-gray-700 rounded transition-all duration-200"
              >
                Settings
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
