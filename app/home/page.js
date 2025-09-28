'use client'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import EventsSection from '../../components/EventsSection'
import HostEventsSection from '../../components/HostEventsSection'
import FeaturesSection from '../../components/FeaturesSection'
import StepsSection from '../../components/StepsSection'
import TestimonialsSection from '../../components/TestimonialsSection'
import Footer from '../../components/Footer'

export default function Home({ onLogout, onExploreEvents, onCreateEvent, onLogin, onSignUp, onNavigateToPricing, onEventClick, onNavigateToBlog, onNavigateToOrganization, onNavigateToMyProfile }) {
  return (
    <div className="pt-[60px] font-Roboto">
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onLogin={onLogin} onSignUp={onSignUp} onNavigateToPricing={onNavigateToPricing} onNavigateToBlog={onNavigateToBlog} onNavigateToOrganization={onNavigateToOrganization} onNavigateToMyProfile={onNavigateToMyProfile} />
      <Hero onCreateEvent={onCreateEvent} />
      <EventsSection onEventClick={onEventClick} />
      <HostEventsSection />
      <FeaturesSection />
      <StepsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
} 