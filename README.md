# Eventique - Next.js Frontend

A modern event management platform built with Next.js, React, and Tailwind CSS.

## 🚀 What's New

This project has been successfully converted from React + Vite to **Next.js 14** with the following improvements:

- ✅ **Next.js App Router** - Modern routing system
- ✅ **Server-Side Rendering** - Better performance and SEO
- ✅ **Optimized Images** - Using Next.js Image component
- ✅ **Client Components** - Proper 'use client' directives where needed
- ✅ **Tailwind CSS** - Configured for Next.js
- ✅ **Modern Architecture** - Clean separation of pages and components

## 🏗️ Project Structure

```
frontend/
├── app/                          # Next.js App Router
│   ├── layout.js                # Root layout
│   ├── page.js                  # Main page with routing logic
│   ├── globals.css              # Global styles
│   ├── home/page.js             # Home page
│   ├── login/page.js            # Login page
│   ├── signup/page.js           # Signup page
│   ├── discover-events/page.js  # Discover events page
│   └── create-event/page.js     # Create event page
├── components/                   # Reusable React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Login.jsx
│   ├── SignUp.jsx
│   └── ... (all other components)
├── public/                      # Static assets
│   └── images/                  # Images
└── package.json                 # Next.js dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Features

- **Event Management** - Create and manage events
- **User Authentication** - Login and signup functionality
- **Event Discovery** - Browse and search events
- **Responsive Design** - Mobile-first approach
- **Modern UI** - Clean and intuitive interface

## 🛠️ Technology Stack

- **Framework:** Next.js 14
- **Frontend:** React 18
- **Styling:** Tailwind CSS
- **Icons:** React Icons, Lucide React
- **Language:** JavaScript (with TypeScript support ready)

## 📝 Key Changes Made

1. **Migrated from Vite to Next.js**
   - Replaced Vite config with Next.js config
   - Updated build and dev scripts
   - Removed Vite-specific files

2. **Implemented Next.js App Router**
   - Created app directory structure
   - Added layout.js for root layout
   - Converted pages to Next.js routing system

3. **Updated Components**
   - Added 'use client' directives for client-side components
   - Updated image imports to use Next.js Image component
   - Fixed import paths for new structure

4. **Enhanced Configuration**
   - Updated Tailwind config for Next.js
   - Added proper TypeScript support
   - Updated ESLint configuration

## 🔧 Development

The application uses a simple state-based routing system for authentication flows. The main routing logic is in `app/page.js` which handles:

- Login/Signup authentication
- Home page navigation
- Event discovery and creation
- User logout functionality

## 📱 Pages

- **Login** - User authentication
- **Signup** - User registration
- **Home** - Main dashboard with hero section
- **Discover Events** - Browse available events
- **Create Events** - Create new events

## 🎯 Next Steps

Consider implementing:
- Database integration
- API routes with Next.js
- Authentication with NextAuth.js
- Dynamic routing for individual events
- Search and filtering functionality
- Payment integration

---

Your React + Vite project has been successfully converted to Next.js! 🎉
