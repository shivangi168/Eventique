'use client'

import React, { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';

const OrderConfirmationPage = ({ event, ticketQuantity, onBackToEvent, onNavigateToHome, onNavigateToDiscoverEvents }) => {
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    address: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [couponCode, setCouponCode] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleConfirmPay = () => {
    console.log('Processing payment...', { event, ticketQuantity, formData });
    // Handle payment processing
  };

  const handleApplyCoupon = () => {
    console.log('Applying coupon:', couponCode);
    // Handle coupon application
  };

  const totalAmount = (event?.price || 50) * (ticketQuantity || 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <button 
                onClick={onNavigateToHome}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Home
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <button 
                onClick={onNavigateToDiscoverEvents}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Explore Events
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <button 
                onClick={onBackToEvent}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Online Event Detail View
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">
              Checkout
            </li>
          </ol>
        </nav>

        {/* Main Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Confirmation</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Billing Information */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing information</h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address*
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country*
                </label>
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Nothing selected</option>
                  <option value="US">United States</option>
                  <option value="AU">Australia</option>
                  <option value="CA">Canada</option>
                  <option value="UK">United Kingdom</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City/Suburb*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Zip/Post Code*
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              {/* Total Payable Amount */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-lg font-semibold text-gray-900">
                  Total Payable Amount: AUD ${totalAmount.toFixed(2)}
                </div>
              </div>

              {/* Payment Details */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card number*
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry date*
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV*
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="123"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleConfirmPay}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Confirm & Pay
              </button>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing information</h2>
            
            {/* Event Details */}
            <div className="flex items-start space-x-4 mb-6">
              <img 
                src={event?.image || "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=100&h=100&fit=crop"}
                alt={event?.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {event?.title || "Tutorial on Canvas Painting for Beginners"}
                </h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" size={12} />
                    <span>Wed, Jun 01, 2022 5:30 AM</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" size={12} />
                    <span>Online Event</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Ticket</span>
                <span className="font-semibold">{ticketQuantity || 1}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sub Total</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>AUD ${totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Coupon Code */}
            <div className="mb-6">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Coupon Code*"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Apply
                </button>
              </div>
            </div>

            <button
              onClick={handleConfirmPay}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-4"
            >
              Confirm & Pay
            </button>

            <p className="text-xs text-gray-500 text-center">
              Price is inclusive of all applicable GST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
