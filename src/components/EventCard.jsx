// File: src/components/EventCard.jsx
import React from 'react';
import { FaBookmark, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const EventCard = ({ event }) => {
  const {
    id,
    title,
    image,
    price,
    currency = 'AUD',
    remainingTickets,
    date,
    time,
    duration,
    location,
    isFree = false
  } = event;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Event Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover"
        />
        {/* Bookmark Icon */}
        <button className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
          <FaBookmark size={16} />
        </button>
      </div>

      {/* Event Details */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-3 text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Price and Tickets */}
        <div className="flex justify-between items-center mb-3">
          <div className="text-lg font-bold text-gray-900">
            {isFree ? 'Free*' : `${currency} ${price}*`}
          </div>
          {remainingTickets && (
            <div className="text-sm text-gray-500 flex items-center">
              <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              {remainingTickets} Remaining
            </div>
          )}
        </div>

        {/* Event Info */}
        <div className="space-y-2 text-sm text-gray-600">
          {date && (
            <div className="flex items-center">
              <FaCalendarAlt className="mr-2 text-gray-400" size={12} />
              <span>{date}</span>
              {time && (
                <>
                  <span className="mx-2">•</span>
                  <span>{time}</span>
                </>
              )}
            </div>
          )}
          
          {duration && (
            <div className="flex items-center">
              <FaClock className="mr-2 text-gray-400" size={12} />
              <span>{duration}</span>
            </div>
          )}

          {location && (
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-400" size={12} />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
