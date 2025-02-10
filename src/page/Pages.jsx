import React from 'react';
import Scroll from '../component/scroll-up/Scroll';
import PricingPlans from '../component/home/PricingPlans/PricingPlans'
import PropHeader from "../component/home/PropHeader/PropHeader";
import TestiMo from '../component/home/testimonial/TestiMo';
import CarouselCard from '../component/home/carouselCard/CarouselCard';
import ContactBanner from '../component/portfolio/contact-banner/Contact-banner';

const Pages = () => {
  return (
    <>
      <PropHeader
      title="Pricing Plans"
      breadcrumbs={[
        { label: "Home", link: "/" },
        { label: "Pricing Plans" },
      ]}/>
      <PricingPlans />
      <TestiMo/>
      <CarouselCard />
      <ContactBanner/>
        
      <Scroll />
    </>
  );
};

export default Pages;
