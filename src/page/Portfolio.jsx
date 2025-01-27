import React from 'react';
import ImageBanner from '../component/portfolio/image-banner/Image-banner';
import ProjectGoal from '../component/portfolio/project-goal/project-goal';
import SideCard from '../component/portfolio/side-card/Side-card';
import Scroll from "../component/scroll-up/Scroll";
import ContactBanner from '../component/portfolio/contact-banner/Contact-banner';
import PropHeader from "../component/home/PropHeader/PropHeader";


const Portfolio = () => {
  return (
    <>
    <div>
        <PropHeader
        title="Portfolio"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Portfolio" },
        ]}/>
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
      <Scroll/>
    </div>
    </>
  );
};

export default Portfolio;
