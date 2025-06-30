'use client'

import React from 'react';
import { FaVideo, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const CreateEventPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-teal-100 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-blue-400 transform rotate-45 translate-x-48 -translate-y-48"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-blue-300 to-teal-400 transform rotate-45"></div>
        <div className="absolute top-40 right-80 w-24 h-24 bg-gradient-to-br from-purple-200 to-purple-300 transform rotate-45"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-teal-300 to-blue-400 transform rotate-45 translate-x-32 translate-y-32"></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-300 transform rotate-45"></div>
      </div>

      <div className="relative z-10 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                    Home
                  </a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-medium">
                  Create
                </li>
              </ol>
            </nav>
          </div>

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Create New Event
            </h1>
          </div>

          {/* Event Type Cards */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Online Event Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaVideo className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Create an Online Event
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Host virtual events, webinars, workshops, and online meetings. 
                    Connect with attendees from anywhere in the world with our 
                    built-in video conferencing platform.
                  </p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                  Create
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>

              {/* Venue Event Card */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaMapMarkerAlt className="w-8 h-8 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Create a Venue Event
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Organize in-person events at physical venues. Perfect for 
                    conferences, workshops, concerts, and networking events. 
                    Manage registrations and ticket sales effortlessly.
                  </p>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center">
                  Create
                  <FaArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEventPage; 