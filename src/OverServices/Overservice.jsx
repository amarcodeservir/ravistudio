import React from 'react';
import weddingImage from '../../assets/gallaryimg/weddingimg2.jpg'; // Ensure the correct path
import preWeddingImage from '../../assets/gallaryimg/weddingimg3.jpg'; // Ensure the correct path

const Overservice = () => {
  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Wedding Photography Card */}
        <div 
          className="relative rounded-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${weddingImage})` }}
        >
          <div className="bg-black bg-opacity-60 p-8 absolute inset-0 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">Wedding Photography</h2>
              <p className="text-yellow-400 text-lg font-semibold mt-2">Bring Your Creativity to Life</p>
              <p className="text-sm mt-4 leading-relaxed">
                A wedding is typically one of the most memorable days in a lifetime, one that people remember for years to come through wedding photography.
              </p>
            </div>
            <button className="text-yellow-400 font-semibold underline mt-4 self-start">
              Read More
            </button>
          </div>
        </div>

        {/* Pre Wedding Photography Card */}
        <div 
          className="relative rounded-lg overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${preWeddingImage})` }}
        >
          <div className="bg-black bg-opacity-60 p-8 absolute inset-0 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">Pre Wedding Photography</h2>
              <p className="text-yellow-400 text-lg font-semibold mt-2">Explore. Create. Inspire.</p>
              <p className="text-sm mt-4 leading-relaxed">
                Pre-wedding photography, often referred to as an engagement shoot, usually takes place three to six months prior to the wedding day.
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
