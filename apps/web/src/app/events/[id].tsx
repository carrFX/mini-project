// pages/events/[id].tsx
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../../components/Navbar';

interface EventDetailProps {
  event: {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    price: string;
    availableSeats: number;
    ticketType: string;
  };
}

const EventDetail: React.FC<EventDetailProps> = ({ event }) => {
  const router = useRouter();

  const handleBuyTicket = () => {
    // Implementasi logika pembelian tiket di sini
    alert('Ticket purchased successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-extrabold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {event.title}
        </h1>
        <div className="mb-8 text-center">
          <p className="text-lg font-medium text-gray-400"><strong>Date:</strong> {event.date}</p>
          <p className="text-lg font-medium text-gray-400"><strong>Location:</strong> {event.location}</p>
          <p className="text-lg font-medium text-yellow-400"><strong>Price:</strong> {event.price}</p>
          <p className="text-lg font-medium text-gray-400"><strong>Available Seats:</strong> {event.availableSeats}</p>
          <p className="text-lg font-medium text-gray-400"><strong>Ticket Type:</strong> {event.ticketType}</p>
        </div>
        <div className="mb-8 text-lg leading-relaxed text-gray-300 bg-gray-800 bg-opacity-60 p-6 rounded-lg shadow-lg">
          {event.description}
        </div>
        <div className="text-center">
          <button
            onClick={handleBuyTicket}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-transform transform hover:scale-105 shadow-lg"
          >
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

// Simulasi fetching data event dari server
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  // Fetch data event berdasarkan ID
  const event = {
    id: Number(id),
    title: 'Sample Event',
    date: '2024-08-30',
    location: 'Jakarta, Indonesia',
    description: 'This is a sample event description. It provides details about the event including what attendees can expect, who the speakers are, and other relevant information.',
    price: 'IDR 300,000',
    availableSeats: 100,
    ticketType: 'VIP',
  };

  return {
    props: {
      event,
    },
  };
};

export default EventDetail;
