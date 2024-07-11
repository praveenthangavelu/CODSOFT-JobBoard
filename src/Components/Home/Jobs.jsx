import React from 'react';
import './style.css';

const Jobs = ({ result, currentPage, totalPages, onPageChange }) => {
  return (
    <div className='text-white border-2 py-9 mx-10 border-[#37A3C3] rounded'>
      {result.length > 0 ? (
        <div className='grid grid-cols-2 py-10 gap-10 mx-10 mt-10'>
          {result}
        </div>
      ) : (
        <div className='text-center py-10'>
          <p>No jobs found. Please adjust your search criteria.</p>
        </div>
      )}
      <div className='flex justify-center mt-5'>
        <button 
          disabled={currentPage === 1} 
          onClick={() => onPageChange(currentPage - 1)} 
          className='px-3 py-1 mx-1 bg-[#37A3C3] text-white rounded disabled:opacity-50'
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-circle-arrow-left"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M16 12H8" />
            <path d="m12 8-4 4 4 4" />
          </svg>
        </button>
       
        <button 
          disabled={currentPage === totalPages} 
          onClick={() => onPageChange(currentPage + 1)} 
          className='px-3 py-1 mx-1 bg-[#37A3C3] text-white rounded disabled:opacity-50'
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-circle-arrow-right"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="m12 16 4-4-4-4" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Jobs;
