'use client'

import React, { useState, useEffect } from 'react';
import { FaBookmark, FaShare, FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUser, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const EventDetailPage = ({ event, onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToCheckout, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization }) => {
  const [ticketQuantity, setTicketQuantity] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 252,
    hours: 2,
    minutes: 56,
    seconds: 5
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset countdown when it reaches 0
          return {
            days: 252,
            hours: 2,
            minutes: 56,
            seconds: 5
          };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Sample event data - in real app this would come from props or API
  const eventData = event || {
    id: 1,
    title: "Spring Showcase Saturday April 30th 2022 at 7pm",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=600&fit=crop",
    date: "Sat, Apr 30, 2022",
    time: "11:30 AM",
    duration: "2h",
    location: "00 Challis St, Newport, Victoria, 0000, Australia",
    organizer: "The Teeny Rabbit",
    price: 75,
    currency: "AUD",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ticketDescription: "2 x pair hand painted leather earrings 1 x glass of bubbles / or coffee Individual grazing box / fruit cup"
  };

  // Sample similar events data
  const similarEvents = [
    {
      id: 2,
      title: "A New Way Of Life",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      price: 100,
      currency: "AUD",
      date: "15 Apr • Fri, 3.45 PM",
      duration: "1h"
    },
    {
      id: 3,
      title: "Earrings Workshop with Bronwyn David",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      price: 75,
      currency: "AUD",
      date: "30 Apr • Sat, 11.20 PM",
      duration: "2h",
      remainingTickets: 6
    },
    {
      id: 4,
      title: "Spring Showcase Saturday April 30th 2022 at 7pm",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop",
      price: 0,
      currency: "AUD",
      date: "1 May • Sun, 4.30 PM",
      duration: "3h",
      isFree: true
    },
    {
      id: 5,
      title: "Shutter Life",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      price: 85,
      currency: "AUD",
      date: "1 May • Sun, 5.30 PM",
      duration: "1h",
      remainingTickets: 7
    }
  ];

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    // Share functionality
    console.log('Share event');
  };

  const handleQuantityChange = (change) => {
    setTicketQuantity(Math.max(0, ticketQuantity + change));
  };

  const handleBookNow = () => {
    console.log(`Booking ${ticketQuantity} tickets for ${eventData.title}`);
    if (onNavigateToCheckout) {
      onNavigateToCheckout(eventData, ticketQuantity || 1); // Default to 1 ticket if none selected
    } else {
      console.error('onNavigateToCheckout function not provided');
    }
  };

  const handleBrowseAll = () => {
    onExploreEvents();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-96 bg-gradient-to-r from-purple-600 to-purple-800">
        <img 
          src={eventData.image} 
          alt={eventData.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        {/* Save and Share Buttons */}
        <div className="absolute top-6 right-6 flex space-x-3">
          <button 
            onClick={handleBookmark}
            className={`p-3 rounded-lg transition-all duration-200 ${
              isBookmarked 
                ? 'bg-purple-600 text-white' 
                : 'bg-white bg-opacity-90 text-gray-700 hover:bg-opacity-100'
            }`}
          >
            <FaBookmark size={20} />
          </button>
          <button 
            onClick={handleShare}
            className="p-3 bg-white bg-opacity-90 text-gray-700 rounded-lg hover:bg-opacity-100 transition-all duration-200"
          >
            <FaShare size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Breadcrumb */}
            <nav className="mb-6">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li className="text-gray-400">/</li>
                <li>
                  <button 
                    onClick={onExploreEvents}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    Explore Events
                  </button>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-gray-800 font-medium">
                  Venue Event Detail View
                </li>
              </ol>
            </nav>

            {/* Event Title and Details */}
            <div className="mb-8">
              <div className="flex items-start space-x-4 mb-4">
                {/* Date Box */}
                <div className="bg-purple-600 text-white p-4 rounded-lg text-center min-w-[80px]">
                  <div className="text-sm font-semibold">APR</div>
                  <div className="text-2xl font-bold">30</div>
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {eventData.title}
                  </h1>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium mr-3">
                      Venue Event
                    </span>
                    <FaCalendarAlt className="mr-1" />
                    <span>Starts on {eventData.date} {eventData.time}</span>
                    <span className="mx-2">•</span>
                    <span>{eventData.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About This Event */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Event</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {eventData.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Countdown Timer */}
              <div className="bg-purple-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Countdown</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple-600 text-white p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">{countdown.days}</div>
                    <div className="text-xs">DAYS</div>
                  </div>
                  <div className="bg-purple-600 text-white p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">{countdown.hours}</div>
                    <div className="text-xs">HOURS</div>
                  </div>
                  <div className="bg-purple-600 text-white p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">{countdown.minutes}</div>
                    <div className="text-xs">MINUTES</div>
                  </div>
                  <div className="bg-purple-600 text-white p-3 rounded-lg text-center">
                    <div className="text-2xl font-bold">{countdown.seconds}</div>
                    <div className="text-xs">SECONDS</div>
                  </div>
                </div>
              </div>

              {/* Event Details */}
              <div className="space-y-6">
                {/* Organizer */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaUser className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Organised by</div>
                    <div className="font-semibold text-gray-900">{eventData.organizer}</div>
                    <button className="text-purple-600 text-sm hover:text-purple-700 transition-colors">
                      View Profile
                    </button>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCalendarAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Date and Time</div>
                    <div className="font-semibold text-gray-900">{eventData.date} {eventData.time}</div>
                    <button className="text-purple-600 text-sm hover:text-purple-700 transition-colors">
                      Add to Calendar
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold text-gray-900">{eventData.location}</div>
                    <button className="text-purple-600 text-sm hover:text-purple-700 transition-colors flex items-center">
                      <FaMapMarkerAlt className="mr-1" size={12} />
                      View Map
                    </button>
                  </div>
                </div>
              </div>

              {/* Ticket Selection */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Tickets</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">
                        {eventData.currency} ${eventData.price}.00
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {eventData.ticketDescription}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button 
                        onClick={() => handleQuantityChange(-1)}
                        className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-semibold">{ticketQuantity}</span>
                      <button 
                        onClick={() => handleQuantityChange(1)}
                        className="w-8 h-8 bg-gray-300 hover:bg-gray-400 rounded-full flex items-center justify-center transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Current Total */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-600">
                      {ticketQuantity}x Ticket(s)
                    </span>
                    <span className="font-semibold text-gray-900">
                      {eventData.currency} ${(ticketQuantity * eventData.price).toFixed(2)}
                    </span>
                  </div>
                  
                  <button 
                    onClick={handleBookNow}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Events Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">More Events</h2>
            <button 
              onClick={handleBrowseAll}
              className="text-purple-600 hover:text-purple-700 font-medium flex items-center transition-colors"
            >
              Browse All
              <FaChevronRight className="ml-1" size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <button className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors">
                    <FaBookmark size={16} />
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
                      <FaCalendarAlt className="mr-2 text-gray-400" size={12} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-gray-400" size={12} />
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

export default EventDetailPage;
