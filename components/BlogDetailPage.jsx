'use client'

import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaChevronLeft, FaChevronRight, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const BlogDetailPage = ({ blog, onBackToBlog, onNavigateToHome, onNavigateToBlog }) => {
  const [currentRelatedIndex, setCurrentRelatedIndex] = useState(0);

  const relatedPosts = [
    {
      id: 1,
      title: "How to Live Stream Successfully: Complete Guide for Event Hosts",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 2,
      title: "Virtual Event Sponsorship Ideas for Your Next Event",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 3,
      title: "13 Awesome Virtual Event Ideas for Your Next Online Event",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    },
    {
      id: 4,
      title: "How to organise a virtual event successfully with Barren",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
      date: "5 May, 2022",
      readTime: "10 mins read"
    }
  ];

  const nextRelated = () => {
    setCurrentRelatedIndex((prevIndex) => 
      (prevIndex + 1) % Math.max(1, relatedPosts.length - 2)
    );
  };

  const prevRelated = () => {
    setCurrentRelatedIndex((prevIndex) => 
      (prevIndex - 1 + Math.max(1, relatedPosts.length - 2)) % Math.max(1, relatedPosts.length - 2)
    );
  };

  const visibleRelatedPosts = relatedPosts.slice(currentRelatedIndex, currentRelatedIndex + 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
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
                onClick={onNavigateToBlog}
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Our Blog
              </button>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">
              Blog Detail View
            </li>
          </ol>
        </nav>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={blog?.image || "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&h=400&fit=crop"} 
            alt={blog?.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>

        {/* Blog Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          {blog?.title || "Organising a Successful Christmas Party with Barren"}
        </h1>

        {/* Metadata */}
        <div className="flex items-center justify-center space-x-6 mb-8 text-gray-500">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" size={16} />
            <span>{blog?.date || "5 May, 2022"}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-2" size={16} />
            <span>{blog?.readTime || "10 mins read"}</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              How exactly do we organize a virtual Christmas party?
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Steps of Creating a Successful Virtual Christmas Party
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Gift Revealing session</li>
              <li>Christmas Scavenger Hunt</li>
              <li>Holiday Wine Tasting</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Event analytics at the fingertips
            </h2>
            
            <p className="text-gray-700 leading-relaxed">
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Share This Article</h3>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <FaFacebook size={16} />
              </button>
              <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                <FaTwitter size={16} />
              </button>
              <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                <FaLinkedin size={16} />
              </button>
              <button className="w-10 h-10 bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <FaEnvelope size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="bg-white rounded-lg p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Posts</h3>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevRelated}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              disabled={currentRelatedIndex === 0}
            >
              <FaChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextRelated}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              disabled={currentRelatedIndex >= relatedPosts.length - 3}
            >
              <FaChevronRight className="w-5 h-5 text-gray-600" />
            </button>

            {/* Related Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-16">
              {visibleRelatedPosts.map((post) => (
                <div key={post.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-lg mb-2 text-gray-800 line-clamp-2">
                    {post.title}
                  </h4>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
