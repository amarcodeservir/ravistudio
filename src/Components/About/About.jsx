import React from "react";
import img from "../../assets/slider/1.png";
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
        "At Ravi Studio, our team consists of seasoned professionals who are passionate about capturing the magic of weddings. With years of experience and a keen eye for detail, our photographers and videographers bring creativity, technical skill, and artistry to every moment they capture. From candid emotions to intricate details, our experts ensure that each shot is a timeless masterpiece.We believe that every wedding is unique, and our team works closely with you to understand your vision, creating personalized experiences that go beyond your expectations. Whether it's traditional ceremonies or modern celebrations, we know how to frame your story in the most beautiful way possible.",
      src: img,
    },
    {
      title: "Creative Approach",
      description:
        "At Ravi Studio, creativity lies at the heart of everything we do. We don’t just take pictures; we craft stories. Our approach combines artistic vision with technical excellence to ensure that every shot is unique, authentic, and deeply emotional.From finding the perfect lighting to capturing the candid smiles and heartfelt moments, our team works tirelessly to deliver images and videos that resonate with the essence of your celebration. We experiment with angles, compositions, and techniques to add a cinematic touch, turning ordinary moments into extraordinary memories.Every wedding is a one-of-a-kind story, and our creative approach ensures that yours is told in the most breathtaking and unforgettable way.",
      src: img,
    },
    {
      title: "Customer Satisfaction",
      description:
        "At Ravi Studio, your happiness is our ultimate goal. We go above and beyond to ensure that your experience with us is seamless, enjoyable, and truly memorable. From the initial consultation to the final delivery of your wedding album and videos, every step is tailored to meet your unique needs and preferences.We pride ourselves on building strong relationships with our clients, understanding their vision, and bringing it to life with creativity and precision. Your trust motivates us to deliver nothing less than perfection, ensuring that every captured moment evokes joy and nostalgia for years to come.With countless satisfied couples and heartfelt testimonials, we are dedicated to preserving your precious memories in the most beautiful way possible. Your story deserves nothing less than excellence.",
      src: img,
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
    <>
      <div className="bg-gradient-to-b from-[#121212] to-theam text-white py-16 px-20">
        <div className=" mx-auto px-8">
          {/* Heading */}
          <h1 className="text-5xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#ff9f00] to-[#ff5700]">
            About Ravi Studio
          </h1>
          <p className="text-xl sm:text-2xl text-center mb-12 opacity-80">
            A premium wedding photography and videography service based in
            Lucknow, UP.
          </p>

          {/* Our Mission Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-10 sm:space-y-0 sm:space-x-8 mb-16">
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-4">{missionData.title}</h2>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-300">
                {missionData.description}
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNJbkxv9Me4wQI0xdSBu9_skbWiWjnFHdFrpjpx=s3072-w3072-h1390-rw"
                alt="Wedding Photography"
                className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gradient-to-r w-full from-[#2a3335] to-[#1f2528] py-12 mb-16 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center mb-8">
              Why Choose Us?
            </h2>
            <div className="flex flex-col  justify-center items-center space-y-8 sm:space-y-10 sm:space-x-8">
              {chooseUsData.map((item, index) => (
                <div
                  key={index}
                  className="w-full  p-6 bg-[#252525] rounded-lg shadow-lg text-center transform hover:scale-95 transition duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="h-64 w-44">{item.src}</p>
                  <p className="text-xl text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-8">
              What Our Clients Say
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-8">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full sm:w-1/3 p-6 bg-[#252525] rounded-lg shadow-lg text-center transform hover:scale-105 transition duration-300"
                >
                  <p className="italic text-lg mb-4 text-gray-300">
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="bg-gradient-to-r from-[#ff9f00] to-[#ff5700] py-12 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-center text-white mb-8">
              Contact Us
            </h2>
            <div className="flex justify-center">
              <a
                href="mailto:ravistudio@example.com"
                className="bg-white text-[#ff5700] font-semibold py-3 px-8 rounded-lg text-xl hover:bg-gray-200 transition duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
