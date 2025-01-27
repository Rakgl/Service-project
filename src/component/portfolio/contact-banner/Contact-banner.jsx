import React, { useRef, useEffect } from 'react';
import './contact-banner.scss';
import ContactBannerImg from '../../../assets/portfolio/contact-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../button/Button';
import { faGgCircle  } from '@fortawesome/free-brands-svg-icons';
import "aos/dist/aos.css";

const ContactBanner = () => {
    const toContact = () => {
        window.location.href = '/contact';
    };
    
    return (
        <>
            <div className='contact-banner'>
                <div className='cover'></div>
                <img src={ContactBannerImg} alt="contact-banner" />
                <div className="letter-holder">
                    <h6 data-aos="fade-up" data-aos-duration="1000"><FontAwesomeIcon icon={faGgCircle} />&nbsp;&nbsp;<b>Contact Us</b>&nbsp;&nbsp;<FontAwesomeIcon icon={faGgCircle} /></h6>
                    <h1 className='mt-2' data-aos="fade-up" data-aos-duration="1200">Get In Touch With Us</h1>
                    <p data-aos="fade-up" data-aos-duration="1400">We’re here to help! Whether you have questions, need support, or want to learn more about our services, don’t hesitate to reach out.</p>
                    <Button className='mt-3' onClick={toContact} data-aos="fade-up" data-aos-duration="1600">Contact Us</Button>
                </div>
            </div>
        </>
    );
  };

export default ContactBanner;