import React from "react";
import birthdayImage1 from "../assets/HeaderPhotographyimg/birthday2.jpg"; // Replace with actual image paths
import birthdayImage2 from "../assets/HeaderPhotographyimg/birthday1.jpg"; // Replace with actual image paths
import birthdayImage3 from "../assets/HeaderPhotographyimg/birthday3.jpg"; // Replace with actual image paths

const kittyParty = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold">
          kittyParty Photography Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">
            Turning your kittyParty into a gallery of joyful memories that last forever.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 - Oval Shape */}
          <div className="relative group rounded-full overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={birthdayImage1}
              alt="Birthday Celebration"
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center text-white px-6">
                <h3 className="text-3xl font-semibold mb-2">Joyful Smiles</h3>
                <p className="text-sm mb-4">Every smile captured with care and creativity.</p>
                <button className="bg-pink-500 px-6 py-2 rounded-full text-lg hover:bg-purple-500">
                  View Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 - Hexagonal Shape */}
          <div className="relative group overflow-hidden transform transition-all duration-500">
            <div className="clip-hexagon overflow-hidden">
              <img
                src={birthdayImage2}
                alt="Birthday Fun"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center text-white px-6">
                <h3 className="text-3xl font-semibold mb-2">Colorful Moments</h3>
                <p className="text-sm mb-4">Add vibrant colors to your special day.</p>
                <button className="bg-pink-500 px-6 py-2 rounded-full text-lg hover:bg-purple-500">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 - Circular Image */}
          <div className="relative group overflow-hidden rounded-full w-full h-80 shadow-xl mx-auto transform transition-all duration-500 hover:scale-105">
            <img
              src={birthdayImage3}
              alt="Birthday Cake"
              className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="text-center text-white px-6">
                <h3 className="text-3xl font-semibold mb-2">Sweet Memories</h3>
                <p className="text-sm mb-4">Because every cake deserves its spotlight.</p>
                <button className="bg-pink-500 px-6 py-2 rounded-full text-lg hover:bg-purple-500">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-semibold mb-4">Make Every Birthday Special</h2>
          <p className="text-lg mb-8 max-w-lg mx-auto text-gray-200">
            Whether it's your 1st or your 50th, our professional photography services will make your day unforgettable!
          </p>
          <button className="bg-white text-purple-500 px-10 py-4 rounded-full text-xl font-semibold hover:bg-pink-500 hover:text-white transition duration-300">
            Book Your Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default kittyParty;
