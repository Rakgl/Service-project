import React, { useRef, useEffect } from 'react';
import './about-us.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle  } from '@fortawesome/free-brands-svg-icons';
import { faMedal, faGamepad, faMapMarkedAlt, faGears  } from '@fortawesome/free-solid-svg-icons';
import AboutUs from '../../../assets/home/home-about-us.png'
import "aos/dist/aos.css";
import Button from '../../button/Button';

const HomeAboutUs = () => {
  const toAboutUs = () => {
      window.location.href = '/about';
  };

    const imageHolderRef = useRef(null);
    let currentRotateX = 0;
    let currentRotateY = 0;
    const fields = [
        {
          id: 1,
          icon: faMedal,
          title: "First On Field",
          description: "With an almost 10year worth of experience on the field, We are your best partner."
        },
        {
          id: 2,
          icon: faGamepad,
          title: "Easy To Reach",
          description: "With multiple channels of communication, a responsive support team. You can reach us anytime"
        },
        {
          id: 3,
          icon: faMapMarkedAlt,
          title: "Worldwide Services",
          description: "We digital company can be working with anyone from any part of the world."
        },
        {
          id: 4,
          icon: faGears,
          title: "24/7 Support",
          description: "we're here to ensure uninterrupted service and peace of mind. Count on us anytime, day or night!"
        }
      ];
    
    useEffect(() => {
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
      <div className='row main-container px-10 '>
        <div className="col-xxl-6 col-xl-6 col-lg-6 half-container" data-aos="fade-up" data-aos-duration="1600" data-aos-offset="200">
            <div className='mt-4'>
                <h6><FontAwesomeIcon icon={faGgCircle} />&nbsp;&nbsp;About Us&nbsp;&nbsp;<FontAwesomeIcon icon={faGgCircle} /></h6>
            </div>
            <div>
                <h1 className='font-lg'>Trusted By Worldwide Clients Since <span style={{ color: "#09AFF4" }}>1980.</span></h1>
            </div>
            <div>
                <p className='font-sizePx18 mt-4'>With over a decades of experience, we’ve built a reputation for delivering exceptional service and innovative solutions to clients around the globe. Our long-standing relationships with industry leaders and businesses of all sizes demonstrate our commitment to quality, trust, and results.</p>
            </div>
            <div className='row contain-field'>
                {fields.map((field) => (
                    <div className="col-xxl-6 col-xl-6 field" key={field.id}>
                        <div className="row">
                            <div className="col-3 box btn">
                            <FontAwesomeIcon icon={field.icon} />
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
        <div className="col-xxl-6 col-xl-6 col-lg-6 half-container" data-aos="fade-up" data-aos-duration="1000">
            <div className='image-holder mt-10' ref={imageHolderRef}>
                <img src={AboutUs} alt="about-us" />
            </div>
        </div>
      </div>
    );
  };

export default HomeAboutUs;