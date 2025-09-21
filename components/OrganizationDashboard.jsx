'use client'

import React, { useState } from 'react';
import { 
  FaTachometerAlt, 
  FaCalendarAlt, 
  FaBullhorn, 
  FaAddressBook, 
  FaMoneyBillWave, 
  FaChartBar, 
  FaCreditCard, 
  FaCog, 
  FaInfoCircle, 
  FaUsers,
  FaLock,
  FaHome,
  FaCompass,
  FaPlus,
  FaChevronLeft,
  FaChevronRight,
  FaDollarSign,
  FaShoppingCart,
  FaEye,
  FaTicketAlt
} from 'react-icons/fa';

const OrganizationDashboard = ({ onSidebarItemClick, activeSidebarItem, onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, onNavigateToBlog, onNavigateToOrganization }) => {
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');

  const kpiData = [
    {
      title: 'REVENUE (AUD)',
      value: '$550.00',
      change: '0.00% From Previous Period',
      trend: 'up',
      icon: FaDollarSign,
      color: 'purple'
    },
    {
      title: 'ORDERS',
      value: '2',
      change: '0.00% From Previous Period',
      trend: 'up',
      icon: FaShoppingCart,
      color: 'red'
    },
    {
      title: 'PAGE VIEWS',
      value: '30',
      change: '0.00% From Previous Period',
      trend: 'up',
      icon: FaEye,
      color: 'blue'
    },
    {
      title: 'TICKET SALES',
      value: '3',
      change: '0.00% From Previous Period',
      trend: 'up',
      icon: FaTicketAlt,
      color: 'green'
    }
  ];

  const revenueData = [
    { day: 'Mon', value: 5 },
    { day: 'Tue', value: 9 },
    { day: 'Wed', value: 7 },
    { day: 'Thur', value: 6 },
    { day: 'Fri', value: 8 },
    { day: 'Sat', value: 4 },
    { day: 'Sun', value: 8 }
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: 'bg-purple-600',
      red: 'bg-red-600',
      blue: 'bg-blue-600',
      green: 'bg-green-600'
    };
    return colors[color] || 'bg-gray-600';
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100">
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Barren</span>
          </div>

          {/* Menu Items */}
          <nav className="space-y-2">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt, active: activeSidebarItem === 'dashboard' },
              { id: 'events', label: 'Events', icon: FaCalendarAlt, active: activeSidebarItem === 'events' },
              { id: 'promotion', label: 'Promotion', icon: FaBullhorn, active: activeSidebarItem === 'promotion' },
              { id: 'contact-list', label: 'Contact List', icon: FaAddressBook, active: activeSidebarItem === 'contact-list' },
              { id: 'payouts', label: 'Payouts', icon: FaMoneyBillWave, active: activeSidebarItem === 'payouts' },
              { id: 'reports', label: 'Reports', icon: FaChartBar, active: activeSidebarItem === 'reports' },
              { id: 'subscription', label: 'Subscription', icon: FaCreditCard, active: activeSidebarItem === 'subscription' },
              { id: 'conversion-setup', label: 'Conversion Setup', icon: FaCog, active: activeSidebarItem === 'conversion-setup' },
              { id: 'about', label: 'About', icon: FaInfoCircle, active: activeSidebarItem === 'about' },
              { id: 'my-team', label: 'My Team', icon: FaUsers, active: activeSidebarItem === 'my-team', locked: true },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onSidebarItemClick && onSidebarItemClick(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    item.active
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <IconComponent className="mr-3" size={18} />
                  <span className="font-medium">{item.label}</span>
                  {item.locked && (
                    <FaLock className="ml-auto" size={12} />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Barren</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={() => window.location.reload()}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaHome className="mr-2" size={16} />
                My Home
              </button>
              <button 
                onClick={onExploreEvents}
                className="flex items-center text-gray-600 hover:text-gray-900"
              >
                <FaCompass className="mr-2" size={16} />
                Explore Events
              </button>
              <button 
                onClick={onCreateEvent}
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center"
              >
                <FaPlus className="mr-2" size={14} />
                Create Event
              </button>
              <div className="flex items-center space-x-2">
                <img 
                  src="https://i.pravatar.cc/40" 
                  alt="Profile" 
                  className="w-8 h-8 rounded-full"
                />
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <FaCog size={16} />
              </button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Page Title */}
          <div className="flex items-center mb-8">
            <FaTachometerAlt className="mr-3 text-purple-600" size={24} />
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>

          {/* User/Organization Section */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img 
                  src="https://i.pravatar.cc/80" 
                  alt="Profile" 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
                  <p className="text-gray-600">My Organisation</p>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center">
                <FaPlus className="mr-2" size={14} />
                Add Organisation
              </button>
            </div>
          </div>

          {/* Date Range Selector */}
          <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <FaChevronLeft size={16} />
                </button>
                <span className="text-lg font-medium text-gray-900">
                  1st April, 2022 - 30th April, 2022
                </span>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <FaChevronRight size={16} />
                </button>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">Selected Events (1)</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi, index) => {
              const IconComponent = kpi.icon;
              return (
                <div key={index} className={`${getColorClasses(kpi.color)} text-white rounded-lg p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-90 mb-1">{kpi.title}</p>
                      <p className="text-2xl font-bold mb-1">{kpi.value}</p>
                      <p className="text-xs opacity-75">{kpi.change}</p>
                    </div>
                    <IconComponent size={24} className="opacity-80" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Revenue Graph */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Revenue</h3>
                <p className="text-sm text-gray-600">See the graphical representation below</p>
              </div>
              <div className="flex space-x-2">
                {['Monthly', 'Weekly', 'Daily'].map((period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedPeriod === period
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Simple Bar Chart */}
            <div className="h-64 flex items-end justify-between space-x-2">
              {revenueData.map((data, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="bg-purple-600 w-full rounded-t"
                    style={{ height: `${(data.value / 9) * 200}px` }}
                  ></div>
                  <span className="text-xs text-gray-600 mt-2">{data.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationDashboard;
