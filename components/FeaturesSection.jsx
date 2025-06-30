import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h3l-1 1v1h12v-1l-1-1h3c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 13H4V5h16v11z"/>
          <path d="M6 7h12v2H6zM6 10h8v2H6z"/>
        </svg>
      ),
      title: 'Online Events',
      description: 'Built-in video conferencing platform to save you time and cost.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'Venue Event',
      description: 'Easy-to-use features to create and manage your venue events.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 17l-4-4 1.41-1.41L11 16.17l6.59-6.59L19 11l-8 8z"/>
          <path d="M9 3h6v2H9z"/>
        </svg>
      ),
      title: 'Engaging Event Page',
      description: 'Create engaging event pages with your logo and our hero image collage gallery.'
    },
    {
      id: 4,
      icon: (
        <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-10-9l4 2.5L10 14V9z"/>
          <path d="M15 9h2v2h-2zM15 12h2v2h-2z"/>
        </svg>
      ),
      title: 'Marketing Automation',
      description: 'Use our marketing automation tools to promote your events on social media and email.'
    },
    {
      id: 5,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2.38-2.53 2.1C.72 19.05.21 18.59.07 18.14c-.28-1.11.18-2.37 1.22-3.11.28-.2.62-.29.96-.29H7c0-.55-.45-1-1-1s-1 .45-1 1H3c0-1.66 1.34-3 3-3s3 1.34 3 3h-2zm10-7c0-2.21-1.79-4-4-4S9 4.79 9 7c0 1.11.89 2 2 2s2-.89 2-2c0-.55-.45-1-1-1s-1 .45-1 1H9c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.11-.89 2-2 2H4.5C3.67 9 3 9.67 3 10.5S3.67 12 4.5 12H9v8c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-8h4.5c.83 0 1.5-.67 1.5-1.5S18.33 9 17.5 9H17c0-1.11-.89-2-2-2s-2 .89-2 2z"/>
        </svg>
      ),
      title: 'Sell Tickets',
      description: 'Start monetising your online and venue events, sell unlimited* tickets.'
    },
    {
      id: 6,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zM16 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      title: 'Networking',
      description: 'Engage your attendees with the speakers using our interactive tools and build your own network.'
    },
    {
      id: 7,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      ),
      title: 'Recording',
      description: 'Securely record your online events and save on the cloud of your choice*.'
    },
    {
      id: 8,
      icon: (
        <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"/>
        </svg>
      ),
      title: 'Live Streaming',
      description: 'Livestream your online events on Facebook, YouTube and other social networks.'
    },
    {
      id: 9,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 7h14v2H5zM5 11h14v2H5zM5 15h10v2H5z"/>
        </svg>
      ),
      title: 'Event Analytics',
      description: 'Get detailed insights about your events and attendee engagement.'
    },
    {
      id: 10,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 13.5L8.5 16 12 18.5 15.5 16 12 13.5z"/>
        </svg>
      ),
      title: 'Multi-language Support',
      description: 'Create events in multiple languages to reach a global audience.'
    },
    {
      id: 11,
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>
        </svg>
      ),
      title: 'Custom Branding',
      description: 'Customize your event pages with your brand colors, logo, and styling.'
    },
    {
      id: 12,
      icon: (
        <svg className="w-12 h-12 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
      title: 'API Integration',
      description: 'Integrate with your existing tools and systems using our robust API.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            No Feature Overload, Get Exactly What You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            As well as being the most affordable online-based event registration tool and one of the best online event ticketing systems in Australia, Barren is super easy-to-use and built with a simplistic layout which is totally convenient for the organisers to operate.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 