import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { icon: FaFacebook, link: "#" },
  { icon: FaInstagram, link: "#" },
  { icon: FaLinkedin, link: "#" },
  { icon: FaWhatsapp, link: "#" },
  { icon: FaYoutube, link: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className=" mx-auto px-4">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4 px-2">
          {/* Column 1 - Location */}
          <div>
            <h3 className="font-bold text-lg mb-4">LOCATION</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Indira Nager",
                "Gomti Nager",
                "Gomti Nager Vistar",
                "Matiyari Chauraha",
              ].map((item) => (
                <li key={item} className="hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 - Photography */}
          <div>
            <h3 className="font-bold text-lg mb-4">PHOTOGRAPHY</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Wedding",
                "Pre Wedding",
                "Post Wedding",
                "Maternity",
                "Fashion",
              ].map((item) => (
                <li key={item} className="hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Navigation */}
          <div>
            <h3 className="font-bold text-lg mb-4">NAVIGATION</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Awards",
                "Films",
                "Poetry",
                "Blog",
                "Book Us",
                "Privacy Policy",
              ].map((item) => (
                <li key={item} className="hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <div>
              <h3 className="font-bold text-lg mb-4">
                WEDDING PHOTOGRAPHERS IN LUCKNOW
              </h3>
              <p className="text-gray-300 mb-6">
                <h4 className="font-bold text-base mb-2">Sukh Complex</h4>
                Munshi Puliya, Indira Nager, Lucknow-16
              </p>
            </div>
            <div className="flex space-x-4 justify-start md:justify-center mt-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.link}
                  className="bg-primary p-3 rounded-full text-white flex items-center justify-center"
                >
                  <social.icon className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © Copyright Difmo Tech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
