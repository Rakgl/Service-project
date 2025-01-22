import React, { useEffect } from 'react';
import './project-goal.scss';
import { faPlay  } from '@fortawesome/free-solid-svg-icons';
// import ImageIBanner from '../../../assets/portfolio/image-banner.jpg'

const ProjectGoal = () => {

    useEffect(() => {

    }, []);
    
    return (
        <div className='project-goal'>
          <div className="top">
            <h1 className='mb-3'><b>Project Goal</b></h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam unde, alias deserunt nemo perspiciatis cum delectus deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos. deleniti repudiandae aliquam exercitationem veniam ipsam incidunt sequi ipsum tenetur. Consequuntur dolorum suscipit eos.</p>
            <div className='Img-top rowCC'>
              {/* <button type="button" className='round-button' data-bs-toggle="modal" data-bs-target="#youtubeModal">
                <span><FontAwesomeIcon icon={faPlay} /></span>
              </button> */}
            </div>
          </div>
        </div>
    );
  };

export default ProjectGoal;