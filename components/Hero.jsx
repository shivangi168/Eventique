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
      <div className="relative z-10 px-4 py-12 md:py-16 lg:py-20" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <h1 
          style={{ 
            fontSize: '1.5rem', 
            lineHeight: '1.2',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: 'black'
          }}
        >
          The Easiest and Most Powerful Online Event <br /> Booking and Ticketing System
        </h1>
        <p 
          style={{ 
            fontSize: '0.875rem', 
            lineHeight: '1.4',
            marginBottom: '1.5rem',
            color: '#374151',
            maxWidth: '32rem',
            margin: '0 auto 1.5rem auto'
          }}
        >
          Barren is an all-in-one event ticketing platform for event organisers, promoters, and managers.
          Easily create, promote and manage your events of any type and size.
        </p>
        <button 
          style={{ 
            fontSize: '0.875rem', 
            padding: '0.5rem 1rem',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer'
          }}
        >
          Create Event ➜
        </button>
      </div>
    </section>
  )
}

export default Hero
