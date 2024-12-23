import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Discription from "./Discription";
import Gallary from "../Gallary/Gallary";
import Ouerservice from "../OverServices/Overservice";
import ContactUs from "../ContactUs/ContactUs";
import Productpage from "../Product/Productpage";
import Birthday from "../HeaderPhotography/Birthday";

function Index() {
  return (
    <>
      <ImageSlider />
      <Discription />
      <Ouerservice />
      <Gallary />
      <Productpage />
      <ContactUs />
    </>
  );
}

export default Index;
