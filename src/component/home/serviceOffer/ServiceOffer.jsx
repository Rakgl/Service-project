import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMagnifyingGlass, faChartLine, faMobileAlt, faDatabase,faTable } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import './service.scss';
import Button from '../../button/Button';

const ServiceOffer = () => {
  const serviceOffer = [
    {
      icon: <FontAwesomeIcon icon={faCode} />,
      id: 1,
      title: "Web Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faChartLine} />,
      id: 2,
      title: "Digital Marketing",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: < FontAwesomeIcon icon={faTable}/>,
      id: 3,
      title: "SaaS Product",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      id: 4,
      title: "Apps Development",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
      id: 5,
      title: "SEO Services",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
    {
      icon: <FontAwesomeIcon icon={faDatabase} />,
      id: 6,
      title: "Data Analysis",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.",
    },
  ];

  return (
    <div className='big-bg px-10'>
      <div className="m-auto py-5 ">
        <div className="d-flex mb-4 j-sb" data-aos="fade-up" data-aos-duration="2000">
          <div className='widthPC-60'>
            <h4 className='text-primary'>Service</h4>
            <h1>Services We Offer</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque minima commodi, repudiandae facere adipisci voluptatibus corporis nobis perferendis iste.</p>
          </div>
          <Button >See all services</Button>
        </div>
        <div className="grid-container" data-aos="fade-up" data-aos-duration="1000">
          {serviceOffer.map((data) => (
            <div className="grid-item rounded" key={data.id}>
              <div className="font-lg text-primary">{data.icon}</div>
              <h1 className="font-md font-weight500">{data.title}</h1>
              <p>{data.des}</p>
              <Link to="#" className="font-sizePx20 text-primary"><span>Read More</span></Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOffer;
