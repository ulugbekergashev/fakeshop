import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.scss";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link to={`/category/men's clothing`} className="men-slide">
                <h2>Men's Clothing</h2>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={`/category/jewelery`} className="jewellery-slide">
              <h2>Jewellery</h2>
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to={`/category/electronics`} className="electronics-slide">
            </Link>
        </SwiperSlide>        
        <SwiperSlide>
            <Link to={`/category/women's clothing`} className="women-slide">
              <h2>Women's Clothing</h2>
            </Link>
        </SwiperSlide>        
        
      </Swiper>
    </div>
  );
}
