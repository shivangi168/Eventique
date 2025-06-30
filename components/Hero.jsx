'use client'

import Image from 'next/image'

const Hero = () => {
  return (
    <section className="hero-banner text-center text-black relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner.png"
          alt="Hero Banner"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 px-4 py-20 md:py-24">
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
      </div>
    </section>
  )
}

export default Hero
