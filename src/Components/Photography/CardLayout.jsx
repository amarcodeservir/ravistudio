import React from "react";
const CardLayout = ({ cards }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-20 px-8">
        <h1 className=" text-2xl md:text-5xl font-bold py-10 flex justify-center">
          Wedding Photography
        </h1>
        <p className="py-3 px-12 text-2xl">
          As you scroll through our portfolio, you'll see the unique way in
          which we tell each couple's story through our lens. We specialise in
          both posed and candid shots that capture the true essence of your
          love, and we take pride in our ability to create natural and authentic
          images that will transport you back to your special day every time you
          look at them. We understand that every wedding is different, which is
          why we work closely with each couple to create a personalised
          photography experience that meets their specific needs and desires.
          Whether you're looking for timeless traditional shots or something a
          little more contemporary, we'll work with you to create a package that
          suits your style and budget. Our goal is to provide you with a
          stress-free experience, so you can relax and enjoy your special day,
          knowing that we're capturing every precious moment.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative group rounded-lg overflow-hidden shadow-lg"
          >
            {/* Card Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-bold text-center px-4">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
