import  { useRef, useEffect } from 'react';
import './banner.scss';
import Illustration from '../../../assets/home/illustration-3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram, faXTwitter, faGgCircle  } from '@fortawesome/free-brands-svg-icons';
import { faPlay  } from '@fortawesome/free-solid-svg-icons';
import ZigZac from '../../../assets/home/zig-zac.png'
import Button from '../../button/Button';
const MainBanner = () => {
    const imageHolderRef = useRef(null);
    let currentRotateX = 0;
    let currentRotateY = 0;
  
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
      <>
        <div className='row main-banner px-10'>
          <div id="stars-container">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </div>

          <div className='col-xl-6 col-lg-5 col-sm-12 banner-side pt-10'>
            <div className='line-icon d-flex justify-content-between'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            </div>
            <div className='mt-3'>
              <h6><FontAwesomeIcon icon={faGgCircle} />&nbsp;&nbsp;IT SOLUTION&nbsp;&nbsp;<FontAwesomeIcon icon={faGgCircle} /></h6>
            </div>
            <div className='big-letter'>
              <h1>
                Providing Best Services & IT <span style={{ color: "#09AFF4" }}>solutions</span>
              </h1>
              <img src={ZigZac}/>
            </div>
            <div>
              <p>
                We specialize in delivering cutting-edge IT solutions that drive innovation and efficiency for businesses of all sizes.
              </p>
            </div>
            <div className='d-flex'>
              <Button>Start Now</Button>
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
          <div className='col-xl-6 col-lg-7 col-sm-12 banner-side rowCC'>
            <div className='image-holder' ref={imageHolderRef}>
              <img src={Illustration} alt="Illustrat" />
            </div>
          </div>
        </div>
      </>
    );
  };

export default MainBanner;