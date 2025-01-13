import CarouselCard from "../component/home/CarouselCard";
import LoadingWord from "../component/home/LoadingWord";

const HomePage = () => {
  return (
    <>
        <div className="mt-5">
            <LoadingWord />
            <CarouselCard/>
        </div>
    </>
  );
};

export default HomePage;
