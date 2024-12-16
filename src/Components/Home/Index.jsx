import React from "react";
import ImageSlider from "../ImageSlider/ImageSlider";
import Discription from "./Discription";
import Gallary from "../Gallary/Gallary";
import Ouerservice from "../OverServices/Overservice";
import ContactUs from "../ContactUs/ContactUs";
import Productpage from "../Product/Productpage";
import SearchBar from "./SearchBar";

function Index() {
  return (
    <>
      <ImageSlider />
      {/* <SearchBar /> */}
      <Discription />
      <Ouerservice />
      <Gallary />
      <Productpage />
      <ContactUs />
    </>
  );
}

export default Index;
