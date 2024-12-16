import React from "react";
import img1 from "../../Components/assets/contact/sukh.png";
import img2 from "../../Components/assets/contact/uday.png";
// import img3 from "../../Components/assets/contact/Geetapuri.png";
import img4 from "../../Components/assets/contact/yadav.png";

const ContactUs = () => {
  // Example data for locations
  const locations = [
    {
      name: "Sukh Complex",
      address: "Munshi Puliya, Indira Nager, Lucknow-16",
      contact: "+91 9389998878",
      image: img1, // Corrected: directly use the imported image
    },
    {
      name: "Uday Tower",
      address: "Kathauta Chauraha, Gomti Nager, Lucknow-10",
      contact: "+91 9450091778",
      image: img2, // Corrected: directly use the imported image
    },
    {
      name: "Geetapuri Chauraha",
      address: "Opp. Bank of India, Gomti Nager Vistar, Lucknow-10",
      contact: "+91 8858443081",
      image: img2, // Corrected: directly use the imported image
    },
    {
      name: "Yadav Market",
      address: "Opp. Citykart, Deva Road, Matiyari Chauraha, Lucknow",
      contact: "+91 9984968898",
      image: img4, // Corrected: directly use the imported image
    },
  ];

  return (
    <div className="bg-theam text-white py-2 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary  text-center mb-8">
          Our Locations
        </h2>

        {/* Grid Layout for Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image Background */}
              <img
                src={location.image} // Correct usage of the imported image
                alt={location.name}
                className="w-full h-56 object-cover"
              />
              <div className="bg-black bg-opacity-60 p-6 absolute inset-0 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{location.name}</h3>
                  <p className="mt-2 text-sm">{location.address}</p>
                  <p className="mt-2 text-sm">Contact: {location.contact}</p>
                </div>
                <button className="bg-primary text-secondary px-6 py-2 mt-4 transition duration-300 rounded-full self-start">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
