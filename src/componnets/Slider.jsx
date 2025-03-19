import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Slider.css";

function SlideComp() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide change every 2 seconds
    pauseOnHover: false, // Ensure it doesn't stop when hovering
  };



  return (
    <div>
     
      <Slider {...settings}>
        <div className='bg'><h3>Slide 1</h3></div>
        <div className='bg'><h3>Slide 2</h3></div>
        <div className='bg'><h3>Slide 3</h3></div>
      </Slider>
    </div>
  )
}

export default SlideComp
