import React, { useState, useEffect } from "react";
import image from "../../assets/slider/1.png";
import image1 from "../../assets/slider/2.png";
import image2 from "../../assets/slider/3.jpg";
import image3 from "../../assets/slider/4.jpg";
import image4 from "../../assets/slider/5.jpg";
import image5 from "../../assets/slider/6.png";

const images = [image, image1, image2, image3, image4, image5];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, []);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 1000); // Match animation duration
  };

  const handlePrevious = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsAnimating(false);
    }, 1000); // Match animation duration
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full relative overflow-hidden">
      {/* Image Slider Container */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[100vh] perspective">
        <div className="relative w-full h-full">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-all duration-[1000ms] ease-in-out transform ${
                index === currentIndex
                  ? "opacity-100 rotate-0 scale-100 z-10"
                  : "opacity-0 -rotate-12 scale-90 z-0"
              }`}
              style={{
                transformOrigin: "center center",
              }}
            />
          ))}
        </div>
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          aria-label="Previous Slide"
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        >
          &#8249;
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition"
        >
          &#8250;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 justify-center flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-4 h-1 rounded-full border-2 transition-all duration-300 ${
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
