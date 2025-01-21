import React, { useRef, useEffect } from 'react';
import './about-us.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle  } from '@fortawesome/free-brands-svg-icons';
import { faMedal, faGamepad, faMapMarkedAlt, faGears  } from '@fortawesome/free-solid-svg-icons';
import AboutUs from '../../../assets/home/home-about-us.png'
import "aos/dist/aos.css";

const HomeAboutUs = () => {
    const imageHolderRef = useRef(null);
    let currentRotateX = 0;
    let currentRotateY = 0;
    const fields = [
        {
          icon: faMedal,
          title: "First On Field",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste."
        },
        {
          icon: faGamepad,
          title: "Easy To Reach",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste."
        },
        {
          icon: faMapMarkedAlt,
          title: "Worldwide Services",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste."
        },
        {
          icon: faGears,
          title: "24/7 Support",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, iste."
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
                <p className='font-sizePx18 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia molestiae dolorum tempora ut accusamus cupiditate! Nesciunt tempora reiciendis libero voluptate!</p>
            </div>
            <div className='row contain-field'>
                {fields.map((field, index) => (
                    <div className="col-xxl-6 col-xl-6 field" key={index}>
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
            <button type="button" className="btn btn-outline-primary">Get In Touch</button>
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