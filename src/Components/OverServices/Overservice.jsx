<<<<<<< HEAD:src/OverServices/Overservice.jsx
import React from 'react';
import weddingImage from '../assets/weddingimg2.jpg'; // Adjusted path
import preWeddingImage from '../assets/weddingimg2.jpg'; // Adjusted path
=======
import React from "react";
// import weddingImage from "../assets/weddingimg2"; // Adjusted path
// import preWeddingImage from "../assets/weddingimg2.jpg"; // Adjusted path
>>>>>>> amar:src/Components/OverServices/Overservice.jsx

const Overservice = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
<<<<<<< HEAD:src/OverServices/Overservice.jsx
      <div className="max-w-7xl mx-auto">

        {/* Wedding Photography Card */}
        <div
          className="relative rounded-lg overflow-hidden w-full flex flex-col md:flex-row h-auto"
          style={{
            backgroundImage: `url(${weddingImage})`, // Corrected syntax for backgroundImage
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
=======
      <div className="flex flex-wrap justify-between gap-8 max-w-7xl mx-auto">
        {/* Wedding Photography Card */}
        <div
          className="relative rounded-lg overflow-hidden bg-cover bg-center w-full md:w-[48%] h-96"
          style={
            {
              // backgroundImage: `url(${weddingImage})`, // Corrected syntax for backgroundImage
            }
          }
>>>>>>> amar:src/Components/OverServices/Overservice.jsx
        >
          <div className="bg-black bg-opacity-60 p-8 flex flex-col justify-between w-full h-96">
            <div>
              <h2 className="text-3xl font-bold">Wedding Photography</h2>
              <p className="text-yellow-400 text-lg font-semibold mt-2">
                Bring Your Creativity to Life
              </p>
              <p className="text-sm mt-4 leading-relaxed">
                A wedding is typically one of the most memorable days in a
                lifetime, one that people remember for years to come through
                wedding photography.
              </p>
            </div>
            <button className="text-yellow-400 font-semibold underline mt-4 self-start">
              Read More
            </button>
          </div>
        </div>

        {/* Pre Wedding Photography Card */}
        <div
<<<<<<< HEAD:src/OverServices/Overservice.jsx
          className="relative rounded-lg overflow-hidden w-full flex flex-col md:flex-row h-auto mt-8"
          style={{
            backgroundImage: `url(${preWeddingImage})`, // Corrected syntax for backgroundImage
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
=======
          className="relative rounded-lg overflow-hidden bg-cover bg-center w-full md:w-[48%] h-96"
          style={
            {
              // backgroundImage: `url(${preWeddingImage})`, // Corrected syntax for backgroundImage
            }
          }
>>>>>>> amar:src/Components/OverServices/Overservice.jsx
        >
          <div className="bg-black bg-opacity-60 p-8 flex flex-col justify-between w-full h-96">
            <div>
              <h2 className="text-3xl font-bold">Pre Wedding Photography</h2>
              <p className="text-yellow-400 text-lg font-semibold mt-2">
                Explore. Create. Inspire.
              </p>
              <p className="text-sm mt-4 leading-relaxed">
                Pre-wedding photography, often referred to as an engagement
                shoot, usually takes place three to six months prior to the
                wedding day.
              </p>
            </div>
            <button className="text-yellow-400 font-semibold underline mt-4 self-start">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overservice;
