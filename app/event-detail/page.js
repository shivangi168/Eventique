'use client'

import Header from '../../components/Header'
import EventDetailPage from '../../components/EventDetailPage'
import Footer from '../../components/Footer'

export default function EventDetail({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, event }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} />
      <EventDetailPage 
        event={event}
        onLogout={onLogout}
        onExploreEvents={onExploreEvents}
        onCreateEvent={onCreateEvent}
        onCreateVenue={onCreateVenue}
      />
      <Footer />
    </div>
  )
}
