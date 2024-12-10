import React from "react";

const About = () => {
  // Mission data
  const missionData = {
    title: "Our Mission",
    description:
      "At Ravi Studio, our mission is to capture the most precious moments of your wedding day with creativity and professionalism. Our experienced team works tirelessly to deliver not just photos and videos, but memories that will last a lifetime.",
  };

  // Why Choose Us Data
  const chooseUsData = [
    {
      title: "Experienced Team",
      description:
        "Our photographers and videographers are highly skilled and experienced in capturing stunning wedding moments.",
    },
    {
      title: "Creative Approach",
      description:
        "We use a creative approach to make sure that every shot is unique, authentic, and full of emotion.",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Our priority is always to satisfy our clients and give them beautiful memories to cherish forever.",
    },
  ];

  // Testimonials Data
  const testimonialsData = [
    {
      quote:
        "Ravi Studio made our wedding day unforgettable! Their professionalism and creativity were beyond expectations.",
      name: "Priya & Rahul",
    },
    {
      quote:
        "We couldn't be happier with the photos and videos! Ravi Studio truly captured every special moment.",
      name: "Aditi & Sameer",
    },
  ];

  return (
    <div className="bg-[#171717] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8">
          About Ravi Studio
        </h1>
        <p className="text-xl sm:text-2xl text-center mb-12">
          A premium wedding photography and videography service based in
          Lucknow, UP.
        </p>

        {/* Our Mission Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-10 sm:space-y-0 sm:space-x-8 mb-16">
          <div className="w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-3xl font-semibold mb-4">{missionData.title}</h2>
            <p className="text-lg sm:text-xl">{missionData.description}</p>
          </div>
          <div className="w-full sm:w-1/2">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipNJbkxv9Me4wQI0xdSBu9_skbWiWjnFHdFrpjpx=s3072-w3072-h1390-rw"
              alt="Wedding Photography"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-[#2A3335] py-12 mb-16 rounded-lg">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="flex flex-col sm:flex-row justify-around text-center">
            {chooseUsData.map((item, index) => (
              <div key={index} className="w-full sm:w-1/3 mb-8 sm:mb-0">
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-1/3 mb-8 sm:mb-0 text-center"
              >
                <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="bg-[#2A3335] py-12 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-white mb-8">
            Contact Us
          </h2>
          <div className="flex justify-center">
            <a
              href="mailto:ravistudio@example.com"
              className="bg-[#ff9f00] text-white py-3 px-8 rounded-lg text-xl hover:bg-[#e68900] transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
