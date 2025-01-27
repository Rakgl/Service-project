import LatestNews from "../component/home/News/LatestNews";
import HomeAboutUs from "../component/home/about-us/about-us";
import TestiMo from "../component/home/testimonial/TestiMo";
import PropHeader from "../component/home/PropHeader/PropHeader";
import Scroll from "../component/scroll-up/Scroll";
const AboutPage = () => {
  return (
    <>
      <div>
        <PropHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}/>
        <HomeAboutUs/>
        <LatestNews/>
        <TestiMo/>
        <Scroll/>
      </div>
    </>
  );
};

export default AboutPage;
