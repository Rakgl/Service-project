import React, { useRef, useEffect } from 'react';
import './why-choose-us.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle  } from '@fortawesome/free-brands-svg-icons';
import WhyChoose from '../../../assets/home/why-choose-us.png'
import AOS from "aos";
import Button from '../../button/Button';

const WhyChooseUs = () => {
  const toAboutUs = () => {
    window.location.href = '/about';
  };

    const imageHolderRef = useRef(null);
    let currentRotateX = 0;
    let currentRotateY = 0;
    const fields = [
        {
          id: 1,
          num: "01.",
          title: "Latest Technologies",
          description: "We stay ahead of the curve by leveraging the latest technologies to deliver innovative solutions that empower your business."
        },
        {
          id: 2,
          num: "02.",
          title: "Unique Solutions",
          description: "We understand that every business is different, which is why we offer tailored solutions designed to meet your unique challenges."
        },
        {
          id: 3,
          num: "03.",
          title: "Powerful Strategies",
          description: "Success starts with a strong strategy. Our team develops powerful, data-driven strategies that deliver measurable results."
        },
      ];
    
    useEffect(() => {
        AOS.init({
            once: true,
          });
        
        const imageHolder = imageHolderRef.current;
        let isAnimating = true;
    
        const handleMouseMove = (e) => {
        if (!imageHolder) return;
    
        const { width, height, left, top } = imageHolder.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
    
        currentRotateX = (y / height) * 60;
        currentRotateY = (-x / width) * 60;
    
        imageHolder.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;
    
        const isCursorRight = x > 0;
        const isCursorDown = y > 0;
        };
    
        const handleMouseLeave = () => {
        currentRotateX = 0;
        currentRotateY = 0;
    
        imageHolder.style.transform = `rotateX(0deg) rotateY(0deg)`;
        };
    
        const animate = () => {
        if (!isAnimating) return;
        requestAnimationFrame(animate);
        };
    
        if (imageHolder) {
        imageHolder.addEventListener("mousemove", handleMouseMove);
        imageHolder.addEventListener("mouseleave", handleMouseLeave);
        }
    
        animate();
    
        return () => {
        isAnimating = false;
        if (imageHolder) {
            imageHolder.removeEventListener("mousemove", handleMouseMove);
            imageHolder.removeEventListener("mouseleave", handleMouseLeave);
        }
        };
    }, []);
    
    return (
      <>
        <div className='row main-container-choose px-10 '  data-aos="fade-up" data-aos-duration="1000">
          <div className="col-xxl-6 col-xl-6 col-lg-6 half-container">
              <div className='image-holder mt-10' ref={imageHolderRef}>
                  <img src={WhyChoose} alt="about-us" />
              </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 half-container" data-aos="fade-up" data-aos-duration="1600" data-aos-offset="200">
              <div className='mt-4'>
                  <h6><FontAwesomeIcon icon={faGgCircle} />&nbsp;&nbsp;Why Choose Us&nbsp;&nbsp;<FontAwesomeIcon icon={faGgCircle} /></h6>
              </div>
              <div>
                  <h1 className='font-lg'>Why Our Customers Choose <span style={{ color: "#09AFF4" }}>Working</span> With Us </h1>
              </div>
              <div>
                  <p className='font-sizePx18 mt-4'>Our customers choose us because we deliver more than just services – we provide solutions that drive results.</p>
              </div>
              <div className='row contain-field'>
                  {fields.map((field) => (
                      <div className="col-12 field" key={field.id}>
                          <div className="row">
                              <div className="col-3 box">
                                  <strong>{field.num}</strong>
                              </div>
                              <div className="col-9">
                              <h4>{field.title}</h4>
                              <p className="mt-3">{field.description}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
              <Button onClick={toAboutUs}>Get In Touch</Button>
          </div>
        </div>
      </>
    );
  };

export default WhyChooseUs; 