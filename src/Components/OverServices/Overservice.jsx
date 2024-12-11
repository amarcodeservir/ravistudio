import React from 'react';
import weddingImage from '../../assets/weddingimg2.jpg'; // Adjusted path
import preWeddingImage from '../../assets/weddingimg2.jpg'; // Adjusted path

const Overservice = () => {
  return (
    <div className="bg-theam text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading "Our Expertise" */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Our Expertise
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary">
            We specialize in capturing moments that last a lifetime, ensuring your special day is beautifully remembered.
          </p>
        </div>

        {/* Wedding Photography Card */}
        <div
          className="relative rounded-lg overflow-hidden w-full flex flex-col md:flex-row h-auto group"
          style={{
            backgroundImage: `url(${weddingImage})`, // Corrected syntax for backgroundImage
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay with wave transition effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-100 transition-all duration-2000 ease-out wave-effect"></div>
          <div className="relative z-10 p-8 flex flex-col justify-between w-full h-96">
            <div>
              <h2 className="text-3xl font-bold">Wedding Photography</h2>
              <p className="text-primary text-lg font-semibold mt-2">
                Bring Your Creativity to Life
              </p>
              <p className="text-sm mt-4 leading-relaxed">
                A wedding is typically one of the most memorable days in a lifetime, one that people remember for years to come through wedding photography.
              </p>
            </div>
            <button className="bg-primary text-secondary px-6 py-2 transition duration-300 rounded-full self-start">
              Read More
            </button>
          </div>
        </div>

        {/* Pre Wedding Photography Card */}
        <div
          className="relative rounded-lg overflow-hidden w-full flex flex-col md:flex-row h-auto mt-8 group"
          style={{
            backgroundImage: `url(${preWeddingImage})`, // Corrected syntax for backgroundImage
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay with wave transition effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-100 transition-all duration-2000 ease-out wave-effect"></div>
          <div className="relative z-10 p-8 flex flex-col justify-between w-full h-96">
            <div>
              <h2 className="text-3xl font-bold">Pre Wedding Photography</h2>
              <p className="text-primary text-lg font-semibold mt-2">
                Explore. Create. Inspire.
              </p>
              <p className="text-sm mt-4 leading-relaxed">
                Pre-wedding photography, often referred to as an engagement shoot, usually takes place three to six months prior to the wedding day.
              </p>
            </div>
            <button className="bg-primary text-secondary px-6 py-2 transition duration-300 rounded-full self-start">
              Read More
            </button>
          </div>
        </div>

        {/* Post Wedding Photography Card */}
        <div
          className="relative rounded-lg overflow-hidden w-full flex flex-col md:flex-row h-auto mt-8 group"
          style={{
            backgroundImage: `url(${preWeddingImage})`, // Corrected syntax for backgroundImage
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay with wave transition effect */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-100 transition-all duration-2000 ease-out wave-effect"></div>
          <div className="relative z-10 p-8 flex flex-col justify-between w-full h-96">
            <div>
              <h2 className="text-3xl font-bold">Post Wedding Photography</h2>
              <p className="text-primary text-lg font-semibold mt-2">
                Explore. Create. Inspire.
              </p>
              <p className="text-sm mt-4 leading-relaxed">
                Post-wedding photography, often referred to as an engagement shoot, usually takes place three to six months prior to the wedding day.
              </p>
            </div>
            <button className="bg-primary text-secondary px-6 py-2 transition duration-300 rounded-full self-start">
              Read More
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Overservice;
