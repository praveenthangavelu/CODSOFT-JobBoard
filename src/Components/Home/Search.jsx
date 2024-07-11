import React from 'react';

const Search = ({ query, handleInputChange }) => {
  return (
    <div className="relative bg-[#37A3C3] mx-auto space-x-5 text-gray-600">
      <input
        value={query}
        className="border-2 border-gray-300 bg-white h-10 w-96 px-10 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        onChange={handleInputChange}
        name="search"
        placeholder="What Position you are Searching for?"
      />
      <button type="submit" className="absolute right-4 top-0 mt-2">
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
          className="lucide lucide-search bg-transparent text-black"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    </div>
  );
};

export default Search;
