import React, { useState, useEffect } from "react";

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipNuCxJpf3XE4Dj2wqMPunySfZHMoMENSMczunxG=s3072-w3072-h1390-rw",
  "https://5.imimg.com/data5/SELLER/Default/2024/7/434294286/MJ/RQ/QY/54327629/wedding-photography.jpg",
  "https://ryasktourism.com/wp-content/uploads/2024/02/weading-photoshoot-in-kolkata.webp",
  "https://content.jdmagicbox.com/comp/lucknow/n5/0522px522.x522.191217214046.t2n5/catalogue/fotoshoot-lucknow-lucknow-photo-studios-aic8b0128m.jpg",
  "https://media.weddingz.in/images/a90f38730aa60834c1b8f8e2b89ba80b/wedding-poses-and-pre-wedding-photography-poses-Indian-couple14.jpg",
  "https://kamatharjun.b-cdn.net/wp-content/uploads/2022/01/Indian-Wedding-Photography-LR-Arjun-Kamath.jpeg",
  "https://magica.in/media/posts/135/gallery//2.webp",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Image Slider Container */}
      <div className="relative w-screen h-[100vh]">
        <div className="w-full h-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-1000"
          />
        </div>
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        >
          &#8249;
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        >
          &#8250;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="mt-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full border-2 ${
              currentIndex === index
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-400 border-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
