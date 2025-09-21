'use client'

import Header from '../../components/Header'
import BlogDetailPage from '../../components/BlogDetailPage'
import Footer from '../../components/Footer'

export default function BlogDetail({ onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, blog, onBackToBlog, onNavigateToHome, onNavigateToBlog, onNavigateToOrganization }) {
  return (
    <div>
      <Header onLogout={onLogout} onExploreEvents={onExploreEvents} onCreateEvent={onCreateEvent} onCreateVenue={onCreateVenue} onLogin={onLogin} onSignUp={onSignUp} onNavigateToPricing={onNavigateToPricing} onNavigateToBlog={onNavigateToBlog} onNavigateToOrganization={onNavigateToOrganization} />
      <BlogDetailPage 
        blog={blog}
        onBackToBlog={onBackToBlog}
        onNavigateToHome={onNavigateToHome}
        onNavigateToBlog={onNavigateToBlog}
      />
      <Footer />
    </div>
  )
}
