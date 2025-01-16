
import CarouselCard from '../component/home/carouselCard/CarouselCard';
import LoadingWord from '../component/home/loadingword/LoadingWord';


const HomePage = () => {
  return (
    <>
      <div className="px-10">
        <LoadingWord />
        <CarouselCard />
      </div>
    </>
  );
};

export default HomePage;
