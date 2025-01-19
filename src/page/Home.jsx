
import CarouselCard from '../component/home/carouselCard/CarouselCard';
import MainBanner from '../component/home/main-banner/banner';
import HomeAboutUs from '../component/home/about-us/about-us';
import LatestNews from '../component/home/News/LatestNews'
import PricingPlans from '../component/home/PricingPlans/PricingPlans'
import RunningNum from '../component/home/runing-number/RunningNum';
const HomePage = () => {
  return (
    <>
      <div>
        <MainBanner/>
        <HomeAboutUs/>
        <CarouselCard />
        <RunningNum/>
        <LatestNews />
        <PricingPlans />
      </div>
    </>
  );
};

export default HomePage;
