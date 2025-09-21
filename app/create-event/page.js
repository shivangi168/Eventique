'use client'

import Header from '../../components/Header'
import CreateEventPage from '../../components/CreateEventPage'
import Footer from '../../components/Footer'
import { useRouter } from 'next/navigation'

export default function CreateEvent({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue }) {
  const router = useRouter()
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} />
      <CreateEventPage onCreateVenue={() => router.push('/create-event/venue')} />
      <Footer />
    </div>
  )
} 