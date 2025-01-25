import React from 'react';
import ImageBanner from '../component/portfolio/image-banner/Image-banner';
import ProjectGoal from '../component/portfolio/project-goal/project-goal';
import SideCard from '../component/portfolio/side-card/Side-card';
import ContactBanner from '../component/portfolio/contact-banner/Contact-banner';


const Portfolio = () => {
  return (
    <>
    <div>
      <ImageBanner/>
      <div className='row px-10' style={{marginBottom: '130px',}}>
        <div className='col-lg-9 col-md-12'>
          <ProjectGoal/>
        </div>
        <div className='col-lg-3 col-md-12'>
          <SideCard/>
        </div>
      </div>
      <ContactBanner/>
    </div>
    </>
  );
};

export default Portfolio;
