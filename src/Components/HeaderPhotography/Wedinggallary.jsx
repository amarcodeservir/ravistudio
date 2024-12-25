import React, { useState, useEffect } from 'react';

// Import images for the wedding gallery (change these as needed)
import img0 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img1 from "../assets/HeaderPhotographyimg/girl2.jpg";
import img2 from "../assets/HeaderPhotographyimg/girl3.jpg";
import img3 from "../assets/HeaderPhotographyimg/girl4.jpg";
import img4 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img5 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img6 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img7 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img8 from "../assets/HeaderPhotographyimg/girl1.jpg";
import img9 from "../assets/HeaderPhotographyimg/girl1.jpg";

// Array of images for the wedding gallery
const images = [
  { src: img0, alt: 'Wedding Image 1', label: 'Bride Getting Ready' },
  { src: img1, alt: 'Wedding Image 2', label: 'First Dance' },
  { src: img2, alt: 'Wedding Image 3', label: 'Wedding Ceremony' },
  { src: img3, alt: 'Wedding Image 4', label: 'Bridal Bouquet' },
  { src: img4, alt: 'Wedding Image 5', label: 'Wedding Reception' },
  { src: img5, alt: 'Wedding Image 6', label: 'Groom and Bride Portrait' },
  { src: img6, alt: 'Wedding Image 7', label: 'Family Portrait' },
  { src: img7, alt: 'Wedding Image 8', label: 'Cake Cutting' },
  { src: img8, alt: 'Wedding Image 9', label: 'Bride in the Mirror' },
  { src: img9, alt: 'Wedding Image 10', label: 'Wedding Rings' }
];

function WeddingGallery() {
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
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Wedding Photography Gallery</h2>
        <p className="text-lg text-gray-600 mb-12">
          Relive the unforgettable moments of your special day. Our wedding photography captures every smile, every glance, and every emotion that makes your wedding day perfect.
        </p>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover shadow-lg transition-all transform group-hover:scale-105 group-hover:rotate-2"
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
            className="bg-primary text-white font-semibold py-2 px-6 rounded-full text-lg hover:bg-opacity-90 transition-all"
            onClick={() => alert("Explore our full wedding portfolio!")}
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
}

export default WeddingGallery;
