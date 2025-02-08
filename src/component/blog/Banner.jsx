import React, { useState } from 'react';
import './banner.scss';
import banner from '../../assets/blog/image-banner.jpg';
import Subbanner from '../../assets/blog/image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Banner = () => {
  const [items, setItems] = useState([
    'Exceptional Client Experiences: Exceed expectations with tailored solutions and outstanding service.',
    'Innovation and Creativity: Embrace cutting-edge technologies and foster a culture of innovation.',
    'Long-Term Partnerships: Build trust-based, lasting relationships with clients and stakeholders.',
    'Team Empowerment: Create a supportive environment for team growth and development.',
    'Positive Impact: Promote sustainability, ethics, and social responsibility in all endeavors.',
  ]);
  return (
    <>
      <div className="center">
        <div className="text-icon">
          <p>SHARE POST: </p>

          <div className="box">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className="box">
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
        </div>
        <h1 className="banner-title">
          Building Excellence, Innovation, and Impact: The Core of Flex IT
        </h1>
        <img src={banner} alt="banner" />
        <div className="content mt-3">
          <p className="text">
            Welcome to the blog of Flex IT, where innovation meets excellence!
            Our awesome firm is dedicated to delivering cutting-edge solutions
            and unparalleled expertise in . Through this blog, we aim to share
            valuable insights, industry trends, and thought leadership to
            empower our clients and partners. Whether you're looking for tips,
            updates, or in-depth analysis, our blog is your go-to resource for
            staying ahead in the game. Join us on this journey as we explore the
            latest advancements, success stories, and strategies that define our
            commitment to greatness. Discover why Flex IT stands out as a leader
            in Flex IT—because your success is our mission!
          </p>

          <h2 className="banner-title">About our awesome firm</h2>
          <img src={Subbanner} alt="Subanner" />

          <p className="mt-3 text">
            In today’s fast-paced digital world, businesses need cutting-edge
            solutions and a team that truly understands their needs. At Our
            Awesome Firm, we specialize in delivering top-notch services,
            helping businesses transform and grow with innovative technology,
            strategic solutions, and unwavering commitment to excellence.
          </p>

          <h2 className="banner-title">Some Of our goals in our firm</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2 className="banner-title">
            interested enough? you just on the shore let's dive deep
          </h2>
        </div>
      </div>
    </>
  );
};

export default Banner;
