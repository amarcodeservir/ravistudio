import React, { useState, useEffect } from 'react';

import img0 from "../assets/HeaderPhotographyimg/weddingimg1.jpg";
import img1 from "../assets/HeaderPhotographyimg/weddingimg2.jpg";
import img2 from "../assets/HeaderPhotographyimg/weddingimg3.jpg";
import img3 from "../assets/HeaderPhotographyimg/pre1.jpg";
import img4 from "../assets/HeaderPhotographyimg/pre2.jpg";
import img5 from "../assets/HeaderPhotographyimg/pre3.jpg";
import img6 from "../assets/HeaderPhotographyimg/post2.jpg";
import img7 from "../assets/HeaderPhotographyimg/post3.jpeg";
import img8 from "../assets/HeaderPhotographyimg/birthday1.jpg";
import img9 from "../assets/HeaderPhotographyimg/k3.jpeg";
import icon from "../assets/HeaderPhotographyimg/eye.png";

const images = [
  { src: img0, alt: 'Wedding Image 1', icon: icon },
  { src: img1, alt: 'Wedding Image 2', icon: icon },
  { src: img2, alt: 'Wedding Image 3', icon: icon },
  { src: img3, alt: 'Wedding Image 4', icon: icon },
  { src: img4, alt: 'Wedding Image 5', icon: icon },
  { src: img5, alt: 'Wedding Image 6', icon: icon },
  { src: img6, alt: 'Wedding Image 7', icon: icon },
  { src: img7, alt: 'Wedding Image 8', icon: icon },
  { src: img8, alt: 'Wedding Image 9', icon: icon },
  { src: img9, alt: 'Wedding Image 10', icon: icon },
];

function WeddingGallery() {
  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const shuffleArray = (array) => {
      let shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledImages(shuffleArray(images));
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-gray-50 py-36">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Wedding Photography Gallery</h2>
        <p className="text-lg text-gray-600 mb-12">
          Relive the unforgettable moments of your special day. Our wedding photography captures every smile, every glance, and every emotion that makes your wedding day perfect.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg" onClick={() => handleImageClick(image)}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover shadow-lg transition-all transform group-hover:scale-105 group-hover:rotate-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 transition-all group-hover:opacity-100">
                <img src={image.icon} alt="Overlay Icon" className="w-16 h-16" />
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full rounded-lg" />
          </div>
        )}

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
