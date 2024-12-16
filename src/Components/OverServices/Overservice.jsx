import React from "react";
// import weddingImage from "../../Components/assets/ourService/ring.jpg";
import preWeddingImage from "../../Components/assets/ourService/1.jpg";
import postWeddingImage from "../../Components/assets/ourService/3.jpg"; // Example image

const Overservice = () => {
  // Data for services
  const services = [
    {
      title: "Wedding Photography",
      subtitle: "Bring Your Creativity to Life",
      description:
        "A wedding is typically one of the most memorable days in a lifetime, one that people remember for years to come through wedding photography.",
      image: preWeddingImage,
      buttonLabel: "Read More",
    },
    {
      title: "Pre Wedding Photography",
      subtitle: "Explore. Create. Inspire.",
      description:
        "Pre-wedding photography, often referred to as an engagement shoot, usually takes place three to six months prior to the wedding day.",
      image: preWeddingImage,
      buttonLabel: "Read More",
    },
    {
      title: "Post Wedding Photography",
      subtitle: "Capture Memories Forever",
      description:
        "Post-wedding photography is a creative opportunity to capture moments of joy and love after your big day.",
      image: postWeddingImage,
      buttonLabel: "Read More",
    },
  ];

  return (
    <div className="bg-theam text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading "Our Expertise" */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Our Expertise
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary">
            We specialize in capturing moments that last a lifetime, ensuring
            your special day is beautifully remembered.
          </p>
        </div>

        {/* Service Cards */}
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden w-full h-full flex flex-col md:flex-row group mb-8"
            style={{
              backgroundImage: `url(${service.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay with wave transition effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-black opacity-0 group-hover:opacity-100 transition-all duration-2000 ease-out wave-effect"></div>
            <div className="relative z-10 p-8 flex flex-col justify-between w-full h-96">
              <div>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-primary text-lg font-semibold mt-2">
                  {service.subtitle}
                </p>
                <p className="text-sm mt-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <button className="bg-primary text-secondary px-6 py-2 transition duration-300 rounded-full self-start">
                {service.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overservice;
