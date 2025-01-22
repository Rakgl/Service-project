import React from 'react';
import ImageBanner from '../component/portfolio/image-banner/Image-banner';
import ProjectGoal from '../component/portfolio/project-goal/project-goal';
import SideCard from '../component/portfolio/side-card/Side-card';


const Portfolio = () => {
  return (
    <>
    <div>
      <ImageBanner/>
      <div className='row px-10'>
        <div className='col-9'>
          <ProjectGoal/>
        </div>
        <div className='col-3'>
          <SideCard/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
