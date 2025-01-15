import React from 'react';
import './footer.scss';
import Logo from '../../assets/logo-colored.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer-img footer px-10 py-5">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={Logo} alt="logo" />
            <p className="mt-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
              aliquid necessitatibus harum doloribus ullam eveniet quidem ea
              dolor perferendis consectetur.
            </p>
            <label htmlFor="">Subscribe To Our Newsletter</label>
            <br />
            <div className="subscribe-container">
              <input
                className="subscribe-input"
                type="email"
                placeholder="Email Address"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
            <p className="text-input">*we will not share your personal info</p>
          </div>

          <div className="inline">
            <h3 className="footer-heading">Useful Links</h3>
            <a
              className="footer-link"
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>
            <a
              className="footer-link"
              href="https://www.dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
            <a
              className="footer-link"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="footer-link"
              href="https://www.wikipedia.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wikipedia
            </a>
          </div>

          <div className="inline">
            <h3 className="footer-heading">Resources</h3>
            <Link className="footer-link" to="/support">
              Support
            </Link>
            <Link className="footer-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="footer-link" to="/drivers">
              Drivers
            </Link>
            <Link className="footer-link" to="/projects">
              Projects
            </Link>
          </div>

          <div className="inline">
            <h3 className="footer-heading">Contact Information</h3>
            <Link className="footer-link" to="/branding">
              Branding
            </Link>
            <Link className="footer-link" to="/design">
              Design
            </Link>
            <Link className="footer-link" to="/marketing">
              Marketing
            </Link>
            <Link className="footer-link" to="/advertisement">
              Advertisement
            </Link>
          </div>
        </div>
        <p>2024 Created by Rak</p>
      </footer>
    </>
  );
};

export default Footer;
