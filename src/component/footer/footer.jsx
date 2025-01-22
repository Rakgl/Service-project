import './footer.scss';
import Logo from '../../assets/logo-colored.png';
import { Link } from 'react-router-dom';

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
                  <a
                    href="https://www.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
                  >
                    Google
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
                  >
                    Dribbble
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.wikipedia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light text-decoration-none"
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
                  <Link
                    to="/support"
                    className="text-light text-decoration-none"
                  >
                    Support
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="text-light text-decoration-none"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/drivers"
                    className="text-light text-decoration-none"
                  >
                    Drivers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-light text-decoration-none"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-2 col-md-4 useful-links">
              <h5>Contact Information</h5>
              <ul className="list-unstyled">
                <li className="mt-4">
                  <Link
                    to="/branding"
                    className="text-light text-decoration-none"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    to="/design"
                    className="text-light text-decoration-none"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/marketing"
                    className="text-light text-decoration-none"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/advertisement"
                    className="text-light text-decoration-none"
                  >
                    Advertisement
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <p className="mb-0">&copy; 2025 Created by Rak</p>
            <p>Terms of use | Privacy Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;