import React, { useState } from 'react';
import EventCard from './EventCard';

const EventsSection = ({ onEventClick }) => {
  const [activeTimeFilter, setActiveTimeFilter] = useState('All');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');
  const [showAllEvents, setShowAllEvents] = useState(false);

  const timeFilters = [
    'All', 'Today', 'Tomorrow', 'This Week', 'This Weekend', 
    'Next Week', 'Next Weekend', 'This Month', 'Next Month', 
    'This Year', 'Next Year'
  ];

  const categoryFilters = [
    'All', 'Arts', 'Business', 'Concert', 'Workshops', 
    'Coaching and Consulting', 'Health and Wellbeing', 
    'Volunteer', 'Sports', 'Free'
  ];

  // Sample event data
  const allEvents = [
    {
      id: 1,
      title: 'A New Way Of Life',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: '100.00',
      currency: 'AUD',
      date: '15 Apr',
      time: 'Fri, 3:45 PM',
      duration: '1h'
    },
    {
      id: 2,
      title: 'Earrings Workshop with Bronwyn David',
      image: 'https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      price: '75.00',
      currency: 'AUD',
      remainingTickets: 6,
      date: '30 Apr',
      time: 'Sat, 11:20 PM',
      duration: '2h'
    },
    {
      id: 3,
      title: 'Spring Showcase Saturday April 30th 2022 at 7pm',
      image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      isFree: true,
      date: '1 May',
      time: 'Sun, 4:30 PM',
      duration: '3h'
    },
    {
      id: 4,
      title: 'Shutter Life',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: '85.00',
      currency: 'AUD',
      remainingTickets: 7,
      date: '1 May',
      time: 'Sun, 5:30 PM',
      duration: '1h'
    },
    {
      id: 5,
      title: 'Friday Night Dinner at The Old Station May 27 2022',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      price: '41.50',
      currency: 'AUD',
      date: '27 May',
      time: 'Fri, 12:00 PM',
      duration: '5h'
    },
    {
      id: 6,
      title: 'Step Up Open Mic Show',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: '200.00',
      currency: 'AUD',
      date: '30 Jun',
      time: 'Thu, 4:30 PM',
      duration: '1h'
    },
    {
      id: 7,
      title: 'Tutorial on Canvas Painting for Beginners',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: '50.00',
      currency: 'AUD',
      remainingTickets: 17,
      date: '17 Jul',
      time: 'Sun, 5:30 PM',
      duration: '1h'
    },
    {
      id: 8,
      title: 'Trainee Program on Leadership 2022',
      image: 'https://images.unsplash.com/photo-1554048612-b6ebae92138d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: '120.00',
      currency: 'AUD',
      remainingTickets: 7,
      date: '20 Jul',
      time: 'Wed, 11:30 PM',
      duration: '12h'
    },
    // Additional events for "See More" functionality
    {
      id: 9,
      title: 'Digital Marketing Masterclass',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2015&q=80',
      price: '150.00',
      currency: 'AUD',
      remainingTickets: 12,
      date: '25 Jul',
      time: 'Mon, 9:00 AM',
      duration: '4h'
    },
    {
      id: 10,
      title: 'Yoga and Mindfulness Retreat',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2020&q=80',
      price: '80.00',
      currency: 'AUD',
      remainingTickets: 20,
      date: '30 Jul',
      time: 'Sat, 7:00 AM',
      duration: '6h'
    },
    {
      id: 11,
      title: 'Food and Wine Festival',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '45.00',
      currency: 'AUD',
      remainingTickets: 50,
      date: '5 Aug',
      time: 'Fri, 5:00 PM',
      duration: '5h'
    },
    {
      id: 12,
      title: 'Tech Startup Pitch Night',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      isFree: true,
      date: '10 Aug',
      time: 'Wed, 6:30 PM',
      duration: '3h'
    }
  ];

  // Display only first 8 events initially, all events when showAllEvents is true
  const events = showAllEvents ? allEvents : allEvents.slice(0, 8);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Events</h2>

        {/* Time Filters */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {timeFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveTimeFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTimeFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategoryFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategoryFilter === filter
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {events.map((event) => (
            <div 
              key={event.id} 
              onClick={() => onEventClick && onEventClick(event)}
              className="cursor-pointer"
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          {!showAllEvents ? (
            <button 
              onClick={() => setShowAllEvents(true)}
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              See More
            </button>
          ) : (
            <button 
              onClick={() => setShowAllEvents(false)}
              className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventsSection; 