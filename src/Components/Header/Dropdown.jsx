import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = ({ photographySections }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  // Attach the event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle link click to close dropdown and navigate
  const handleLinkClick = (path) => {
    setDropdownOpen(false); // Close the dropdown
    navigate(path); // Navigate to the clicked page
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Dropdown Toggle */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="text-secondary hover:text-gray-300 transition duration-300"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
      >
        Photography
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div className="absolute left-0 mt-2 w-[200px] bg-black text-secondary p-4 rounded-lg shadow-lg z-50">
          {photographySections.map((section, index) => (
            <div key={index}>
              <button
                onClick={() => handleLinkClick(section.path)}
                className="block w-full text-left hover:bg-primary hover:text-black transition duration-300 px-2 py-1 rounded-md"
              >
                {section.name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
