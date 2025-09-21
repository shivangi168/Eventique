'use client'

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const DiscoverEventsPage = ({ onEventClick }) => {
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

  // Sample events data
  const events = [
    {
      id: 1,
      title: "A New Way Of Life",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      price: 100,
      currency: "AUD",
      date: "15 Apr • Fri, 3.45 PM",
      duration: "1h"
    },
    {
      id: 2,
      title: "Earrings Workshop with Bronwyn David",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      price: 75,
      currency: "AUD",
      date: "30 Apr • Sat, 11.20 PM",
      duration: "2h",
      remainingTickets: 6
    },
    {
      id: 3,
      title: "Spring Showcase Saturday April 30th 2022 at 7pm",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      price: 0,
      currency: "AUD",
      date: "1 May • Sun, 4.30 PM",
      duration: "3h",
      isFree: true
    },
    {
      id: 4,
      title: "Shutter Life",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      price: 85,
      currency: "AUD",
      date: "1 May • Sun, 5.30 PM",
      duration: "1h",
      remainingTickets: 7
    }
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
                  Explore Events
                </li>
              </ol>
            </nav>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => onEventClick && onEventClick(event)}
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                    </svg>
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-3">
                    <div className="text-lg font-bold text-gray-900">
                      {event.isFree ? 'Free*' : `${event.currency} $${event.price}*`}
                    </div>
                    {event.remainingTickets && (
                      <div className="text-sm text-gray-500">
                        {event.remainingTickets} Remaining
                      </div>
                    )}
                  </div>
                  
                  <div className="text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <svg className="w-3 h-3 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-3 h-3 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>{event.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverEventsPage; 