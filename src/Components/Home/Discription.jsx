import React, { useEffect, useState } from "react";

function Discription() {
  // State to track if the component is in view for animation trigger
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("description");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsInView(true); // Trigger animation when in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check if the component is in view immediately

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <div
      id="description"
      className={`px-8 py-5 bg-[#171717] shadow-2xl ${
        isInView ? "animate-fadeIn" : "opacity-0"
      } transition-opacity duration-1000 ease-in-out`}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="rounded-full overflow-hidden mb-4 sm:mb-0">
          <img
            src="https://img1.wsimg.com/isteam/ip/71fd2f1e-a752-4d83-babf-2ce9cc0bcd73/272165061_5143533332344239_8117322308020178681.jpg/:/cr=t:9.69%25,l:1.88%25,w:46.5%25,h:58.14%25/rs=w:1280,h:1280"
            alt="Wedding Photographer"
            className="bg-cover rounded-full object-cover mx-auto"
          />
        </div>
        <div className="px-8 py-10 bg-[#171717] shadow text-secondary w-full">
          <p className="text-center py-4 px-4 text-lg sm:text-xl text-white">
            Best Wedding Photographer
          </p>
          <h1 className="text-center py-4 px-4 text-3xl sm:text-4xl font-bold text-white">
            Ravi Studio
          </h1>
          <p className="text-center p-6 sm:px-20 text-lg sm:text-xl text-white">
            is a wedding photography and videography service based in Lucknow
            UP. To provide you with a treasure of tangible memories in the form
            of a wedding album and video, our creative and professional team of
            skilled photographers and videographers works really hard. You can
            avail our services from anywhere.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discription;
