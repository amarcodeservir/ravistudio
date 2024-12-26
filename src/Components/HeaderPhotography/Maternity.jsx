import React from 'react';
import img0 from "../assets/HeaderPhotographyimg/maternityimg.jpeg";
import img1 from "../assets/HeaderPhotographyimg/maternityimg1.jpeg";
import img2 from "../assets/HeaderPhotographyimg/maternityimg2.jpeg";
import { Link } from 'react-router-dom';

function Maternity() {
  return (
    <section className="bg-pink-50 py-36">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Maternity Photography</h2>
        <p className="text-lg text-gray-600 mb-12">
          Celebrate the beauty of motherhood with our maternity photography. We capture the tender and intimate moments that reflect the love and excitement of expecting a new life.
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative">
            <img
              src={img0}
              alt="Maternity 1"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
              <p className="text-white text-xl font-bold">Maternity Look 1</p>
            </div>
          </div>

          <div className="group relative">
            <img
              src={img1}
              alt="Maternity 2"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
              <p className="text-white text-xl font-bold">Maternity Look 2</p>
            </div>
          </div>

          <div className="group relative">
            <img
              src={img2}
              alt="Maternity 3"
              className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
              <p className="text-white text-xl font-bold">Maternity Look 3</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <Link to="/ContactForm">
        <div className="mt-12">
          <button
            className="bg-primary text-white border border-primary px-6 py-2 rounded-full text-lg transition duration-300 hover:bg-secondary hover:text-black"
            onClick={() => alert("Explore our maternity gallery!")}
          >
            Book Your Session
          </button>
        </div>
        </Link>
      </div>
    </section>
  );
}

export default Maternity;
