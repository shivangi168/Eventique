import React, { useState } from 'react';

const StepsSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      number: '01',
      title: 'Create Your Event',
      description: 'Sign up for free and create your event easily in minutes.',
      isActive: true
    },
    {
      id: 2,
      number: '02',
      title: 'Sell Tickets and Get Paid',
      description: 'Set up your ticket sales and start earning.',
      isActive: false
    },
    {
      id: 3,
      number: '03',
      title: 'Finally, Host Your Event',
      description: 'Host your event and engage with attendees.',
      isActive: false
    },
    {
      id: 4,
      number: '04',
      title: 'Repeat and Grow',
      description: 'Build your audience and grow your events.',
      isActive: false
    }
  ];

  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: 'Sign up for free',
      description: 'Sign up easily using your Google or Facebook account or email and create your events in minutes.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          <rect x="4" y="4" width="16" height="12" rx="2"/>
        </svg>
      ),
      title: 'Use built-in event page template',
      description: 'Choose from our customised page templates specially designed to attract attendees.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
        </svg>
      ),
      title: 'Customise your event page as you like',
      description: 'Add logo, collage hero images, and add details to create an outstanding event page.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Be a Star Event Host in 4 Easy Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Use early-bird discounts, coupons and group ticketing to double your ticket sale. Get paid quickly and securely.
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex flex-col md:flex-row justify-center items-center mb-16 space-y-4 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <button
                onClick={() => setActiveStep(step.id)}
                className={`px-8 py-4 rounded-lg font-semibold transition-colors ${
                  activeStep === step.id
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <div className="text-sm">Step {step.number}</div>
                <div className="text-base">{step.title}</div>
              </button>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-gray-300 mx-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Description */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-700">
            {steps.find(step => step.id === activeStep)?.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="text-center">
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection; 