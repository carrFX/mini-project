// src/components/EventCard.tsx

import React from 'react';

interface EventCardProps {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
}

const EventCard: React.FC<EventCardProps> = ({ id, title, date, location, price }) => {
  return (
    <div className="relative bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 text-white shadow-xl rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 overflow-hidden">
      <h2 className="text-3xl font-extrabold mb-2">{title}</h2>
      <p className="text-lg mb-1">{date}</p>
      <p className="text-lg mb-1">{location}</p>
      <p className="text-xl font-semibold text-yellow-300 mb-4">{price}</p>
      <a
        href={`/events/${id}`}
        className="inline-block px-4 py-2 bg-yellow-400 text-gray-800 rounded-md font-semibold hover:bg-yellow-500 transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        View Details
      </a>
      <div className="absolute bottom-4 right-4">
        <svg
          className="w-8 h-8 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8 11.4V15H5.6v-3h2.4V9.5c0-2.3 1.4-3.6 3.5-3.6 1 0 1.8.1 2 .1v2.3h-1.3c-1.3 0-1.6.6-1.6 1.5v1.9h2.7l-.4 3H10.6v8.4C15.2 21.8 19 17.3 19 12c0-6.6-5.4-12-12-12z" />
        </svg>
      </div>
    </div>
  );
};

export default EventCard;
