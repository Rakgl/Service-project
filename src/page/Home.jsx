
import CarouselCard from '../component/home/carouselCard/CarouselCard';
import MainBanner from '../component/home/main-banner/banner';
import LatestNews from '../component/home/News/LatestNews'
import PricingPlans from '../component/home/PricingPlans/PricingPlans'
import RunningNum from '../component/home/runing-number/RunningNum';
const HomePage = () => {
  return (
    <>
      <div>
        <MainBanner/>
        <CarouselCard />
        <RunningNum/>
        <LatestNews />
        <PricingPlans />
      </div>
    </>
  );
};

export default HomePage;
