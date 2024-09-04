"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import '../app/globals.css';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  price: string;
}

const Page: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1); // Total pages state

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`/api/events?search=${searchQuery}&page=${currentPage}`);
        const data = await response.json();
        if (data.status === 'ok') {
          setEvents(data.events || []);
          setTotalPages(data.totalPages || 1); // Mengatur total pages jika ada
        } else {
          console.error("Failed to fetch events:", data.message);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [searchQuery, currentPage]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6">
        {events.map((event) => (
          <EventCard key={event.id} {...event} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
