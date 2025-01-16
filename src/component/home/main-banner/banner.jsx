import React, { useRef, useEffect } from 'react';
import './banner.scss';
import Illustration from '../../../assets/home/illustration-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faXTwitter, faGgCircle, faGooglePlay  } from '@fortawesome/free-brands-svg-icons';
import ZigZac from '../../../assets/home/zig-zac.png'
const MainBanner = () => {
    const imageHolderRef = useRef(null);
    const orb1Ref = useRef(null);
    const orb2Ref = useRef(null);
  
    let orb1Angle = 0;
    let orb2Angle = 180;
    const rotationSpeed = 0.2;
    let currentRotateX = 0;
    let currentRotateY = 0;
  
    useEffect(() => {
      const imageHolder = imageHolderRef.current;
      const orb1 = orb1Ref.current;
      const orb2 = orb2Ref.current;
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
  
        if (isCursorRight) {
          orb1.style.transform = `translate(-50%, -50%) rotateX(${-currentRotateX}deg) rotateY(${-currentRotateY}deg) scale(0.7)`; // Orb on left (opposite) shrinks
          orb2.style.transform = `translate(-50%, -50%) rotateX(${-currentRotateX}deg) rotateY(${-currentRotateY}deg) scale(1)`;   // Orb on right (same side) stays normal
        } else {
          orb1.style.transform = `translate(-50%, -50%) rotateX(${-currentRotateX}deg) rotateY(${-currentRotateY}deg) scale(1)`;
          orb2.style.transform = `translate(-50%, -50%) rotateX(${-currentRotateX}deg) rotateY(${-currentRotateY}deg) scale(0.7)`;
        }
      };
  
      const handleMouseLeave = () => {
        currentRotateX = 0;
        currentRotateY = 0;
  
        imageHolder.style.transform = `rotateX(0deg) rotateY(0deg)`;
  
        orb1.style.transform = `translate(-50%, -50%) scale(1)`;
        orb2.style.transform = `translate(-50%, -50%) scale(1)`;
      };
  
      const positionOrbs = (rotateX, rotateY) => {
        if (!imageHolder || !orb1 || !orb2) return;
  
        const radius = imageHolder.offsetWidth / 2;
  
        orb1Angle = (orb1Angle + rotationSpeed) % 360;
        orb2Angle = (orb2Angle + rotationSpeed) % 360;
  
        const calculateOrbPosition = (angle) => {
          const angleRad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);
          return { x, y };
        };
  
        let pos1 = calculateOrbPosition(orb1Angle);
        let pos2 = calculateOrbPosition(orb2Angle);
  
        const tiltFactor = 0.9;
        pos1.x -= rotateY * tiltFactor;
        pos1.y += rotateX * tiltFactor;
        pos2.x -= rotateY * tiltFactor;
        pos2.y += rotateX * tiltFactor;
  
        orb1.style.left = `calc(50% + ${pos1.x}px)`;
        orb1.style.top = `calc(50% + ${pos1.y}px)`;
        orb2.style.left = `calc(50% + ${pos2.x}px)`;
        orb2.style.top = `calc(50% + ${pos2.y}px)`;
      };
  
      const animate = () => {
        if (!isAnimating) return;
  
        positionOrbs(currentRotateX, currentRotateY);
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
      <div className='row main-banner px-10'>
        <div id="stars-container">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>

        <div className='col-lg-6 col-sm-12 banner-side pt-10'>
          <div className='line-icon d-flex justify-content-between'>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div className='mt-3'>
            <h6><FontAwesomeIcon icon={faGgCircle} />&nbsp;&nbsp;IT SOLUTION&nbsp;&nbsp;<FontAwesomeIcon icon={faGgCircle} /></h6>
          </div>
          <div className='big-letter'>
            <h1>
              providing best services & IT <span style={{ color: "#09AFF4" }}>solutions</span>
            </h1>
            <img src={ZigZac}/>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed architecto dolorum inventore totam adipisci
            </p>
          </div>
          <div className='d-flex'>
            <button type="button" className="btn btn-outline-primary">Primary</button>
            <button className='round-button rowCC'>
              <span><FontAwesomeIcon icon={faGooglePlay} /></span>
            </button>
          </div>
        </div>
        <div className='col-lg-6 col-sm-12 banner-side rowCC'>
          <div className='image-holder' ref={imageHolderRef}>
            <img src={Illustration} alt="Illustrat" />
            <div className='orb' ref={orb1Ref}></div>
            <div className='orb' ref={orb2Ref}></div>
          </div>
        </div>
      </div>
    );
  };

export default MainBanner;