'use client'

import { useState } from 'react'
import Home from './home/page'
import LoginPage from './login/page'
import SignUpPage from './signup/page'
import DiscoverEventsPage from './discover-events/page'
import CreateEventPage from './create-event/page'
import VenueCreatePage from './create-event/venue/page'

export default function RootPage() {
  const [currentPage, setCurrentPage] = useState('login') // Start with login page

  const navigateToHome = () => {
    setCurrentPage('home')
  }

  const navigateToLogin = () => {
    setCurrentPage('login')
  }

  const navigateToSignUp = () => {
    setCurrentPage('signup')
  }

  const navigateToDiscoverEvents = () => {
    setCurrentPage('discover-events')
  }

  const navigateToCreateEvent = () => {
    setCurrentPage('create-event')
  }

  const navigateToCreateVenue = () => {
    setCurrentPage('create-venue')
  }

  const handleLogout = () => {
    setCurrentPage('login')
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onLogout={handleLogout} 
            onExploreEvents={navigateToDiscoverEvents} 
            onCreateEvent={navigateToCreateEvent} 
          />
        )
      case 'discover-events':
        return (
          <DiscoverEventsPage 
            onLogout={handleLogout} 
            onExploreEvents={navigateToDiscoverEvents} 
            onCreateEvent={navigateToCreateEvent} 
          />
        )
      case 'create-event':
        return (
          <CreateEventPage 
            onLogout={handleLogout} 
            onExploreEvents={navigateToDiscoverEvents} 
            onCreateEvent={navigateToCreateEvent} 
            onCreateVenue={navigateToCreateVenue}
          />
        )
      case 'create-venue':
        return (
          <VenueCreatePage 
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
          />
        )
      case 'signup':
        return <SignUpPage onLogin={navigateToLogin} onSignUp={navigateToHome} />
      case 'login':
      default:
        return <LoginPage onSignUp={navigateToSignUp} onLogin={navigateToHome} />
    }
  }

  return <div>{renderCurrentPage()}</div>
} 