import React from "react";
import Image1 from "../assets/HeaderPhotographyimg/post2.jpg"; // Replace with actual image paths
import Image2 from "../assets/HeaderPhotographyimg/post3.jpeg"; // Replace with actual image paths
import Image3 from "../assets/HeaderPhotographyimg/post3.jpeg"; // Replace with actual image paths
import { Link } from "react-router-dom";

const PostWedding = () => {
  return (
    <div className="bg-white text-black py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            Post-Wedding Photography Services
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-500">
            Capture the joy and bliss after your special day with beautiful post-wedding photos.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="space-y-10">
          {/* Card 1 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={Image1}
              alt="Post-Wedding Moment 1"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6 text-black sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Joyful Memories</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Post-wedding photography captures the beauty of your love after the big day. These sessions highlight your happiness and the joy of being newlywed.
              </p>
              <Link to="/WeddingDetails">
                <button
                  aria-label="View pre-wedding gallery"
                  className="bg-primary text-secondary px-6 py-2 rounded-full transition duration-300 hover:bg-secondary hover:border border-primary hover:text-black"                >
                  View Gallery
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={Image2}
              alt="Post-Wedding Moment 2"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6 text-black sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">Blissful Bond</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Let your love shine in the post-wedding photos. Whether it’s a relaxed outdoor shoot or a stylized indoor shoot, we capture the happiness and bliss of your post-wedding life.
              </p>
              <Link to="/WeddingDetails">
                <button
                  aria-label="View pre-wedding gallery"
                  className="bg-primary text-secondary px-6 py-2 rounded-full transition duration-300 hover:bg-secondary hover:border border-primary hover:text-black"                >
                  View Gallery
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 - Image on the left and content on the right */}
          <div className="flex flex-col sm:flex-row items-center justify-between overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105">
            <img
              src={Image3}
              alt="Post-Wedding Moment 3"
              className="w-full sm:w-1/2 h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="p-6 text-black sm:w-1/2">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">New Beginnings</h3>
              <p className="text-sm sm:text-base mb-4 text-gray-500">
                Post-wedding sessions offer the opportunity to relive your happiest moments and mark the beginning of a new chapter in your love story.
              </p>
              <Link to="/WeddingDetails">
                <button
                  aria-label="View pre-wedding gallery"
                  className="bg-primary text-secondary px-6 py-2 rounded-full transition duration-300 hover:bg-secondary hover:border border-primary hover:text-black"                >
                  View Gallery
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">Make Your Post-Wedding Moments Unforgettable</h2>
          <p className="text-lg sm:text-xl mb-8 max-w-lg mx-auto text-gray-500">
            Capture the start of your new life together with professional post-wedding photography that will stay with you forever.
          </p>
          <Link to="/ContactForm">
            <button
              aria-label="Book your post-wedding photography session"
              className="bg-secondary text-black border border-primary px-6 py-2 rounded-full text-lg transition duration-300 hover:bg-primary hover:text-white"
            >
              Book Your Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostWedding;

