import React from "react";
import birthdayImage from "../../Components/assets/gallary/gallary0.jpg"; 
import birthdayImage2 from "../../Components/assets/gallary/gallary.jpg"; 

const Birthday = () => {
  return (
    <div className="bg-theam text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Birthday Photography Services
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary">
            Capturing moments of joy, laughter, and memories that last a
            lifetime.
          </p>
        </div>

        {/* Gallery or Featured Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img
              src={birthdayImage}
              alt="Birthday Photography"
              className="w-full h-64 object-cover transform transition-all duration-300 group-hover:scale-105"
            />
            <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center text-center p-4">
              <h3 className="text-2xl font-semibold text-white">
                Memorable Moments
              </h3>
              <p className="text-sm text-white">
                Capture the essence of your celebration
              </p>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img
              src={birthdayImage2}
              alt="Birthday Photography"
              className="w-full h-64 object-cover transform transition-all duration-300 group-hover:scale-105"
            />
            <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center text-center p-4">
              <h3 className="text-2xl font-semibold text-white">
                Unforgettable Moments
              </h3>
              <p className="text-sm text-white">
                Let us help you relive your special day
              </p>
            </div>
          </div>

          {/* Additional images or cards can be added here */}
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Make Your Birthday Unforgettable
          </h2>
          <p className="text-lg text-secondary mb-8">
            Book your session with us today and create lasting memories!
          </p>
          <button className="bg-primary text-white px-6 py-2 rounded-full transition duration-300 hover:bg-secondary">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
