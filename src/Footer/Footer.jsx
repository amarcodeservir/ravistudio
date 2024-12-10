import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white py-8">
      {/* Contact Information */}
      <div className="flex flex-col justify-center text-center md:text-left mb-8">
        <h2 className="text-xl font-bold mb-2">Contact Us</h2>
        <p>123 Main Street, Cityville, Country</p>
        <p>Email: contact@example.com</p>
        <p>Phone: +1 234 567 890</p>
      </div>

      {/* Map Section (currently commented out) */}
      <div>
        <h1>Home</h1>
      </div>
      {/* Social Media Links */}
      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-xl font-bold mb-2">Follow Us</h2>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-700 text-center py-2 mt-4">
        &copy; {new Date().getFullYear()} Your Company Name. All rights
        reserved.
      </div>
    </footer>
    //oinsc qeo;vgvcmW   .KNR 9VP3PRFWE K G90[43 TGHJ4ME]
  );
};

export default Footer;
