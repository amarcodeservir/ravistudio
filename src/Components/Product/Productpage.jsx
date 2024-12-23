import React from "react";

// Import images directly
import cushionImg from "../../Components/assets/product/2.jpg";
import tshirtImg from "../../Components/assets/product/2.png";
import cupImg from "../../Components/assets/product/3.webp";
import mobileImg from "../../Components/assets/product/5.jpg";
import mobileImg1 from "../../Components/assets/product/1.jpeg";
import mobileImg2 from "../../Components/assets/product/6.jpg";
import mobileImg3 from "../../Components/assets/product/7.png";
import mobileImg4 from "../../Components/assets/product/4.jpg";
const Productpage = () => {
  const products = [
    {
      id: 1,
      name: "Cushion Printing",
      img: cushionImg, // Use the imported image
    },
    {
      id: 2,
      name: "T-shirt Printing",
      img: tshirtImg, // Use the imported image
    },
    {
      id: 3,
      name: "Cup Printing",
      img: cupImg, // Use the imported image
    },
    {
      id: 4,
      name: "Mobile Cover Printing",
      img: mobileImg, // Use the imported image
    },
    {
      id: 5,
      name: "Mobile Cover Printing",
      img: mobileImg1, // Use the imported image
    },
    {
      id: 6,
      name: "Mobile Cover Printing",
      img: mobileImg2, // Use the imported image
    },
    {
      id: 7,
      name: "Mobile Cover Printing",
      img: mobileImg4, // Use the imported image
    },
    {
      id: 8,
      name: "Mobile Cover Printing",
      img: mobileImg3, // Use the imported image
    },
  ];

  return (
    <div className="p-6 bg-theam min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center py-4">
        Our Product Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-16">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-2 left-2 text-white text-sm font-bold px-2 py-1 rounded"></div>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-t-md"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800 text-center">
              {product.name}
            </h2>
            <button className="bg-primary text-secondary px-6 py-2 mt-4 transition duration-300 rounded-full w-full md:w-auto mx-auto block text-center">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productpage;
