import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



function navbar() {
  return (
   <>
   <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='./logo192.png'/> </SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
        <SwiperSlide><img src='./logo192.png'/></SwiperSlide>
      </Swiper></>
  )
}

export default navbar
