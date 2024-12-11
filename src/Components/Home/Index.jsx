import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Discription from "./Discription";
import Gallary from "../Gallary/Gallary";
import Ouerservice from "../OverServices/Overservice";
import ContactUs from "../ContactUs/ContactUs";

function Index() {
  return (
    <>
      <ImageSlider />
      <Discription />
      <Ouerservice />
      <Gallary />
      <ContactUs />
    </>
  );
}

export default Index;
