import LatestNews from "../component/home/News/LatestNews";
import HomeAboutUs from "../component/home/about-us/about-us";
import Scroll from "../component/scroll-up/Scroll";
const AboutPage = () => {
  return (
    <>
      <div>
        <HomeAboutUs/>
        <LatestNews/>
        <Scroll/>
      </div>
    </>
  );
};

export default AboutPage;
