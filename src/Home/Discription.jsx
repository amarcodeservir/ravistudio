import React from "react";

function Discription() {
  return (
    <div className="px-8 py-5 bg-[#171717] shadow">
      <div className="flex">
        <div className="rounded-full">
          <img
            src="https://img1.wsimg.com/isteam/ip/71fd2f1e-a752-4d83-babf-2ce9cc0bcd73/272165061_5143533332344239_8117322308020178681.jpg/:/cr=t:9.69%25,l:1.88%25,w:46.5%25,h:58.14%25/rs=w:1280,h:1280"
            alt=""
            className="bg-cover rounded-full"
          />
        </div>
        <div className="px-8 py-10 bg-[#171717] shadow text-texts">
          <p className=" flex justify-center">Best Wedding Photographer</p>
          <h1>Ravi Studio</h1>
          <p>
            is a wedding photography and videography service based in Lucknow
            UP. To provide you with a treasure of tangible memories in the form
            of a wedding album and video, our creative and professional team of
            skilled photographers and videographers works really hard. You can
            avail our services from anywher.
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill=" #2A3335"
          fill-opacity="1"
          d="M0,288L80,272C160,256,320,224,480,213.3C640,203,800,213,960,186.7C1120,160,1280,96,1360,64L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Discription;
