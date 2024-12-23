import React from "react";
import { motion } from "framer-motion";
import image1 from "../../Components/assets/gallary/gallary0.jpg";
import image2 from "../../Components/assets/gallary/gallary.jpg";
import image3 from "../../Components/assets/gallary/gallary1.png";
import { Link } from "react-router-dom";

const Gallary = () => {
  const galleryItems = [
    {
      title:
        "Capturing Romance: Post-Wedding Photoshoot at Kaldan Samudhra Palace, Chennai",
      image: image1,
    },
    {
      title:
        "A Vibrant Celebration of Love: Malavika and Sanjay's Colorful Coimbatore Wedding",
      image: image2,
    },
    {
      title: "A Love-Filled Intimate Wedding at Tamarind Tree Bangalore",
      image: image3,
    },
  ];

  return (
    <div className="text-gray-50 bg-gray-800">
      {/* Hero Section */}
      <section className="text-center py-10 px-6">
        <h1 className="text-4xl font-bold mb-4">
          Your Love, Our Passion, Beautiful Photographs
        </h1>
        <p className="text-lg">
          Welcome to Mystic Studios, where we capture the beauty, emotion, and
          magic of your special day. Allow us to take you on a visual journey
          through the most important day of your life.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index} // Added a key prop to avoid React warnings
            className="group rounded overflow-hidden shadow-lg text-white wave-effect"
            whileHover={{ scale: 1.05, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-72 md:h-80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <div className="absolute bottom-4 left-4">
                  <h2 className="font-semibold text-lg text-white">
                    {item.title}
                  </h2>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      <div className="flex justify-center ">
        <Link
          to=""
          className="text-white hover:text-black bg-primary hover:bg-slate-50 font-serif py-1 flex justify-center rounded-xl border-2 border-red-700 w-32"
        >
          View more
        </Link>
      </div>
    </div>
  );
};

export default Gallary;
