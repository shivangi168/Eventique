import React from 'react';
import bannerImg from '../assets/images/banner.png'; // ✅ adjust the path as needed

const Hero = () => {
  return (
    <section
      className="hero-banner text-center text-black"
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '90px 0 80px',
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        The Easiest and Most Powerful Online Event <br /> Booking and Ticketing System
      </h1>
      <p className="max-w-2xl mx-auto mb-6 text-gray-700">
        Barren is an all-in-one event ticketing platform for event organisers, promoters, and managers.
        Easily create, promote and manage your events of any type and size.
      </p>
      <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
        Create Event ➜
      </button>
    </section>
  );
};

export default Hero;
