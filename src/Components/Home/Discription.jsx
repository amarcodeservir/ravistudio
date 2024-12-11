import React, { useEffect, useState } from "react";
import raviing from "../../assets/ravi.png";
function Discription() {
  // State to track if the component is in view for animation trigger
  const [isInView, setIsInView] = useState(false);

  return (
    <div className="flex flex-col md:flex-row bg-theam md:px-6 py-5">
      <div className="rounded-full justify-center flex py-5  ">
        <img
          src={raviing}
          alt="Wedding Photographer"
          className="bg-cover h-64 w-64 md:h-[650px] md:w-[2000px] object-cover rounded-full "
        />
      </div>
      <div className="md:px-8 px-2 md:py-10   shadow text-secondary w- self-center">
        <p className="text-center md:py-4 text-lg sm:text-xl text-white">
          Best Wedding Photographer
        </p>
        <h1 className="text-center py-4 text-3xl sm:text-4xl font-bold text-white">
          Ravi Studio
        </h1>
        <p className="text-center p-6 sm:px-20 text-lg md:text-xl leading-10 text-white">
          is a wedding photography and videography service based in Lucknow UP.
          To provide you with a treasure of tangible memories in the form of a
          wedding album and video, our creative and professional team of skilled
          photographers and videographers works really hard. You can avail our
          services from anywhere.
        </p>
      </div>
    </div>
  );
}

export default Discription;
