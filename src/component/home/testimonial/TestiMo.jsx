import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './timo.scss'
import 'swiper/css/pagination';
import img1 from "../../../assets/1.jpg"
import img2 from "../../../assets/2.jpg"
import img3 from "../../../assets/3.jpg"
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const data=[
    {
        img: img1,
        text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
        name: "Songheng"
    },
    {
        img: img2,
        text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
        name: "Norak"
    },
    {
        img: img3,
        text: "ipsum dolor sit amet consectetur adipisicing elit. Quod, id sequi aut qui est ab, corporis quis maiores reiciendis explicabo odio tenetur nulla sint vel.",
        name: "Narith"
    },
]
const TestiMo = () => {
    return (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <div className=''>
                <h2>TESTIMONAILS</h2>
                {
                    data.map(({name,img,text})=>(
                        <SwiperSlide>
                            <img src={img} alt="" />
                            <h5>{text}</h5>
                            <h3>{name}</h3>
                        </SwiperSlide>
                    ))
                }
            </div>
          </Swiper>
        </>
      );
}

export default TestiMo
