'use client'

import Header from '../../components/Header'
import PricingPage from '../../components/PricingPage'
import Footer from '../../components/Footer'

export default function Pricing({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} onLogin={onLogin} onSignUp={onSignUp} />
      <PricingPage />
      <Footer />
    </div>
  )
}
