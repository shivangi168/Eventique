'use client'

import { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaCog, FaUser, FaBuilding } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import { MdLogout } from "react-icons/md";

const Header = ({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = {
    events: useRef(null),
    blog: useRef(null),
    help: useRef(null),
    pages: useRef(null),
    profile: useRef(null),
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      Object.values(dropdownRefs).forEach((ref) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setOpenDropdown(null);
        }
      });
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white w-8 h-8 flex items-center justify-center rounded-full">B</div>
          <span>Barren</span>
        </div>

        {/* Nav Links */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-purple-600 font-medium">Home</a>

          {/* Explore Events Dropdown */}
          <div ref={dropdownRefs.events} className="relative">
            <button
              onClick={() => {
                toggleDropdown("events");
                if (onExploreEvents) onExploreEvents();
              }}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Explore Events <FiChevronDown />
            </button>
            {openDropdown === "events" && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-52">
                <button 
                  onClick={() => {
                    setOpenDropdown(null);
                    if (onExploreEvents) onExploreEvents();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Explore Events
                </button>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100"

                onClick={() =>{
                  onCreateVenue();
                  setOpenDropdown(null);
                }}
                
                >Venue Event Detail Viewhhhhhhhhhhhhhhhhhhh</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Online Event Detail View</a>
              </div>
            )}
          </div>

          {/* Pricing */}
          <button 
            onClick={() => {
              if (onNavigateToPricing) onNavigateToPricing();
            }}
            className="hover:text-purple-600"
          >
            Pricing
          </button>

          {/* Blog Dropdown */}
          <div ref={dropdownRefs.blog} className="relative">
            <button
              onClick={() => toggleDropdown("blog")}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Blog <FiChevronDown />
            </button>
            {openDropdown === "blog" && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Latest Posts</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Categories</a>
              </div>
            )}
          </div>

          {/* Help Dropdown */}
          <div ref={dropdownRefs.help} className="relative">
            <button
              onClick={() => toggleDropdown("help")}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Help <FiChevronDown />
            </button>
            {openDropdown === "help" && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">FAQs</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
              </div>
            )}
          </div>

          {/* Pages Dropdown */}
          <div ref={dropdownRefs.pages} className="relative">
            <button
              onClick={() => toggleDropdown("pages")}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Pages <FiChevronDown />
            </button>
            {openDropdown === "pages" && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-64">
                <div className="px-4 py-3 border-b border-gray-100">
                  <h4 className="text-sm font-semibold text-purple-600 mb-2">Other Pages</h4>
                  <div className="space-y-1">
                    <button 
                      onClick={() => {
                        setOpenDropdown(null);
                        if (onCreateEvent) onCreateEvent();
                      }}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded"
                    >
                      Create Event
                    </button>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Events View</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Booking Confirmed</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Attendee Profile View</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Organiser Profile View</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Organization Dashboard</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Sell Tickets Online</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Refer a Friend</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Terms & Conditions</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Privacy Policy</a>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="space-y-1">
                    <button 
                      onClick={() => {
                        setOpenDropdown(null);
                        if (onLogin) onLogin();
                      }}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded"
                    >
                      Sign In
                    </button>
                    <button 
                      onClick={() => {
                        setOpenDropdown(null);
                        if (onSignUp) onSignUp();
                      }}
                      className="w-full text-left px-2 py-1 text-sm hover:bg-gray-50 rounded"
                    >
                      Sign Up
                    </button>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Forgot Password</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">About Us</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Checkout</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Checkout Premium</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Invoice</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Coming Soon</a>
                    <a href="#" className="block px-2 py-1 text-sm hover:bg-gray-50 rounded">Error 404</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => {
              if (onCreateEvent) onCreateEvent();
            }}
            className="flex items-center bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <FaCalendarAlt className="mr-2" /> Create Event
          </button>

          {/* Profile Dropdown */}
          <div ref={dropdownRefs.profile} className="relative">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-9 h-9 rounded-full cursor-pointer"
              onClick={() => toggleDropdown("profile")}
            />
            {openDropdown === "profile" && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded w-48">
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setOpenDropdown(null)}
                >
                  <FaUser /> My Profile
                </button>
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => setOpenDropdown(null)}
                >
                  <FaBuilding /> My Organisation
                </button>
                <hr className="my-1" />
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500 flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    if (onLogout) {
                      onLogout();
                    }
                  }}
                >
                  <MdLogout /> Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
