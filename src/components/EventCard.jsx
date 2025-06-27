// File: src/components/EventCard.jsx
import React from 'react';

const EventCard = ({ title, imgUrl }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 w-full sm:w-72">
      <img src={imgUrl} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default EventCard;
