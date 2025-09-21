'use client'

import Header from '../../components/Header'
import MyProfilePage from '../../components/MyProfilePage'
import Footer from '../../components/Footer'

export default function MyProfile({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} onLogin={onLogin} onSignUp={onSignUp} onNavigateToPricing={onNavigateToPricing} onNavigateToBlog={onNavigateToBlog} onNavigateToOrganization={onNavigateToOrganization} />
      <MyProfilePage 
        onNavigateToOrganization={onNavigateToOrganization}
        onLogout={onLogout}
        onExploreEvents={onExploreEvents}
        onCreateEvent={onCreateEvent}
        onCreateVenue={onCreateVenue}
        onLogin={onLogin}
        onSignUp={onSignUp}
        onNavigateToPricing={onNavigateToPricing}
        onNavigateToBlog={onNavigateToBlog}
      />
      <Footer />
    </div>
  )
}
