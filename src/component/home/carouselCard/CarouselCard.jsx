import './CarouselStyle.scss';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';

const CarouselCard = () => {
  return (
    <>
      <div className="Card">
        <h1>Trusted By Over 500 Clients Around The World</h1>
        <div>
            <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CarouselCard;
