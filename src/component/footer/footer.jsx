import './footer.scss';
import Logo from '../../assets/logo-colored.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faYoutube,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <footer className="footer text-light footer-img mt-5">
        <div className="px-10">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-4">
              <img src={Logo} alt="logo" className="mb-2" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum aliquid necessitatibus harum doloribus ullam eveniet
                quidem ea dolor perferendis consectetur.
              </p>
              <label htmlFor="newsletter" className="mt-3">
                Subscribe To Our Newsletter
              </label>
              <div className="input-group mt-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  aria-label="Email Address"
                  id="newsletter"
                />
                <button className="btn btn-primary">Subscribe</button>
              </div>
              <p className="mt-2 small">
                *we will not share your personal info
              </p>
            </div>

            {/* Useful Links */}
            <div className="col-lg-2 col-md-4 useful-links">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none p-2"
                  >
                    Google
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  <a
                    href="https://www.dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none p-2"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none p-2"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  <a
                    href="https://www.wikipedia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none p-2"
                  >
                    Wikipedia
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-lg-2 col-md-4 useful-links">
              <h5>Resources</h5>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  <Link
                    to="/support"
                    className="text-light text-decoration-none p-2"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />
                  <Link
                    to="/dashboard"
                    className="text-light text-decoration-none p-2"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />

                  <Link
                    to="/drivers"
                    className="text-light text-decoration-none p-2"
                  >
                    Drivers
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faArrowRight} />

                  <Link
                    to="/projects"
                    className="text-light text-decoration-none p-2"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-2 col-md-2 useful-links">
              <h5>Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />

                  <Link
                    to="/branding"
                    className="text-light text-decoration-none p-2"
                  >
                    info@gmail.com
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faPhone} />

                  <Link
                    to="/design"
                    className="text-light text-decoration-none p-2"
                  >
                    +880 123 456 789
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className="icon" icon={faLocationDot} />

                  <Link
                    to="/marketing"
                    className="text-light text-decoration-none p-2"
                  >
                    123, New York, USA
                  </Link>
                </li>
                <div className="line-icon mt-5 d-flex flex-colum gap-3">
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
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <p className="mb-0">&copy; 2025 Created By Flex-IT</p>
            <p>Terms of use | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
