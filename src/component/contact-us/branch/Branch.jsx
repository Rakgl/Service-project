import React from 'react';
import './branch.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk, faPhone  } from '@fortawesome/free-solid-svg-icons';

const locations = [
    {
        city: "New York",
        address: "United States, 307 Wilshire, 2nd av. New York 3516.",
        email: "info@example.com",
        phone: "+29876543210",
    },
    {
        city: "London",
        address: "United Kingdom, 12 Smith Town, 2nd av. London 2159.",
        email: "info@example.com",
        phone: "+29876543210",
    },
    {
        city: "Tokyo",
        address: "Japan, 307 Chinzo Appy Road, Portsika Way. Tokyo 3516.",
        email: "info@example.com",
        phone: "+29876543210",
    },
];

const Branch = () => {
  return (
    <>
        <div className='branch px-10'>
            <h1 className='text-center mt-5'><b>Our Offices Around The World</b></h1>
            <div className="row">
                {locations.map((location, index) => (
                    <div key={index} className="col-6 boxie pt-3 px-3">
                        <h4>{location.city}</h4>
                        <p>{location.address}</p>
                        <div className="small-box mt-4">
                            <div className="left">
                            <span>
                                <FontAwesomeIcon icon={faMailBulk} />
                            </span>
                            </div>
                            <div className="right">
                                <h5>Email:</h5>
                                <div className='nata'>{location.email}</div>
                            </div>
                        </div>
                        <div className="small-box mt-4">
                            <div className="left">
                            <span>
                                <FontAwesomeIcon icon={faPhone} />
                            </span>
                            </div>
                            <div className="right">
                                <h5>Phone:</h5>
                                <div className='nata'>{location.phone}</div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
        </div>
    </>
  );
};

export default Branch;