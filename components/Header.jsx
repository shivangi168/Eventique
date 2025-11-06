'use client'

import { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaCog, FaUser, FaBuilding } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

import { MdLogout } from "react-icons/md";

const Header = ({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization, onNavigateToMyProfile }) => {
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
      <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex justify-between items-center" style={{ padding: '0.5rem 1rem' }}>
        {/* Logo */}
        <div 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            fontWeight: 'bold',
            fontSize: '1.125rem'
          }}
        >
          <div 
            style={{ 
              width: '1.5rem', 
              height: '1.5rem', 
              fontSize: '0.75rem',
              backgroundColor: '#8b5cf6',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            B
          </div>
          <span>Barren</span>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-600 hover:text-purple-600"
          onClick={() => toggleDropdown("mobile")}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
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
                
                >Venue Event Detail View</a>
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
              onClick={() => {
                toggleDropdown("blog");
                if (onNavigateToBlog) onNavigateToBlog();
              }}
              className="flex items-center gap-1 hover:text-purple-600"
            >
              Blog <FiChevronDown />
            </button>
            {openDropdown === "blog" && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded w-40">
                <button 
                  onClick={() => {
                    setOpenDropdown(null);
                    if (onNavigateToBlog) onNavigateToBlog();
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Latest Posts
                </button>
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

        {/* Mobile Menu Dropdown */}
        {openDropdown === "mobile" && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg border rounded-b-lg md:hidden">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block px-2 py-1 text-purple-600 font-medium">Home</a>
              <button 
                onClick={() => {
                  setOpenDropdown(null);
                  if (onExploreEvents) onExploreEvents();
                }}
                className="block w-full text-left px-2 py-1 text-gray-700 hover:text-purple-600"
              >
                Explore Events
              </button>
              <button 
                onClick={() => {
                  setOpenDropdown(null);
                  if (onNavigateToPricing) onNavigateToPricing();
                }}
                className="block w-full text-left px-2 py-1 text-gray-700 hover:text-purple-600"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  setOpenDropdown(null);
                  if (onNavigateToBlog) onNavigateToBlog();
                }}
                className="block w-full text-left px-2 py-1 text-gray-700 hover:text-purple-600"
              >
                Blog
              </button>
            </div>
          </div>
        )}

        {/* Right Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={() => {
              if (onCreateEvent) onCreateEvent();
            }}
            style={{ 
              display: 'flex',
              alignItems: 'center',
              fontSize: '0.75rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: '#8b5cf6',
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <FaCalendarAlt style={{ fontSize: '0.75rem', marginRight: '0.25rem' }} /> 
            <span>Create Event</span>
          </button>

          {/* Profile Dropdown */}
          <div ref={dropdownRefs.profile} className="relative">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-8 h-8 md:w-9 md:h-9 rounded-full cursor-pointer"
              onClick={() => toggleDropdown("profile")}
            />
            {openDropdown === "profile" && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg border rounded w-48">
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    if (onNavigateToMyProfile) onNavigateToMyProfile();
                  }}
                >
                  <FaUser /> My Profile
                </button>
                <button 
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
                  onClick={() => {
                    setOpenDropdown(null);
                    if (onNavigateToOrganization) onNavigateToOrganization();
                  }}
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
