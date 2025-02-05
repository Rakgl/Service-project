import React from 'react';
import './map.scss';

const Map = () => {    
    return (
        <>
            <div className='map px-10'>
                <h1 className='text-center mt-6'><b>Find Us On Google Map</b></h1>
                <div className="hold-map mt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.841567574!2d-0.2667486343621649!3d51.52873932330341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2skh!4v1738375488127!5m2!1sen!2skh" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </>
    );
  };

export default Map;