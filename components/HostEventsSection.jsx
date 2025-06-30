import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HostEventsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventTypes = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <path d="M16 8H8c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-1 9H9v-7h6v7z"/>
        </svg>
      ),
      title: 'Training & Workshop',
      description: 'Create and host profitable workshops and training sessions online, sell tickets and earn money.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <rect x="4" y="4" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M8 8h8M8 12h8M8 16h4" stroke="currentColor" strokeWidth="1"/>
        </svg>
      ),
      title: 'Online Class',
      description: 'Try our e-learning template to create a fantastic e-learning event page and drive engagement.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
        </svg>
      ),
      title: 'Talk Show',
      description: 'Use our intuitive built-in event template to create and host an engaging Talk Show.'
    },
    {
      id: 4,
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      title: 'Conference',
      description: 'Organize professional conferences with multiple speakers, sessions, and networking opportunities.'
    },
    {
      id: 5,
      icon: (
        <svg className="w-16 h-16 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: 'Networking Event',
      description: 'Create meaningful connections through structured networking events and meet-ups.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % (eventTypes.length - 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + (eventTypes.length - 2)) % (eventTypes.length - 2));
  };

  const visibleEvents = eventTypes.slice(currentSlide, currentSlide + 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Host Engaging Online and Venue Events with Barren
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Organise venue events and host online events with unlimited possibilities using our built-in virtual event platform. Build a unique event experience for you and your attendees.
          </p>
        </div>

        {/* Events Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentSlide === 0}
          >
            <FaChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            disabled={currentSlide >= eventTypes.length - 3}
          >
            <FaChevronRight className="w-5 h-5 text-gray-600" />
          </button>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-16">
            {visibleEvents.map((event) => (
              <div
                key={event.id}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-6">
                  {event.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: eventTypes.length - 2 }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === index ? 'bg-purple-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostEventsSection; 