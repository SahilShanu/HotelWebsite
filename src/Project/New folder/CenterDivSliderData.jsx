import React from 'react';
import SimpleSlider from './SimpleSlider';

function CenterDivSliderData() {
    let img1 = "./Slide1.jpeg";
    let img2 = "./Slide2.jpeg";
    let img3 = "./Slide3.webp";

    let imgData = {img1 , img2 , img3}
  return (
    <>
      <SimpleSlider data = {imgData}/>
    </>
  );
}

export default CenterDivSliderData;
