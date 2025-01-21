import React from 'react';
import './PricingPlans.scss';

const PricingPlans = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: 0,
      description: ['150 Lorem, Ipsum Dolor.', '20 Lorem Ipsum Dolor Sit.', 'Lorem Ipsum Dolor Sit.', 'Free Lorem Ipsum Dolor.', 'Added Lorem Ipsum Dolor.'],
      popular: false,
    },
    {
      name: 'Standard Plan',
      price: 85,
      description: ['150 Lorem, Ipsum Dolor.', '20 Lorem Ipsum Dolor Sit.', 'Lorem Ipsum Dolor Sit.', 'Free Lorem Ipsum Dolor.', 'Added Lorem Ipsum Dolor.'],
      popular: false,
    },
    {
      name: 'Pro Plan',
      price: 150,
      description: ['150 Lorem, Ipsum Dolor.', '20 Lorem Ipsum Dolor Sit.', 'Lorem Ipsum Dolor Sit.', 'Free Lorem Ipsum Dolor.', 'Added Lorem Ipsum Dolor.'],
      popular: true,
    },
    {
      name: 'Ultimate Plan',
      price: 210,
      description: ['150 Lorem, Ipsum Dolor.', '20 Lorem Ipsum Dolor Sit.', 'Lorem Ipsum Dolor Sit.', 'Free Lorem Ipsum Dolor.', 'Added Lorem Ipsum Dolor.'],
      popular: false,
    },
  ];

  return (
    <section className="pricing-plans">
      <div className="top-container">
        <div className="top-left">
          <p className="plan">Pricing Plans →</p>
          <h2 className="section-title">Affordable Pricing Plans</h2>
          <p className="section-description">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id Atque Dignissimos Repellat Quae Ullam.</p>
        </div>
        <div className="see-all-plans">
          <a href="#" className="see-all-button">See All Plans →</a>
        </div>
      </div>
      <div className="plans-container">
        {plans.map((plan, index) => (
          <div key={index} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
            <div className="plan-header">
              {plan.popular && <span className="badge">Most Popular Plan</span>}
            </div>
            <h3 className="plan-title">{plan.name}</h3>
            <p className="price">${plan.price}<span>Per Project</span></p>
            <ul className="plan-features">
              {plan.description.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <button className="select-plan">Select Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
