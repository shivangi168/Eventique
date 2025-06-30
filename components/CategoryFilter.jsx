'use client'

import React from 'react';

const categories = [
  'All', 'Arts', 'Business', 'Concert', 'Workshops',
  'Coaching and Consulting', 'Health and Wellbeing',
  'Volunteer', 'Sports', 'Free'
];

const CategoryFilter = () => {
  return (
    <div className="py-6 px-4">
      <h2 className="text-2xl font-bold mb-4">Explore Events</h2>
      <div className="flex flex-wrap gap-4">
        {categories.map((category, index) => (
          <button key={index} className="bg-white border px-4 py-2 rounded hover:bg-green-100">
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
