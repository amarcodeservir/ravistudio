import React from "react";
import weddingImage1 from "../assets/HeaderPhotographyimg/weddingimg1.jpg"; // Replace with actual image paths
import weddingImage2 from "../assets/HeaderPhotographyimg/weddingimg2.jpg"; // Replace with actual image paths
import weddingImage3 from "../assets/HeaderPhotographyimg/weddingimg3.jpg"; // Replace with actual image paths

const Wedding = () => {
  return (
    <div className="bg-white text-black py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Wedding Photography Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500">
            Capturing the unforgettable moments of your special day with elegance and grace. We provide a seamless experience to preserve every emotion, joy, and love on your wedding day.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="space-y-10">
          {/* Card 1 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={weddingImage1}
              alt="Wedding Ceremony"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3d"
            />
            <div className="p-6 text-black sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Timeless Vows</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                The exchange of vows is a cherished moment. We focus on capturing the emotional essence of your ceremony, so you can relive those beautiful words forever. Our approach blends candid shots with elegant portraits, ensuring that every significant moment is captured.
              </p>
              <button
                aria-label="View wedding ceremony gallery"
                className="bg-primary px-6 py-2 rounded-full text-lg text-white transition duration-300"
              >
                View Gallery
              </button>
            </div>
          </div>

          {/* Card 2 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={weddingImage2}
              alt="Bride and Groom"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3d"
            />
            <div className="p-6 text-black sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Perfect Together</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Our couple portraits capture the magic between you and your soulmate. These moments celebrate your love, bringing out the joy and connection that makes your bond unique. Whether it's a soft, intimate portrait or a joyful laugh shared between you two, we are there to make it unforgettable.
              </p>
              <button
                aria-label="Explore couple moments"
                className="bg-primary px-6 py-2 rounded-full text-lg text-white transition duration-300"
              >
                View Gallery
              </button>
            </div>
          </div>

          {/* Card 3 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={weddingImage3}
              alt="Wedding Cake Celebration"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3d"
            />
            <div className="p-6 text-black sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Celebrating Together</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Weddings are more than just a ceremony; they are about the celebration with family and friends. Let us capture your joyful moments, from cutting the cake to the first dance, and all the way to the last celebratory toast. These moments are the heartbeat of your wedding, and we ensure they're perfectly preserved.
              </p>
              <button
                aria-label="Book your wedding photography session"
                className="bg-primary px-6 py-2 rounded-full text-lg text-white transition duration-300"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Make Your Wedding Unforgettable</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto text-gray-500">
            From your first kiss to the final dance, we'll be there to preserve every beautiful moment of your wedding. Our photography service is tailored to your unique style and preferences, ensuring that every shot captures your love story in its purest form.
          </p>
          <button
            aria-label="Book your wedding photography session"
            className="bg-secondary text-black border border-primary px-6 py-2 rounded-full text-lg transition duration-300 hover:bg-primary hover:text-white"
          >
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
