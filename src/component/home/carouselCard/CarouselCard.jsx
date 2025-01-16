import './CarouselStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 

const CarouselCard = () => {
  return (
    <>
      <div className="Card">
        <h1>
          Trusted By Over 500 Clients Around The World{' '}
          <FontAwesomeIcon icon={faFacebook} />
        </h1>
        <div></div>
      </div>
    </>
  );
};

export default CarouselCard;
