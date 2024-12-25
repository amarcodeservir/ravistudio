import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Added useLocation hook
import logo from "../../Components/assets/logo/Ravilogohd.png";
import dropdownIcon from "../assets/logo/down.png";

const Header = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Blog", path: "/blog" },
  ];

  const photographySections = [
    { id: 1, name: "Wedding", path: "/wedding" },
    { id: 2, name: "Pre-Wedding", path: "/prewedding" },
    { id: 3, name: "Post-Wedding", path: "/postwedding" },
    { id: 4, name: "Fashion", path: "/fashion" },
    { id: 5, name: "Birthday", path: "/birthday" },
    { id: 6, name: "Kitty Party", path: "/kittyparty" },
    { id: 7, name: "Maternity", path: "/maternity" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  // useLocation hook to track page changes (route changes)
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    // Close dropdown on route change (page navigation)
    setDropdownOpen(false);
  }, [location]); // location changes trigger dropdown close

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 3000);
  };

  return (
    <header
      className={`w-full fixed z-50 ${
        isScrolled ? "bg-black shadow-md" : "bg-black"
      } transition duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-secondary hover:text-gray-300 transition duration-300"
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown for Photography */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-secondary hover:text-gray-300"
            >
              <span>Photography</span>
              <img
                src={dropdownIcon}
                alt="Dropdown Icon"
                className="w-4 h-4"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 text-center bg-white shadow-lg overflow-hidden">
                {photographySections.map((section) => (
                  <Link
                    key={section.id}
                    to={section.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    {section.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/ContactForm"
            className="bg-primary text-secondary px-6 py-2 rounded-full transition duration-300 hover:bg-secondary hover:text-black"
          >
            Book Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-3xl text-[#FF8C24] focus:outline-none"
            onClick={handleToggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-black text-secondary fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className="text-lg hover:text-gray-300 transition duration-300"
              onClick={handleToggleMenu}
            >
              {link.name}
            </Link>
          ))}
          <div>
            {photographySections.map((section) => (
              <Link
                key={section.id}
                to={section.path}
                className="block text-lg hover:text-gray-300 transition duration-300"
                onClick={handleToggleMenu}
              >
                {section.name}
              </Link>
            ))}
          </div>
          <Link
            to="/ContactForm"
            className="bg-primary text-secondary px-6 py-2 rounded-full transition duration-300 hover:bg-secondary hover:text-black"
            onClick={handleToggleMenu}
          >
            Book Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
