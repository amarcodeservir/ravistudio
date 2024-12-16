import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar-content flex items-center space-x-4 p-4 bg-red-600 rounded-lg shadow-md">
      {/* Input Field */}
      <input
        id="searchQ"
        type="text"
        placeholder="Type here..."
        autoComplete="off"
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Search Controls */}
      <div className="searchControls flex items-center space-x-2">
        {/* Mic Icon */}
        <div
          id="micIcon"
          className="micIcon w-8 h-18 flex items-center justify-center bg-blue-500 text-white rounded-full hover:bg-blue-600 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -1 24 24"
            height="100%"
            width="100%"
          >
            <path
              fill="currentColor"
              d="M12 14q-1.25 0-2.125-.875T9 11V5q0-1.25.875-2.125T12 2t2.125.875T15 5v6q0 1.25-.875 2.125T12 14m-1 7v-3.075q-2.6-.35-4.3-2.325T5 11h2q0 2.075 1.463 3.538T12 16t3.538-1.463T17 11h2q0 2.625-1.7 4.6T13 17.925V21z"
            />
          </svg>
        </div>

        {/* Search Button */}
        <button
          id="enterBtn"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
