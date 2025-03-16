import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };



  return (
    <div>
      <h1>React Slick Carousel</h1>
      <Slider {...settings}>
        <div><h3>Slide 1</h3></div>
        <div><h3>Slide 2</h3></div>
        <div><h3>Slide 3</h3></div>
      </Slider>
    </div>
  )
}

export default Home
