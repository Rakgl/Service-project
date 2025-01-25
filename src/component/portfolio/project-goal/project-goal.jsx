import React, { useEffect } from 'react';
import './project-goal.scss';
import { faPlay, faCheck, faEye  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Brand from '../../../assets/portfolio/brand.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Swiper1 from '../../../assets/portfolio/swiper-1.jpg';
import Swiper2 from '../../../assets/portfolio/swiper-2.jpg';
import Swiper3 from '../../../assets/portfolio/swiper-3.jpg';
import Swiper4 from '../../../assets/portfolio/swiper-4.jpg';
import Swiper5 from '../../../assets/portfolio/swiper-5.jpg';
import Swiper6 from '../../../assets/portfolio/swiper-6.jpg';

const slidesData = [
  { img: Swiper1, label: 'Hosting' },
  { img: Swiper2, label: 'SEO' },
  { img: Swiper3, label: 'Other Category' },
  { img: Swiper4, label: 'Mobile Apps' },
  { img: Swiper5, label: 'Cloud' },
  { img: Swiper6, label: 'Data Analysis' },
];

const ProjectGoal = () => {

    useEffect(() => {

    }, []);
    
    return (
      <>
        <div className='project-goal'>
          <div className="top">
            <h1 className='mb-3'><b>Project Goal</b></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos. deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos.</p>
            <div className='Img-top'>
              <button type="button" className='round-button' data-bs-toggle="modal" data-bs-target="#youtubeModal">
                <span><FontAwesomeIcon icon={faPlay} /></span>
              </button>

              <div className="modal fade" id="youtubeModal" tabIndex="-1" aria-labelledby="youtubeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="ratio ratio-16x9">
                              <iframe width="560" height="315" src="https://www.youtube.com/embed/qP23O70ve7k?si=HyPjkYQ8NNRFlHdF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-overview">
            <h1 className='mb-3 mt-5'><b>Project Goal</b></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos. deleniti repudiandae aliquam exercitationem veniam ipsam</p>
          </div>
          <div className="project-step row">
            <div className="left col-lg-6 col-md-12">
              <div>
                <h1 className='mb-3'><b>Project Steps</b></h1>
                <ul type="none">
                  <li><FontAwesomeIcon icon={faCheck} className='heh'/>ipsum dolor sit amet consectetur adipisicing</li>
                  <li><FontAwesomeIcon icon={faCheck} className='heh'/>quas, ea fuga vel quis officiis laborum quaerat</li>
                  <li><FontAwesomeIcon icon={faCheck} className='heh'/>alias fugiat aliquam soluta beatae numquam</li>
                  <li><FontAwesomeIcon icon={faCheck} className='heh'/>nobis maiores inventore harum pariatur possimus</li>
                </ul>
              </div>
            </div>
            <div className="right col-lg-6 col-md-12">
              <img src={Brand} alt="" />
            </div>
          </div>
          <div className="project-result">
            <h1 className='mb-3'><b>Project Results</b></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam deleniti repudiandae aliqua</p>
            <div>
              <Swiper
                className='hold-swiper'
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                centeredSlides={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 8000 }}
                loop={true}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                  },
                  1025: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                  },
                }}
              >
                {slidesData.map((slide, index) => (
                  <SwiperSlide key={index} className="pic">
                    <img src={slide.img} alt={slide.label} />
                    <div className="bottom">{slide.label}</div>
                    <div className="bottom-left">
                      <FontAwesomeIcon icon={faEye} className="heh" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </>
    );
  };

export default ProjectGoal;