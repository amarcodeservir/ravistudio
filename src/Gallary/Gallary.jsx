import React from 'react';
import img1 from '../../assets/gallaryimg/birthdayimg1.png'; // Image 1
import img2 from '../../assets/gallaryimg/fashionbag.jpg'; // Image 2
import img3 from '../../assets/gallaryimg/weddingimg1.jpg'; // Image 3

function Gallary() {
  return (
    <div className="w-full py-16 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif text-gray-800">Our Beautiful Moments</h2>
        <p className="mt-4 text-lg text-gray-600">A collection of memories captured with love.</p>
      </div>

      {/* Card Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8">
        {/* Card 1 - Image */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <img
            className="w-full h-full object-cover"
            src={img1}
            alt="Wedding Image 1"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding Moment 1
          </div>
        </div>

        {/* Card 2 - Image */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <img
            className="w-full h-full object-cover"
            src={img2}
            alt="Wedding Image 2"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding Moment 2
          </div>
        </div>

        {/* Card 3 - Image */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <img
            className="w-full h-full object-cover"
            src={img3}
            alt="Wedding Image 3"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding Moment 3
          </div>
        </div>

        {/* Card 4 - Video */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src="https://videocdn.cdnpk.net/videos/873dc95a-5837-5c46-8f75-b841efe85e3d/horizontal/previews/clear/small.mp4?token=exp=1733817837~hmac=ebde5931f897b6ad4ccc029df36d6b3fb960a7753c0130e7245daa8235b76b91"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding Video 1
          </div>
        </div>

        {/* Card 5 - Video */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src="https://videocdn.cdnpk.net/videos/27b4abe5-f76b-4f85-8175-138e587eef37/horizontal/previews/clear/small.mp4?token=exp=1733817837~hmac=38a4b00e489ba3766497b7adda34cbcd1417c90ef6c53efde360e396420ece88" // Replace with your second video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding Video 2
          </div>
        </div>

        {/* Card 6 - Video */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src="https://videocdn.cdnpk.net/videos/3cb493b7-ddf2-4bc3-8ec3-3527d938655a/horizontal/previews/clear/small.mp4?token=exp=1733817953~hmac=82f0bf0868b6e6071eb64d0e3183e8d6a8f634f41ed7ee50e5bdc7b10e559903" // Replace with your third video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding Video 3
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallary;
