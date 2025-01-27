import React, { useRef, useEffect } from 'react';
import './image-banner.scss';
import ImageIBanner from '../../../assets/portfolio/image-banner.jpg'

const ImageBanner = () => {

    useEffect(() => {

    }, []);
    
    return (
        <>
            <div className='portfolio-banner px-10'>
                <img src={ImageIBanner} alt="portfolio" />
            </div>
        </>
    );
  };

export default ImageBanner;