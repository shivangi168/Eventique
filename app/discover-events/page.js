'use client'

import Header from '../../components/Header'
import DiscoverEventsPage from '../../components/DiscoverEventsPage'
import Footer from '../../components/Footer'

export default function DiscoverEvents({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onEventClick, onLogin, onSignUp, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} onLogin={onLogin} onSignUp={onSignUp} onNavigateToPricing={onNavigateToPricing} onNavigateToBlog={onNavigateToBlog} onNavigateToOrganization={onNavigateToOrganization} />
      <DiscoverEventsPage onEventClick={onEventClick} />
      <Footer />
    </div>
  )
} 