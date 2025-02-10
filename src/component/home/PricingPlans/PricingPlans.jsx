import React from 'react';
import './PricingPlans.scss';
import AOS from 'aos';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faBoxOpen,
  faGears,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../button/Button';
const PricingPlans = () => {
  const plans = [
    {
      icon: faDesktop,
      name: 'Free Plan',
      price: 0,
      description: [
        '150 Lorem, Ipsum Dolor.',
        '20 Lorem Ipsum Dolor Sit.',
        'Lorem Ipsum Dolor Sit.',
        'Free Lorem Ipsum Dolor.',
        'Added Lorem Ipsum Dolor.',
      ],
      popular: false,
    },
    {
      icon: faGears,
      name: 'Standard Plan',
      price: 85,
      description: [
        '150 Lorem, Ipsum Dolor.',
        '20 Lorem Ipsum Dolor Sit.',
        'Lorem Ipsum Dolor Sit.',
        'Free Lorem Ipsum Dolor.',
        'Added Lorem Ipsum Dolor.',
      ],
      popular: false,
    },
    {
      icon: faBoxOpen,
      name: 'Pro Plan',
      price: 150,
      description: [
        '150 Lorem, Ipsum Dolor.',
        '20 Lorem Ipsum Dolor Sit.',
        'Lorem Ipsum Dolor Sit.',
        'Free Lorem Ipsum Dolor.',
        'Added Lorem Ipsum Dolor.',
      ],
      popular: true,
    },
    {
      icon: faUserSecret,
      name: 'Ultimate Plan',
      price: 210,
      description: [
        '150 Lorem, Ipsum Dolor.',
        '20 Lorem Ipsum Dolor Sit.',
        'Lorem Ipsum Dolor Sit.',
        'Free Lorem Ipsum Dolor.',
        'Added Lorem Ipsum Dolor.',
      ],
      popular: false,
    },
  ];

  return (
    <section
      className="pricing-plans px-10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="top-container">
        <div className="top-left">
          <p className="plan">Pricing Plans →</p>
          <h2 className="section-title">Affordable Pricing Plans</h2>
          <p className="section-description">
            Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id
            Atque Dignissimos Repellat Quae Ullam.
          </p>
        </div>
        <div className="see-all-plans">
          <Button>See All Plans →</Button>
        </div>
      </div>
      <div className="container">
        <div className="plans-container row">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card col-md-6 mb-4 col-xl-4 col-lg-4 col-xxl-4  ${plan.popular ? 'popular' : ''}`}
            >
              <div className="plan-header">
                {plan.popular && (
                  <span className="badge">Most Popular Plan</span>
                )}
              </div>
              <h6 className="icons-solid">
                <FontAwesomeIcon icon={plan.icon} />
              </h6>
              <h3 className="plan-title">{plan.name}</h3>
              <p className="price">
                ${plan.price}
                <span>Per Project</span>
              </p>
              <ul className="plan-features">
                {plan.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button className="select-plan">Select Plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
