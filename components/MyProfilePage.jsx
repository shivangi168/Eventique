'use client'

import React, { useState } from 'react';

const MyProfilePage = ({ onNavigateToOrganization, onLogout, onExploreEvents, onCreateEvent, onCreateVenue, onLogin, onSignUp, onNavigateToPricing, onNavigateToBlog }) => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
        
        {/* Banner Section */}
        <div className="relative h-64 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg mb-8">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=300&fit=crop"
            alt="Profile Banner"
            className="w-full h-full object-cover rounded-lg"
          />
          <button className="absolute top-4 right-4 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            📷 Change Image
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Profile Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Profile Picture */}
              <div className="relative inline-block mb-4">
                <img 
                  src="https://i.pravatar.cc/120" 
                  alt="John Doe" 
                  className="w-24 h-24 rounded-full mx-auto"
                />
                <button className="absolute bottom-0 right-0 bg-white border-2 border-gray-300 rounded-full p-2 hover:bg-gray-50 transition-colors">
                  📷
                </button>
              </div>

              {/* User Info */}
              <div className="text-center mb-6">
                <div className="flex items-center justify-center mb-2">
                  <h1 className="text-2xl font-bold text-gray-900 mr-2">John Doe</h1>
                  <span className="text-green-500">✓</span>
                </div>
                <p className="text-gray-600 mb-2">johndoe@example.com</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-4">
                  <span>0 Followers</span>
                  <span>2 Following</span>
                </div>
                <p className="text-gray-700 mb-4">Hey I am a John Doe.</p>
              </div>

              {/* My Organisation Button */}
              <button 
                onClick={onNavigateToOrganization}
                className="w-full bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 mb-6"
              >
                <div className="w-4 h-4 border border-gray-400 rounded"></div>
                <span>My Organisation</span>
              </button>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Find me on</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    f
                  </button>
                  <button className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    📷
                  </button>
                  <button className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    🐦
                  </button>
                  <button className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    in
                  </button>
                  <button className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    ▶
                  </button>
                  <button className="w-12 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity">
                    🌐
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Navigation Tabs */}
              <div className="flex space-x-1 mb-8 border-b border-gray-200">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'home'
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  🏠 <span>Home</span>
                </button>
                <button
                  onClick={() => setActiveTab('about')}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'about'
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  ℹ️ <span>About</span>
                </button>
                <button
                  onClick={() => setActiveTab('setting')}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'setting'
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  ⚙️ <span>Setting</span>
                </button>
                <button
                  onClick={() => setActiveTab('my-orders')}
                  className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'my-orders'
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  🛍️ <span>My Orders</span>
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === 'home' && (
                <div>
                  {/* Event Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <p className="text-sm text-gray-600">Saved Events</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-bold">2</span>
                      </div>
                      <p className="text-sm text-gray-600">Organised Events</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-sm font-bold">1</span>
                      </div>
                      <p className="text-sm text-gray-600">Attending Events</p>
                    </div>
                  </div>

                  {/* Events List */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Events</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <img 
                          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=200&fit=crop" 
                          alt="Step Up Open Mic Show"
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">Step Up Open Mic Show</h4>
                          <p className="text-sm text-gray-500">Thu, Jun 30, 2022 4:30 AM</p>
                        </div>
                        <div className="flex space-x-2">
                          <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 hover:bg-green-600 transition-colors">
                            🔖 <span>Save</span>
                          </button>
                          <button className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 hover:bg-green-600 transition-colors">
                            👁️ <span>View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'about' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">About Me</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I'm John Doe, an event enthusiast and organizer. I love creating memorable experiences 
                    and connecting people through amazing events. When I'm not organizing events, you can 
                    find me exploring new places and meeting interesting people.
                  </p>
                </div>
              )}

              {activeTab === 'setting' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        value="johndoe@example.com"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                      <textarea 
                        value="Hey I am a John Doe."
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'my-orders' && (
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">My Orders</h3>
                  <p className="text-gray-500">No orders found.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
