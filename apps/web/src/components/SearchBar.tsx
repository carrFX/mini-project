import React, { useState, useCallback } from 'react';

interface SearchBarProps {
  onSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Debounce function to limit the rate of search input processing
  const debounce = useCallback((func: (query: string) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (query: string) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(query);
      }, wait);
    };
  }, []);

  // Use useCallback to memoize the debounced function
  const debouncedSearch = useCallback(debounce((query: string) => onSearch(query), 300), [onSearch, debounce]);

  // Handle input change
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    debouncedSearch(query);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search events..."
        className="w-full p-4 border-2 border-gray-600 rounded-lg shadow-xl bg-gradient-to-r from-purple-800 via-indigo-700 to-blue-600 text-white placeholder-gray-200 placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
      />
      { <svg
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 text-white opacity-75"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 4a7 7 0 0 1 0 14 7 7 0 0 1 0-14zM21 21l-4.35-4.35"
        />
      </svg> }
    </div>
  );
};

export default SearchBar;
