// frontend/app/dashboard/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Bar } from 'react-chartjs-2';
import { withAuth } from '../utils/withAuth'; // Import fungsi withAuth

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  registrations: number;
  revenue: number;
}

const Dashboard: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [totalRegistrations, setTotalRegistrations] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await withAuth(() =>
          fetch('/api/withAuth', {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
          })
        );

        setEvents(data.data);

        const totalRegs = data.data.reduce((acc: number, event: Event) => acc + event.registrations, 0);
        const totalRev = data.data.reduce((acc: number, event: Event) => acc + event.revenue, 0);
        setTotalRegistrations(totalRegs);
        setTotalRevenue(totalRev);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: events.map(event => event.title),
    datasets: [
      {
        label: 'Registrations',
        data: events.map(event => event.registrations),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Revenue (IDR)',
        data: events.map(event => event.revenue),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-black p-4 rounded-md">
              <p className="text-lg">Total Registrations</p>
              <p className="text-2xl font-bold">{totalRegistrations}</p>
            </div>
            <div className="bg-black p-4 rounded-md">
              <p className="text-lg">Total Revenue</p>
              <p className="text-2xl font-bold">IDR {totalRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Event Statistics</h2>
          <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Event Performance' } } }} />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Event List</h2>
          <ul>
            {events.map(event => (
              <li key={event.id} className="mb-2">
                <div className="p-4 bg-gray-800 rounded-md">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p>Date: {event.date}</p>
                  <p>Location: {event.location}</p>
                  <p>Registrations: {event.registrations}</p>
                  <p>Revenue: IDR {event.revenue.toLocaleString()}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
