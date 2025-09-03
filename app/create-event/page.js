'use client'

import Header from '../../components/Header'
import CreateEventPage from '../../components/CreateEventPage'
import Footer from '../../components/Footer'

export default function CreateEvent({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} />
      <CreateEventPage onCreateVenue={onCreateVenue} />
      <Footer />
    </div>
  )
} 