'use client'

import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BlogPage = ({ onBlogClick }) => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0);

  const featuredPosts = [
    {
      id: 1,
      title: "Organising a Successful Christmas Party with Barren",
      description: "Phasellus venenatis posuere nibh, sit amet blandit lorem pharetra ac. Phasellus feugiat laoreet laoreet.",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=400&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 2,
      title: "How to Live Stream Successfully: Complete Guide for Event Hosts",
      description: "Learn the essential techniques for creating engaging live streams that captivate your audience and drive event success.",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=400&fit=crop",
      date: "3 May, 2022",
      readTime: "8 mins read"
    },
    {
      id: 3,
      title: "Virtual Event Sponsorship Ideas for Your Next Event",
      description: "Discover innovative sponsorship strategies that can help monetize your virtual events and create valuable partnerships.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=400&fit=crop",
      date: "1 May, 2022",
      readTime: "12 mins read"
    }
  ];

  const latestPosts = [
    {
      id: 1,
      title: "Organising a Successful Christmas Party with Barren",
      image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 2,
      title: "How to Live Stream Successfully: Complete Guide for Event Hosts",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 3,
      title: "Virtual Event Sponsorship Ideas for Your Next Event",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 4,
      title: "13 Awesome Virtual Event Ideas for Your Next Online Event",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 5,
      title: "How to organise a virtual event successfully with Barren",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 6,
      title: "Make Your Next Webinar Interactive with Barren",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 7,
      title: "Monetise Your Online Events with Barren and Earn Money",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 8,
      title: "The Organiser's Guide to Hosting a Successful Virtual Event",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    }
  ];

  // Auto carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) => 
        (prevIndex + 1) % featuredPosts.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) => 
      (prevIndex + 1) % featuredPosts.length
    );
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) => 
      (prevIndex - 1 + featuredPosts.length) % featuredPosts.length
    );
  };

  const currentFeatured = featuredPosts[currentFeaturedIndex];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">
              Our Blog
            </li>
          </ol>
        </nav>

        {/* Featured Post Section */}
        <div className="mb-16">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Featured Image */}
              <div className="relative h-80 lg:h-96">
                <img 
                  src={currentFeatured.image} 
                  alt={currentFeatured.title}
                  className="w-full h-full object-cover"
                />
                {/* Navigation Arrows */}
                <button
                  onClick={prevFeatured}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={nextFeatured}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>

              {/* Featured Content */}
              <div className="p-8 flex flex-col justify-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentFeatured.title}
                </h1>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {currentFeatured.description}
                </p>
                <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2" size={14} />
                    <span>{currentFeatured.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="mr-2" size={14} />
                    <span>{currentFeatured.readTime}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onBlogClick && onBlogClick(currentFeatured)}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors self-start"
                >
                  View Post
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {featuredPosts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentFeaturedIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentFeaturedIndex ? 'bg-purple-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Latest Posts Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {latestPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => onBlogClick && onBlogClick(post)}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-1" size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-1" size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          <div className="text-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
