//this will add the home , find parking,my booking
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/Firebase";
import { toast } from "react-toastify";

const Header = ({ user, isAdmin, onLoginClick, onProtectedNav }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      toast.error("Error logging out");
    }
  };

  const handleNavClick = (path) => {
    if (!user) {
      onProtectedNav?.(path);
    } else {
      navigate(path);
    }
    // Close mobile menu when navigating
    closeMobileMenu();
  };

  const openMobileMenu = () => {
    setShowMenu(true);
    // Small delay to ensure DOM is updated before animation
    setTimeout(() => {
      setIsMobileMenuOpen(true);
      setIsAnimating(true);
    }, 100);
  };

  const closeMobileMenu = () => {
    setIsAnimating(false);
    setIsMobileMenuOpen(false);
    // Wait for animation to complete before hiding the menu
    setTimeout(() => {
      setShowMenu(false);
    }, 350); // Match this with CSS transition duration
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen || showMenu) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMenu]);

  return (
    <header className="bg-yellow-400 shadow-md py-5 px-6 sticky top-0 z-50 relative">
      <div className="p-4 flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button - Left side */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-900 hover:text-white focus:outline-none focus:text-white transition-all duration-300 hover:scale-110 hover:rotate-3"
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          
          <NavLink
            to="/"
            className="text-3xl font-extrabold text-gray-900 flex items-center"
          >
            <span>Urb</span>
            <span className="text-white">Park</span>
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 text-lg ml-8">
            <NavLink to="/" className="hover:text-white font-medium text-gray-800 transition-all duration-200 hover:scale-105">
              Home
            </NavLink>
            <button
              onClick={() => handleNavClick("/find")}
              className="hover:text-white font-medium text-gray-800 transition-all duration-200 hover:scale-105"
            >
              Find Parking
            </button>
            <button
              onClick={() => handleNavClick(isAdmin ? "/admin" : "/profile")}
              className="hover:text-white font-medium text-gray-800 transition-all duration-200 hover:scale-105"
            >
              {/* {isAdmin ? "Admin Dashboard" : */} My Bookings{/* } */}
            </button>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">

          {/* User Profile/Login */}
          <div className="relative" ref={dropdownRef}>
            {user ? (
              <>
                <button
                  aria-expanded={isDropdownOpen}
                  aria-controls="user-menu"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center border-2 border-white hover:scale-105 transition-transform"
                >
                  {user.email.charAt(0).toUpperCase()}
                </button>

                {isDropdownOpen && (
                  <div
                    id="user-menu"
                    className="absolute right-2 top-14 w-72 z-50 bg-white rounded-xl shadow-lg border border-gray-200 ring-1 ring-yellow-400/30 backdrop-blur-sm transition-all duration-300"
                  >
                    {/* User Info Header */}
                    <div className="px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-yellow-50 via-white to-yellow-50 rounded-t-xl">
                      <p className="text-xs text-gray-600 uppercase font-semibold tracking-wide">
                        Signed in as
                      </p>
                      <p className="text-sm font-medium text-gray-700 mt-1 truncate">
                        {user.email}
                      </p>
                    </div>

                    {/* Dropdown Options */}
                    <div className="flex flex-col py-2">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-5 py-3 text-sm text-red-600 font-semibold hover:bg-red-50 hover:text-red-700 transition-colors duration-200 rounded-b-xl"
                      >
                        🔓 Logout
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 font-bold transition-transform hover:scale-105"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      {showMenu && (
        <>
          {/* Overlay with fade animation */}
          <div 
            className={`fixed inset-0 bg-black z-40 md:hidden transition-all duration-350 ease-out ${
              isMobileMenuOpen ? 'bg-opacity-50 backdrop-blur-sm' : 'bg-opacity-0'
            }`}
            onClick={closeMobileMenu}
          ></div>
          
          {/* Sidebar with slide animation */}
          <div className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-2xl z-50 md:hidden transition-all duration-350 ease-out ${
            isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          }`}>
            <div className="p-6 h-full flex flex-col">
              {/* Close button with enhanced hover */}
              <button
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 text-gray-900 hover:text-white transition-all duration-200 hover:scale-110 hover:rotate-90 p-2 rounded-full hover:bg-yellow-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Logo with animation */}
              <div className="mb-12 mt-4">
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={`text-3xl font-extrabold text-gray-900 flex items-center hover:scale-105 transition-all duration-300 ${
                    isAnimating 
                      ? 'opacity-100 transform translate-y-0 transition-delay-100' 
                      : 'opacity-0 transform translate-y-4'
                  }`}
                >
                  <span>Urb</span>
                  <span className="text-white">Park</span>
                </NavLink>
              </div>
              
              {/* Navigation with enhanced hover effects and staggered animation */}
              <nav className="space-y-3 flex-1">
                <NavLink
                  to="/"
                  onClick={closeMobileMenu}
                  className={`group block text-gray-800 hover:text-white font-medium text-xl py-4 px-4 rounded-xl hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    isAnimating 
                      ? 'opacity-100 transform translate-x-0 transition-delay-200' 
                      : 'opacity-0 transform translate-x-8'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:animate-bounce"></span>
                    <span>Home</span>
                  </div>
                </NavLink>
                
                <button
                  onClick={() => handleNavClick("/find")}
                  className={`group block w-full text-left text-gray-800 hover:text-white font-medium text-xl py-4 px-4 rounded-xl hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    isAnimating 
                      ? 'opacity-100 transform translate-x-0 transition-delay-300' 
                      : 'opacity-0 transform translate-x-8'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:animate-bounce"></span>
                    <span>Find Parking</span>
                  </div>
                </button>
                
                <button
                  onClick={() => handleNavClick(isAdmin ? "/admin" : "/profile")}
                  className={`group block w-full text-left text-gray-800 hover:text-white font-medium text-xl py-4 px-4 rounded-xl hover:bg-yellow-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                    isAnimating 
                      ? 'opacity-100 transform translate-x-0 transition-delay-400' 
                      : 'opacity-0 transform translate-x-8'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl group-hover:animate-bounce"></span>
                    <span>My Bookings</span>
                  </div>
                </button>
              </nav>
              
              {/* Footer with animation */}
              <div className={`mt-8 pt-6 border-t border-yellow-300 transition-all duration-300 ${
                isAnimating 
                  ? 'opacity-100 transform translate-y-0 transition-delay-500' 
                  : 'opacity-0 transform translate-y-4'
              }`}>
                <p className="text-gray-700 text-sm text-center">
                  Welcome to UrbPark! 
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;