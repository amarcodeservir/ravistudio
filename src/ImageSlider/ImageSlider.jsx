import React, { useState } from "react";

const images = [
  "https://content.jdmagicbox.com/comp/lucknow/n5/0522px522.x522.191217214046.t2n5/catalogue/fotoshoot-lucknow-lucknow-photo-studios-aic8b0128m.jpg",

  "https://5.imimg.com/data5/SELLER/Default/2024/7/434294286/MJ/RQ/QY/54327629/wedding-photography.jpg",
  "https://ryasktourism.com/wp-content/uploads/2024/02/weading-photoshoot-in-kolkata.webp",
  "https://content.jdmagicbox.com/comp/lucknow/n5/0522px522.x522.191217214046.t2n5/catalogue/fotoshoot-lucknow-lucknow-photo-studios-aic8b0128m.jpg",
  "https://media.weddingz.in/images/a90f38730aa60834c1b8f8e2b89ba80b/wedding-poses-and-pre-wedding-photography-poses-Indian-couple14.jpg",
  "https://kamatharjun.b-cdn.net/wp-content/uploads/2022/01/Indian-Wedding-Photography-LR-Arjun-Kamath.jpeg",
  // "https://i.pinimg.com/originals/7e/45/0f/7e450f80598feb3e152744b1cc3dd851.jpg",
  "https://magica.in/media/posts/135/gallery//2.webp",
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      <div className="relative w-screen">
        <div className=" rounded-lg shadow-lg w-full">
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className=" w-full  h-fit object-cover bg-cover transition-all duration-500"
          />
        </div>
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8250;
        </button>
      </div>
      {/* <div className="mt-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}

export default ImageSlider;
