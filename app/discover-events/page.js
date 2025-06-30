'use client'

import Header from '../../components/Header'
import DiscoverEventsPage from '../../components/DiscoverEventsPage'
import Footer from '../../components/Footer'

export default function DiscoverEvents({ onLogout, onExploreEvents, onCreateEvent }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} />
      <DiscoverEventsPage />
      <Footer />
    </div>
  )
} 