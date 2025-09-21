'use client'

import Header from '../../components/Header'
import OrderConfirmationPage from '../../components/OrderConfirmationPage'
import Footer from '../../components/Footer'

export default function Checkout({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, event, ticketQuantity, onLogin, onSignUp, onBackToEvent, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} onLogin={onLogin} onSignUp={onSignUp} onNavigateToPricing={onNavigateToPricing} onNavigateToBlog={onNavigateToBlog} onNavigateToOrganization={onNavigateToOrganization} />
      <OrderConfirmationPage 
        event={event}
        ticketQuantity={ticketQuantity}
        onBackToEvent={onBackToEvent}
        onNavigateToHome={() => window.location.reload()}
        onNavigateToDiscoverEvents={onExploreEvents}
      />
      <Footer />
    </div>
  )
}
