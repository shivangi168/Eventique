'use client'

import OrganizationDashboard from '../../components/OrganizationDashboard'

export default function Organization({ onSidebarItemClick, activeSidebarItem, onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization }) {
  return (
    <OrganizationDashboard 
      onSidebarItemClick={onSidebarItemClick}
      activeSidebarItem={activeSidebarItem}
      onLogout={onLogout}
      onExploreEvents={onExploreEvents}
      onCreateEvent={onCreateEvent}
      onCreateVenue={onCreateVenue}
      onLogin={onLogin}
      onSignUp={onSignUp}
      onNavigateToPricing={onNavigateToPricing}
      onNavigateToBlog={onNavigateToBlog}
      onNavigateToOrganization={onNavigateToOrganization}
    />
  )
}
