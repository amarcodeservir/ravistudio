import React from "react";
import img1 from "../../assets/birthdayimg1.png"; // Image 1
import img2 from "../../assets/fashionimg1.jpg"; // Image 2
import img3 from "../../assets/Ring.jpg"; // Image 3
const cards = [
  {
    title: "Swati & Surend",
    image: "https://via.placeholder.com/300x450",
    subtitle: "Every love story is beautiful",
  },
  {
    title: "Arushi ❤ Rituraj",
    image: "https://via.placeholder.com/300x450",
    subtitle: "Wedding Highlight",
  },
  {
    title: "Mayank & Vaishali",
    image: "https://via.placeholder.com/300x450",
    subtitle: "Wedding Highlight",
  },
  {
    title: "Ujjaval & Tarangani",
    image: "https://via.placeholder.com/300x450",
    subtitle: "Wedding Story",
  },
];
function Gallary() {
  return (
    <div className="w-full py-8  bg-theam">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Wedding Stories
        </h2>
        <p className="mt-2 text-lg text-secondary">
          A collection of memories captured with love.
        </p>
      </div>

      {/* Card Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-8 py-10">
        {/* Card 1 - Image */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <img
            className="w-full h-full object-cover"
            src={img1}
            alt="Wedding Image 1"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
           Birthday
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
            Fashion
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
          Ring Ceremony
          </div>
        </div>

        {/* Card 4 - Video */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src="src\assets\Birthdayvideo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Birthday
          </div>
        </div>

        {/* Card 5 - Video */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src="src\assets\fashionvideo.mp4" // Replace with your second video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Fashion
          </div>
        </div>

        {/* Card 6 - Video */}
        <div className="relative w-full h-72 rounded-xl overflow-hidden shadow-xl transform transition duration-300 hover:scale-105">
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source
              src="src\assets\postweddingvideo.mp4" // Replace with your third video URL
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-4 left-4 text-white text-2xl font-serif bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            Wedding 
          </div>
        </div>
      </div>
      <div className="bg-white font-sans">
        {/* Header Section */}
        <header className="text-center py-10 bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800">Cinematic Films</h1>
          <p className="text-lg text-gray-600">Capture Live Moments</p>
          <button className="mt-4 px-6 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600">
            CAPTURE LIVE MOMENTS
          </button>
        </header>

        {/* Cards Section */}
        <section className="px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-gray-600 mt-2">{card.subtitle}</p>
              </div>
            </div>
          ))}
        </section>
      </div> 
    </div>
  );
}

export default Gallary;
