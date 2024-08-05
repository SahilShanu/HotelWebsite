import React from 'react';
import SimpleSlider from './SimpleSlider';

function AboutSilderData() {
    let img1="./gallery1.webp"; 
    let img2="./gallery4.webp";
    let img3="./galimg16.webp";

    let imgData={img1, img2,img3}
  return (
    <>
      <SimpleSlider data= {imgData}/>
      

    </>
  );
}

export default AboutSilderData;
