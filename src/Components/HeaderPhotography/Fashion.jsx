import React, { useState, useEffect } from 'react';
import img0 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img1 from "../assets/HeaderPhotographyimg/girl2.jpg"; // Assuming different images
import img2 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img3 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img4 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img5 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img6 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img7 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img8 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images
import img9 from "../assets/HeaderPhotographyimg/girl3.jpg"; // Assuming different images

const images = [
  { src: img0, alt: 'Fashion Look 1', label: 'Fashion Look 1' },
  { src: img1, alt: 'Fashion Look 2', label: 'Fashion Look 2' },
  { src: img2, alt: 'Fashion Look 3', label: 'Fashion Look 3' },
  { src: img3, alt: 'Fashion Look 4', label: 'Fashion Look 4' },
  { src: img4, alt: 'Fashion Look 5', label: 'Fashion Look 5' },
  { src: img5, alt: 'Fashion Look 6', label: 'Fashion Look 6' },
  { src: img6, alt: 'Fashion Look 7', label: 'Fashion Look 7' },
  { src: img7, alt: 'Fashion Look 8', label: 'Fashion Look 8' },
  { src: img8, alt: 'Fashion Look 9', label: 'Fashion Look 9' },
  { src: img9, alt: 'Fashion Look 10', label: 'Fashion Look 10' }
];

function Fashion() {
  const [shuffledImages, setShuffledImages] = useState([]);

  // Shuffle images when the component mounts
  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
      }
      return shuffled;
    };

    setShuffledImages(shuffleArray(images));
  }, []);

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
          {shuffledImages.map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg transform transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
                <p className="text-white text-xl font-bold">{image.label}</p>
              </div>
            </div>
          ))}
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

export default Fashion;
