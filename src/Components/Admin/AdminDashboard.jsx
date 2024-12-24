import React, { useState } from "react";

const AdminDashboard = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productPrice: "",
    productImage: "",
    blogTitle: "",
    blogContent: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Admin Dashboard</h1>

        {/* Add Product Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Add Product</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="productName" className="block text-gray-700 font-semibold mb-2">
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={formData.productName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label htmlFor="productDescription" className="block text-gray-700 font-semibold mb-2">
                Product Description
              </label>
              <textarea
                id="productDescription"
                value={formData.productDescription}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter product description"
                rows="4"
              ></textarea>
            </div>
            <div>
              <label htmlFor="productPrice" className="block text-gray-700 font-semibold mb-2">
                Product Price
              </label>
              <input
                id="productPrice"
                type="number"
                value={formData.productPrice}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter product price"
              />
            </div>
            <div>
              <label htmlFor="productImage" className="block text-gray-700 font-semibold mb-2">
                Product Image URL
              </label>
              <input
                id="productImage"
                type="text"
                value={formData.productImage}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter image URL"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Add Product
            </button>
          </form>
        </div>

        {/* Photography Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Photography</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="photo" className="block text-gray-700 font-semibold mb-2">
                Photo URL
              </label>
              <input
                id="photo"
                type="text"
                value={formData.photo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter photo URL"
              />
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
            >
              Upload Photo
            </button>
          </form>
        </div>

        {/* Blog Section */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Blog</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="blogTitle" className="block text-gray-700 font-semibold mb-2">
                Blog Title
              </label>
              <input
                id="blogTitle"
                type="text"
                value={formData.blogTitle}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter blog title"
              />
            </div>
            <div>
              <label htmlFor="blogContent" className="block text-gray-700 font-semibold mb-2">
                Blog Content
              </label>
              <textarea
                id="blogContent"
                value={formData.blogContent}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter blog content"
                rows="6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              Publish Blog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
