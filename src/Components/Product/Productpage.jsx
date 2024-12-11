import React from 'react';

// Import images directly
import cushionImg from '../../assets/Cushionimg.jpg';
import tshirtImg from '../../assets/T-shirtimg.png';
import cupImg from '../../assets/cupimg.png';
import mobileImg from '../../assets/Mobileimg.jpeg';

const Productpage = () => {
  const products = [
    {
      id: 1,
      name: 'Cushion Printing',
      img: cushionImg, // Use the imported image
      saleTag: '20% Off',
      offer: 'Buy 2 Get 1 Free',
    },
    {
      id: 2,
      name: 'T-shirt Printing',
      img: tshirtImg, // Use the imported image
      saleTag: '30% Off',
      offer: 'Free Shipping on Orders Over $50',
    },
    {
      id: 3,
      name: 'Cup Printing',
      img: cupImg, // Use the imported image
      saleTag: '15% Off',
      offer: 'Get 1 Free With Every Purchase',
    },
    {
      id: 4,
      name: 'Mobile Cover Printing',
      img: mobileImg, // Use the imported image
      saleTag: '25% Off',
      offer: 'Customize and Save More',
    },
  ];

  return (
    <div className="p-6 bg-theam min-h-screen">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center py-4">Our Product Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 relative hover:shadow-lg transition-shadow"
          >
            <div className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
              {product.saleTag}
            </div>
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {product.name}
            </h2>
            <p className="text-gray-600 mt-2">{product.offer}</p>
            <button className="bg-primary text-secondary px-6 py-2 mt-4 transition duration-300 rounded-full self-start">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productpage;
