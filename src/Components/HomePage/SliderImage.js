import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import SliderImage12 from "./SlidingImages";
import "../../Styles/Slider.css"

export default function SliderImage() {
    return (
        <div>
        <AliceCarousel infinite autoPlay autoPlayInterval="2000" responsive >
        {SliderImage12.map((image) => 
                  <img src={image.title} className="sliderimg"/>      
        )}
  </AliceCarousel>
  </div>
    )
}
