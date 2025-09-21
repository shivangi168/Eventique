'use client'

import { useState, useEffect } from 'react'
import Home from './home/page'
import LoginPage from './login/page'
import SignUpPage from './signup/page'
import DiscoverEventsPage from './discover-events/page'
import CreateEventPage from './create-event/page'
import VenueCreatePage from './create-event/venue/page'
import EventDetailPage from './event-detail/page'
import CheckoutPage from './checkout/page'
import PricingPage from './pricing/page'
import BlogPage from './blog/page'
import BlogDetailPage from './blog-detail/page'
import OrganizationPage from './organization/page'
import MyProfilePage from './my-profile/page'

export default function RootPage() {
  const [currentPage, setCurrentPage] = useState('home') // Start with home page
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [checkoutData, setCheckoutData] = useState({ event: null, ticketQuantity: 0 })
  const [selectedBlog, setSelectedBlog] = useState(null)
  const [activeSidebarItem, setActiveSidebarItem] = useState('dashboard')

  // Check for persistent login state on component mount
  useEffect(() => {
    const savedPage = localStorage.getItem('currentPage')
    const loginStatus = localStorage.getItem('isLoggedIn')
    
    if (loginStatus === 'true' && savedPage && savedPage !== 'login' && savedPage !== 'signup') {
      setCurrentPage(savedPage)
      setIsLoggedIn(true)
    } else {
      // If not logged in, go to home page
      setCurrentPage('home')
      setIsLoggedIn(false)
    }
  }, [])

  const navigateToHome = () => {
    setCurrentPage('home')
    localStorage.setItem('currentPage', 'home')
  }

  const navigateToLogin = () => {
    setCurrentPage('login')
    localStorage.removeItem('currentPage')
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  const navigateToSignUp = () => {
    setCurrentPage('signup')
    localStorage.removeItem('currentPage')
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  const navigateToDiscoverEvents = () => {
    setCurrentPage('discover-events')
    localStorage.setItem('currentPage', 'discover-events')
  }

  const navigateToCreateEvent = () => {
    setCurrentPage('create-event')
    localStorage.setItem('currentPage', 'create-event')
  }

  const navigateToCreateVenue = () => {
    setCurrentPage('create-venue')
    localStorage.setItem('currentPage', 'create-venue')
  }

  const handleLogout = () => {
    setCurrentPage('home')
    setIsLoggedIn(false)
    localStorage.removeItem('currentPage')
    localStorage.removeItem('isLoggedIn')
  }

  const navigateToEventDetail = (event) => {
    setSelectedEvent(event)
    setCurrentPage('event-detail')
    localStorage.setItem('currentPage', 'event-detail')
  }

  const navigateToCheckout = (event, ticketQuantity) => {
    setCheckoutData({ event, ticketQuantity })
    setCurrentPage('checkout')
    localStorage.setItem('currentPage', 'checkout')
  }

  const navigateToPricing = () => {
    setCurrentPage('pricing')
    localStorage.setItem('currentPage', 'pricing')
  }

  const navigateBackToEvent = () => {
    setCurrentPage('event-detail')
    localStorage.setItem('currentPage', 'event-detail')
  }

  const navigateToBlog = () => {
    setCurrentPage('blog')
    localStorage.setItem('currentPage', 'blog')
  }

  const navigateToBlogDetail = (blog) => {
    setSelectedBlog(blog)
    setCurrentPage('blog-detail')
    localStorage.setItem('currentPage', 'blog-detail')
  }

  const navigateBackToBlog = () => {
    setCurrentPage('blog')
    localStorage.setItem('currentPage', 'blog')
  }

  const navigateToOrganization = () => {
    setCurrentPage('organization')
    localStorage.setItem('currentPage', 'organization')
  }

  const handleSidebarItemClick = (itemId) => {
    setActiveSidebarItem(itemId)
    // You can add specific logic for each sidebar item here
  }

  const navigateToMyProfile = () => {
    setCurrentPage('my-profile')
    localStorage.setItem('currentPage', 'my-profile')
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home 
            onLogout={handleLogout} 
            onExploreEvents={navigateToDiscoverEvents} 
            onCreateEvent={navigateToCreateEvent}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            onEventClick={navigateToEventDetail}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
            onNavigateToMyProfile={navigateToMyProfile}
          />
        )
      case 'discover-events':
        return (
          <DiscoverEventsPage 
            onLogout={handleLogout} 
            onExploreEvents={navigateToDiscoverEvents} 
            onCreateEvent={navigateToCreateEvent}
            onEventClick={navigateToEventDetail}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
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
      case 'event-detail':
        return (
          <EventDetailPage 
            event={selectedEvent}
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToCheckout={navigateToCheckout}
            onNavigateToPricing={navigateToPricing}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'checkout':
        return (
          <CheckoutPage 
            event={checkoutData.event}
            ticketQuantity={checkoutData.ticketQuantity}
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onBackToEvent={navigateBackToEvent}
            onNavigateToPricing={navigateToPricing}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'pricing':
        return (
          <PricingPage 
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'blog':
        return (
          <BlogPage 
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            onBlogClick={navigateToBlogDetail}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'blog-detail':
        return (
          <BlogDetailPage 
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            blog={selectedBlog}
            onBackToBlog={navigateBackToBlog}
            onNavigateToHome={() => window.location.reload()}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'organization':
        return (
          <OrganizationPage 
            onSidebarItemClick={handleSidebarItemClick}
            activeSidebarItem={activeSidebarItem}
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'my-profile':
        return (
          <MyProfilePage 
            onLogout={handleLogout}
            onExploreEvents={navigateToDiscoverEvents}
            onCreateEvent={navigateToCreateEvent}
            onCreateVenue={navigateToCreateVenue}
            onLogin={navigateToLogin}
            onSignUp={navigateToSignUp}
            onNavigateToPricing={navigateToPricing}
            onNavigateToBlog={navigateToBlog}
            onNavigateToOrganization={navigateToOrganization}
          />
        )
      case 'signup':
        return <SignUpPage onLogin={navigateToLogin} onSignUp={() => {
          setIsLoggedIn(true)
          localStorage.setItem('isLoggedIn', 'true')
          navigateToHome()
        }} />
      case 'login':
      default:
        return <LoginPage onSignUp={navigateToSignUp} onLogin={() => {
          setIsLoggedIn(true)
          localStorage.setItem('isLoggedIn', 'true')
          navigateToHome()
        }} />
    }
  }

  return <div>{renderCurrentPage()}</div>
} 