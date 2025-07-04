'use client'

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function BarrenSignup({ onLogin, onSignUp }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempted with:', { firstName, lastName, email, password });
    // Redirect to home page after signup
    if (onSignUp) {
      onSignUp();
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Green Background with Pattern */}
      <div className="flex-1 bg-green-500 relative overflow-hidden flex flex-col">
        {/* Triangle Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 600" fill="none">
            {/* Generate triangular pattern */}
            {Array.from({ length: 100 }, (_, i) => (
              <polygon
                key={i}
                points={`${(i % 10) * 40 + 20},${Math.floor(i / 10) * 60 + 20} ${(i % 10) * 40 + 35},${Math.floor(i / 10) * 60 + 45} ${(i % 10) * 40 + 5},${Math.floor(i / 10) * 60 + 45}`}
                fill="white"
                opacity="0.1"
              />
            ))}
          </svg>
        </div>
        
        {/* Top Logo */}
        <div className="relative z-10 p-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
              <span className="text-green-500 font-bold text-xl">B</span>
            </div>
            <span className="text-white text-2xl font-bold">Barren</span>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="relative z-10 flex-1 flex items-end p-8">
          <div className="text-white max-w-md">
            <h1 className="text-4xl font-bold leading-tight">
              The Easiest Way to Create Events and Sell More Tickets Online
            </h1>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
      <div className="flex-1 bg-white flex items-center justify-center px-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-right mb-8">
            <span className="text-gray-600">Already have an account? </span>
            <button 
              onClick={onLogin}
              className="text-green-500 hover:text-green-600 font-medium bg-transparent border-none cursor-pointer"
            >
              Sign in
            </button>
          </div>

          {/* Signup Form */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Sign up to Barren</h2>
            
            <div className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password*
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Sign Up Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
              >
                Sign Up
              </button>

              {/* Terms and Privacy */}
              <div className="text-sm text-gray-600 text-center">
                By clicking "Sign up", you agree to Barren{' '}
                <a href="#" className="text-green-500 hover:text-green-600">
                  Terms & Conditions
                </a>{' '}
                and have read the{' '}
                <a href="#" className="text-green-500 hover:text-green-600">
                  Privacy Policy
                </a>
                .
              </div>
            </div>

            {/* Divider */}
            <div className="text-center text-gray-500 font-medium">or</div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                  <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Sign in with Google
              </button>

              <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200">
                <svg className="w-5 h-5 mr-3" fill="#1877f2" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Sign in with Facebook
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024, Barren. All rights reserved. Powered by Gambolthemes
          </div>
        </div>
      </div>
    </div>
  );
}