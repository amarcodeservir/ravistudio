import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Ravilogohd.png"; // Import the logo image
const Header = () => {
  const navLinks = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "About" },
    { id: 3, name: "Blog", path: "/blog" },
  ];

  const photographySections = [
    { name: "Wedding", path: "/photography/wedding" },
    { name: "Pre-Wedding", path: "/photography/pre-wedding" },
    { name: "Post-Wedding", path: "/photography/post-wedding" },
    { name: "Fashion", path: "/photography/fashion" },
    { name: "Birthday", path: "/photography/birthday" },
    { name: "Kitty Party", path: "/photography/kittyparty" },
    { name: "Maternity", path: "/photography/maternity" },
  ];

  return (
    <div className="flex justify-center">
      <header className="bg-black text-secondary w-full">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="font-bold">
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              <img
                src={logo}
                alt="MyWebsite Logo"
                className="h-10" // Adjust the height of your logo as needed
              />
            </Link>
          </div>

          {/* Navbar Links */}
          <nav className="flex items-center space-x-6">
            <ul className="flex space-x-14">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.path}
                    className="text-secondary hover:text-gray-300 transition duration-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Photography Dropdown */}
              <li className="relative group">
                <Link
                  to="#"
                  className="text-secondary hover:text-gray-300 transition duration-300 "
                >
                  Photography
                </Link>
                <div className="absolute left-0 hidden mt-2 w-3/10 bg-black text-secondary p-4 rounded-lg group-hover:block group-hover:opacity-100 transition-all duration-300 delay-200 w-[150%]">
                  {photographySections.map((section, index) => (
                    <Link
                      key={index}
                      to={section.path}
                      className="flex flex-col hover:text-black transition duration-500 hover:bg-primary "
                    >
                      {section.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>

            {/* "Book Us" Button */}
            <Link
              to="/contact"
              className="bg-primary text-secondary px-6 py-2 transition duration-300 rounded-full"
            >
              Book Us
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
