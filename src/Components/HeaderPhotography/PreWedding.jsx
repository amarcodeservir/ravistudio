import React from "react";
import img1 from "../assets/HeaderPhotographyimg/pre1.jpg"; // Replace with actual image paths
import img2 from "../assets/HeaderPhotographyimg/pre2.jpg"; // Replace with actual image paths
import img3 from "../assets/HeaderPhotographyimg/pre3.jpg"; // Replace with actual image paths
 

const PreWedding = () => {
  return (
    <div className="bg-white text-black py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Pre-Wedding Photography Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500">
            Capture the essence of your love story before the big day. Let us help you preserve your pre-wedding moments in stunning photographs.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="space-y-10">
          {/* Card 1 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={img1}
              alt="Couple sharing a romantic moment"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6 sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Romantic Moments</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Pre-wedding photography is the perfect way to showcase your love and chemistry before the wedding. These moments are about capturing your bond, shared laughter, and anticipation for your upcoming day.
              </p>
              <button
                aria-label="View pre-wedding gallery"
                className="bg-purple-500 px-6 py-2 rounded-full text-lg text-white transition duration-300"
              >
                View Gallery 
              </button>
            </div>
          </div>

          {/* Card 2 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={img2}
              alt="Couple enjoying whimsical pre-wedding vibes"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6 sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Whimsical Vibes</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Whether it's a casual outdoor shoot or a styled session, we aim to bring out the best of your pre-wedding excitement. These photos will add a personal touch to your wedding album, capturing moments of fun and spontaneity.
              </p>
              <button
                aria-label="Explore more pre-wedding moments"
                className="bg-purple-500 px-6 py-2 rounded-full text-lg text-white transition duration-300"
              >
                Explore More
              </button>
            </div>
          </div>

          {/* Card 3 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={img3}
              alt="Couple sharing intimate love moment before wedding"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6 sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">In Love Forever</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Pre-wedding shoots allow us to capture the pure joy and love between you and your partner. The beauty of these sessions lies in the quiet moments and intimate connections shared before the big day.
              </p>
              <button
                aria-label="Book your pre-wedding photography session"
                className="bg-purple-500 px-6 py-2 rounded-full text-lg text-white transition duration-300"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Make Your Pre-Wedding Unforgettable</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto text-gray-500">
            Let us tell your love story through beautiful pre-wedding photographs. Whether it's a romantic, whimsical, or fun shoot, we ensure every moment is perfectly captured.
          </p>
          <button
            aria-label="Book your pre-wedding photography session"
            className="bg-purple-500 text-white border border-purple-700 px-6 py-2 rounded-full text-lg transition duration-300 hover:bg-pink-500 hover:text-white"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreWedding;