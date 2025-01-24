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
        <div className='swipies'>
          <div className='swip-black px-10'>
            <div className="textPo py-4">
              <h6 className='text-primary font-weight'>TESTIMONAILS</h6>
              <h1>Customers Testimonails</h1>
            </div>
            <Swiper
              spaceBetween={30}
              loop={true}
              centeredSlides={true}
              slidesPerView={1}
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
              <div>
                  {
                      data.map(({name,img,text})=>(
                        <SwiperSlide className='myswip'>
                            <img src={img} alt="" className='widthPx-60 mx-auto al-center'/>
                            <h5 className='text-center mx-auto'>{text}</h5>
                            <h3 className='text-center'>{name}</h3>
                        </SwiperSlide>
                      ))
                  }
              </div>
            </Swiper>
          </div>
        </div>
      );
}

export default TestiMo
