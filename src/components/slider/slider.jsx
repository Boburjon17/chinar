import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import "./slider.scss"
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import sliderImg1 from "../../assets/images/slider1.png"
import sliderImg2 from "../../assets/images/slider2.png"
import sliderImg3 from "../../assets/images/slider3.png"
import sliderImg4 from "../../assets/images/slider4.png"


const  Slider = () => {
  return (
    
       
    < div className='slider-container'>
      <Swiper
      slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={sliderImg1} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={sliderImg2} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={sliderImg3} alt="" /></SwiperSlide>
        <SwiperSlide> <img src={sliderImg4} alt="" /></SwiperSlide>
        
      </Swiper>
    </ div>
 



    


  )
}

export default Slider