import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DiscoverEventsPage = () => {
  const [browseFilter, setBrowseFilter] = useState('Browse All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const browseOptions = [
    'Browse All', 'Today', 'Tomorrow', 'This Week', 'This Weekend',
    'Next Week', 'Next Weekend', 'This Month', 'Next Month'
  ];

  const categoryOptions = [
    'All', 'Arts', 'Business', 'Concert', 'Workshops', 
    'Health and Wellbeing', 'Sports', 'Free Events'
  ];

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
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Discover Events For All The Things You Love
            </h1>
          </div>

          {/* Search Filters */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
            {/* Browse Filter Dropdown */}
            <div className="relative">
              <select
                value={browseFilter}
                onChange={(e) => setBrowseFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-48"
              >
                {browseOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Category Filter Dropdown */}
            <div className="relative">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="appearance-none bg-white border border-gray-200 rounded-lg px-6 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-w-48"
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>

            {/* Find Button */}
            <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              Find
            </button>
          </div>

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
        </div>
      </div>
    </div>
  );
};

export default DiscoverEventsPage; 