import React, { useState } from 'react';
import './banner.scss';
import banner from '../../assets/blog/image-banner.jpg';
import Subbanner from '../../assets/blog/image.png';
import Sub1Banner from '../../assets/blog/image-3.png';
import profile from '../../assets/blog/profile.png';
import Button from '../button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

// import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
  const [items, setItems] = useState([
    'Exceptional Client Experiences: Exceed expectations with tailored solutions and outstanding service.',
    'Innovation and Creativity: Embrace cutting-edge technologies and foster a culture of innovation.',
    'Long-Term Partnerships: Build trust-based, lasting relationships with clients and stakeholders.',
    'Team Empowerment: Create a supportive environment for team growth and development.',
    'Positive Impact: Promote sustainability, ethics, and social responsibility in all endeavors.',
  ]);
  const socialMedia = [
    { icon: faFacebook, bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { icon: faYoutube, bg: 'bg-blue-600', hover: 'hover:bg-blue-700' },
    { icon: faInstagram, bg: 'bg-blue-600', hover: 'hover:bg-blue-600' },
    { icon: faXTwitter, bg: 'bg-blue-600', hover: 'hover:bg-blue-800' },
  ];
  return (
    <>
      <div className="center">
        <div className="flex items-center space-x-4">
          <div className="text-icon">
            <p className="font-semibold">SHARE POST:</p>
            {socialMedia.map((platform, index) => (
              <div
                key={index}
                className={`box ${platform.bg} ${platform.hover}`}
              >
                <FontAwesomeIcon icon={platform.icon} />
              </div>
            ))}
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
            Interested enough? you just on the shore let's dive deep
          </h2>
          <p className="text">
            At Flex-IT, we’re not just about meeting expectations—we’re about
            redefining them. Our first and foremost goal is to deliver
            exceptional client experiences, where every interaction is tailored
            to your unique needs and every solution is designed to propel you
            toward success. Innovation and creativity are the lifeblood of our
            firm; we constantly push boundaries, embrace cutting-edge
            technologies, and challenge the status quo to ensure that we’re not
            just keeping up with the industry but leading it. But our vision
            goes beyond transactions—we’re here to build long-term partnerships
            rooted in trust, transparency, and mutual growth. We believe that
            your success is our success, and we’re committed to walking this
            journey with you. Equally important is our dedication to empowering
            our team. We foster a culture of collaboration, inclusivity, and
            continuous learning because we know that a motivated and skilled
            team is the foundation of everything we do. Finally, we’re driven by
            a deeper purpose: to make a positive impact. Whether it’s through
            sustainable practices, ethical decision-making, or community
            initiatives, we strive to leave the world better than we found it.
            At Flex-IT, we’re not just building a business—we’re building a
            legacy.
          </p>


          {/* <img className='img-sub' src={Sub1Banner} alt="Sub1Banner" /> */}

          {/* <div className="box-text mt-5 p-3">
            <FontAwesomeIcon
              icon={faQuoteLeft}
              className="p-3 text-blue-500 fs-1 qoute-text"
            />
            <p className="text fs-3 p-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis odit repellendus sint assumenda quae laborum
            </p>
          </div> */}

          <div className="box-text mt-5 p-4">
            <h3>Mohamed amin</h3>
            <div className="d-flex justify-content-between align-items-center gap-3">
              <div className="cricle">
                <img src={profile} alt="Profile" />
              </div>
              <div className="text-profile">
                <p className="text mt-3">
                  Sophat is a passionate software engineer and the founder of
                  ADITI Co., Ltd, a company specializing in software solutions,
                  digital transformation, and engineering outsourcing. With a
                  strong commitment to delivering high-quality, customized
                  software, Sophat collaborates with businesses—particularly
                  Japanese companies—to create seamless outsourcing experiences.
                  His expertise spans Laravel, Next.js, Nuxt 3, Flutter, and
                  more, ensuring innovative and scalable solutions for clients
                  worldwide.
                </p>

                <div className="text-icon">
                  {socialMedia.map((platform, index) => (
                    <div
                      key={index}
                      className={`box ${platform.bg} ${platform.hover}`}
                    >
                      <FontAwesomeIcon icon={platform.icon} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="form px-10 mt-5">
            <h1 className="text-center">
              <b>Have Any Question? Let Answer Them</b>
            </h1>
            <form action="" className="mt-4 mb-5">
              <div className="row custom-gap">
                <div className="col-md-6 col-sm-12">
                  <label>
                    <b>
                      Name <span>*</span>
                    </b>
                  </label>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-md-6 col-sm-12">
                  <label>
                    <b>
                      Email <span>*</span>
                    </b>
                  </label>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-12">
                  <label>
                    <b>
                      Subject <span>*</span>
                    </b>
                  </label>
                  <input type="text" className="form-control mt-2" />
                </div>
                <div className="col-12">
                  <label>
                    <b>
                      Your Message <span>*</span>
                    </b>
                  </label>
                  <textarea
                    className="form-control big-form mt-2"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
            </form>
            <Button>Sent Your Message</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
