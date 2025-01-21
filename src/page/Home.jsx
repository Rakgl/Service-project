
import CarouselCard from '../component/home/carouselCard/CarouselCard';
import MainBanner from '../component/home/main-banner/banner';
import HomeAboutUs from '../component/home/about-us/about-us';
import WhyChooseUs from '../component/home/Why-choose-us/Why-choose-us'
import LatestNews from '../component/home/News/LatestNews'
import PricingPlans from '../component/home/PricingPlans/PricingPlans'
import RunningNum from '../component/home/runing-number/RunningNum';
import ServiceOffer from '../component/home/serviceOffer/ServiceOffer';
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
        <PricingPlans />
        <LatestNews />
      </div>
    </>
  );
};

export default HomePage;
