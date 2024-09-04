// src/components/EventForm.tsx

import React, { useState } from 'react';

interface EventFormProps {
  onSubmit: (formData: EventFormData) => void;
  initialData?: EventFormData;
}

export interface EventFormData {
  eventName: string;
  date: string;
  time: string;
  location: string;
  description: string;
  price: number;
  availableSeats: number;
  ticketType: string;
}

const EventForm: React.FC<EventFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<EventFormData>(
    initialData || {
      eventName: '',
      date: '',
      time: '',
      location: '',
      description: '',
      price: 0,
      availableSeats: 0,
      ticketType: 'free',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-br from-indigo-800 via-purple-700 to-pink-600 p-8 rounded-lg shadow-lg text-white space-y-6">
      <div>
        <label htmlFor="eventName" className="block text-lg font-semibold mb-2">
          Nama Acara
        </label>
        <input
          id="eventName"
          name="eventName"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.eventName}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-lg font-semibold mb-2">
          Tanggal
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="time" className="block text-lg font-semibold mb-2">
          Waktu
        </label>
        <input
          id="time"
          name="time"
          type="time"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.time}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-lg font-semibold mb-2">
          Lokasi
        </label>
        <input
          id="location"
          name="location"
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-lg font-semibold mb-2">
          Deskripsi
        </label>
        <textarea
          id="description"
          name="description"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-lg font-semibold mb-2">
          Harga (IDR)
        </label>
        <input
          id="price"
          name="price"
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.price}
          onChange={handleChange}
          required
          min={0}
        />
      </div>

      <div>
        <label htmlFor="availableSeats" className="block text-lg font-semibold mb-2">
          Jumlah Kursi Tersedia
        </label>
        <input
          id="availableSeats"
          name="availableSeats"
          type="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.availableSeats}
          onChange={handleChange}
          required
          min={0}
        />
      </div>

      <div>
        <label htmlFor="ticketType" className="block text-lg font-semibold mb-2">
          Tipe Tiket
        </label>
        <select
          id="ticketType"
          name="ticketType"
          className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formData.ticketType}
          onChange={handleChange}
          required
        >
          <option value="free">Gratis</option>
          <option value="paid">Berbayar</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-gray-800 py-2 px-4 rounded-md font-semibold hover:bg-yellow-600 transition-colors"
      >
        Simpan Acara
      </button>
    </form>
  );
};

export default EventForm;
