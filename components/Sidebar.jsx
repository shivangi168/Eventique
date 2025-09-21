'use client'

import React from 'react';
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
  FaLock
} from 'react-icons/fa';

const Sidebar = ({ activeItem, onItemClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt, active: activeItem === 'dashboard' },
    { id: 'events', label: 'Events', icon: FaCalendarAlt, active: activeItem === 'events' },
    { id: 'promotion', label: 'Promotion', icon: FaBullhorn, active: activeItem === 'promotion' },
    { id: 'contact-list', label: 'Contact List', icon: FaAddressBook, active: activeItem === 'contact-list' },
    { id: 'payouts', label: 'Payouts', icon: FaMoneyBillWave, active: activeItem === 'payouts' },
    { id: 'reports', label: 'Reports', icon: FaChartBar, active: activeItem === 'reports' },
    { id: 'subscription', label: 'Subscription', icon: FaCreditCard, active: activeItem === 'subscription' },
    { id: 'conversion-setup', label: 'Conversion Setup', icon: FaCog, active: activeItem === 'conversion-setup' },
    { id: 'about', label: 'About', icon: FaInfoCircle, active: activeItem === 'about' },
    { id: 'my-team', label: 'My Team', icon: FaUsers, active: activeItem === 'my-team', locked: true },
  ];

  return (
    <div className="w-64 bg-gray-100 min-h-screen">
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
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onItemClick && onItemClick(item.id)}
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
  );
};

export default Sidebar;
