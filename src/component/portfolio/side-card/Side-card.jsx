import React, { useEffect } from 'react';
import './side-card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faSliders, faCalendarDays, faShareNodes  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faYoutube, faInstagram, faXTwitter  } from '@fortawesome/free-brands-svg-icons';


const ProjectGoal = () => {

    useEffect(() => {

    }, []);
    
    return (
      <>
        <div className='side-card row'>
          <div className="top col-12">
            <div className="left">
              <h5>CLIENT</h5>
              <p>Admin Themes</p>
            </div>
            <div className="right">
              <span><FontAwesomeIcon icon={faIdCard} /></span>
            </div>
          </div>
          <div className="top col-12">
            <div className="left">
              <h5>CATEGOTY</h5>
              <p>Web Development</p>
            </div>
            <div className="right">
              <span><FontAwesomeIcon icon={faSliders} /></span>
            </div>
          </div>
          <div className="top col-12">
            <div className="left">
              <h5>DATE</h5>
              <p>30/1/2022</p>
            </div>
            <div className="right">
              <span><FontAwesomeIcon icon={faCalendarDays} /></span>
            </div>
          </div>
          <div className="top col-12">
            <div className="left">
              <h5 className='mb-3'>SHARE</h5>
              <div className="row">
                <div className="col-3 mr-1"><FontAwesomeIcon icon={faFacebook} /></div>
                <div className="col-3 mr-1"><FontAwesomeIcon icon={faYoutube} /></div>
                <div className="col-3 mr-1"><FontAwesomeIcon icon={faInstagram} /></div>
                <div className="col-3"><FontAwesomeIcon icon={faXTwitter} /></div>
              </div>
            </div>
            <div className="right">
              <span><FontAwesomeIcon icon={faShareNodes} /></span>
            </div>
          </div>
        </div>
      </>
    );
  };

export default ProjectGoal;