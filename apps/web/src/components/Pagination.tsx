// src/components/Pagination.tsx

import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Handler to change page
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 py-4">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105 duration-300 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Previous
      </button>

      {/* Page Info */}
      <span className="text-white font-semibold text-xl">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-transform transform hover:scale-105 duration-300 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
