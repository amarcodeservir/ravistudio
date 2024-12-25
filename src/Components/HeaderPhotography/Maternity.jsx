// src/Components/FashionSection.jsx
import React from 'react';
import img0 from "../assets/fashionimg1.jpg"
import img1 from "../assets/fashionimg1.jpg"
import img2 from "../assets/fashionimg1.jpg"


function FashionSection() {
  return (
    <section className="bg-gray-50 py-36">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Fashion Photography</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore the world of fashion through our lens. From stunning runway shots to captivating street fashion,
          our photography captures the essence of style and beauty.
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative">
            <img
              src={img0}// Add your image path
              alt="Fashion 1"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
              <p className="text-white text-xl font-bold">Fashion Look 1</p>
            </div>
          </div>

          <div className="group relative">
            <img
              src={img1} // Add your image path
              alt="Fashion 2"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
              <p className="text-white text-xl font-bold">Fashion Look 2</p>
            </div>
          </div>

          <div className="group relative">
            <img
              src={img2} // Add your image path
              alt="Fashion 3"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
              <p className="text-white text-xl font-bold">Fashion Look 3</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <button
            className="bg-primary text-white font-semibold py-2 px-6 rounded-lg text-lg hover:bg-opacity-90 transition-all"
            onClick={() => alert("Explore our full portfolio!")}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default FashionSection;
