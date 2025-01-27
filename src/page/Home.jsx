
import CarouselCard from '../component/home/carouselCard/CarouselCard';
import MainBanner from '../component/home/main-banner/Banner';
import HomeAboutUs from '../component/home/about-us/About-us';
import WhyChooseUs from '../component/home/Why-choose-us/Why-choose-us'
import LatestNews from '../component/home/News/LatestNews'
import PricingPlans from '../component/home/PricingPlans/PricingPlans'
import RunningNum from '../component/home/runing-number/RunningNum';
import ServiceOffer from '../component/home/serviceOffer/ServiceOffer';
import TestiMo from '../component/home/testimonial/TestiMo';
import Scroll from '../component/scroll-up/Scroll';
const HomePage = () => {
  return (
    <>
      <div>
        <MainBanner/>
        <ServiceOffer/>
        <HomeAboutUs/>
        <WhyChooseUs/>
        <CarouselCard />
        <RunningNum/>
        <TestiMo/>
        <PricingPlans />
        <LatestNews />
        <Scroll />
      </div>
    </>
  );
};

export default HomePage;
