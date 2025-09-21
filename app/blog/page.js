'use client'

import Header from '../../components/Header'
import BlogPage from '../../components/BlogPage'
import Footer from '../../components/Footer'

export default function Blog({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, onBlogClick, onNavigateToBlog, onNavigateToOrganization }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} onLogin={onLogin} onSignUp={onSignUp} onNavigateToPricing={onNavigateToPricing} onNavigateToBlog={onNavigateToBlog} onNavigateToOrganization={onNavigateToOrganization} />
      <BlogPage onBlogClick={onBlogClick} />
      <Footer />
    </div>
  )
}
