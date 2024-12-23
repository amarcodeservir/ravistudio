import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import logo from "../../Components/assets/logo/Ravilogohd.png";

const Header = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Blog", path: "/blog" },
  ];

  const photographySections = [
    { name: "Wedding", path: "/photography/wedding" },
    { name: "Pre-Wedding", path: "/photography/pre-wedding" },
    { name: "Post-Wedding", path: "/photography/post-wedding" },
    { name: "Fashion", path: "/fashion" },
    { name: "Birthday", path: "/birthday" },
    { name: "Kitty Party", path: "/kittyparty" },
    { name: "Maternity", path: "/photography/maternity" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
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

          {/* Reusable Dropdown */}
          <Dropdown photographySections={photographySections} />

          <Link
            to="/contact"
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
            {photographySections.map((section, index) => (
              <Link
                key={index}
                to={section.path}
                className="block text-lg hover:text-gray-300 transition duration-300"
                onClick={handleToggleMenu}
              >
                {section.name}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
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
