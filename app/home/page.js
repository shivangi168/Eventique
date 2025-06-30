'use client'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import EventsSection from '../../components/EventsSection'
import HostEventsSection from '../../components/HostEventsSection'
import FeaturesSection from '../../components/FeaturesSection'
import StepsSection from '../../components/StepsSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import Footer from '../../components/Footer'

export default function Home({ onLogout, onExploreEvents, onCreateEvent }) {
  return (
    <div className="pt-[60px] font-Roboto">
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} />
      <Hero />
      <EventsSection />
      <HostEventsSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
} 