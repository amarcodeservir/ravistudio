import React from 'react';

const Productpage = () => {
  const products = [
    {
      id: 1,
      name: 'Cushion Printing',
      img: 'https://via.placeholder.com/150',
      saleTag: '20% Off',
      offer: 'Buy 2 Get 1 Free',
    },
    {
      id: 2,
      name: 'T-shirt Printing',
      img: 'https://via.placeholder.com/150',
      saleTag: '30% Off',
      offer: 'Free Shipping on Orders Over $50',
    },
    {
      id: 3,
      name: 'Cup Printing',
      img: 'https://via.placeholder.com/150',
      saleTag: '15% Off',
      offer: 'Get 1 Free With Every Purchase',
    },
    {
      id: 4,
      name: 'Mobile Cover Printing',
      img: 'https://via.placeholder.com/150',
      saleTag: '25% Off',
      offer: 'Customize and Save More',
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Our Printing Services</h1>
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
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
              Explore Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productpage;