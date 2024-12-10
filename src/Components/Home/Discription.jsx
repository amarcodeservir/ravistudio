import React, { useEffect, useState } from "react";
import raviing from "../../assets/ravi.png";
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
      <div className="flex ">
        <div className="rounded-full overflow-hidden mb-4 sm:mb-0">
          <img
            src={raviing}
            alt="Wedding Photographer"
            className="bg-cover rounded-full object-cover "
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
