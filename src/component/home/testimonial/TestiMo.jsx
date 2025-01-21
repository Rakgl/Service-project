// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './timo.scss'
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
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
            className="myySwiper"
          >
            <div className="myswip">
                <h2>TESTIMONAILS</h2>
                {
                    data.map(({name,img,text})=>(
                        <SwiperSlide className=''>
                            <img src={img} alt="" className='widthPx-60 mx-auto'/>
                            <h5 className='text-center widthPC-90 mx-auto'>{text}</h5>
                            <h3 className='text-primary text-center'>{name}</h3>
                        </SwiperSlide>
                    ))
                }
            </div>
          </Swiper>
        </>
      );
}

export default TestiMo
