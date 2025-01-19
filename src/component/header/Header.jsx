import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import LogoDark from '../../assets/logo-dark.png';
import LogoLight from '../../assets/logo-light.png';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const saveTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getLinkClass = (path) => {
    return `nav-link ${location.pathname === path ? 'active' : ''}`;
  };

  return (
    <>
      <header className={`px-10 header ${isSticky ? 'sticky' : ''}`}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid px-10">
            <Link className="navbar-brand" to="/app">
              <img
                src={theme === 'dark' ? LogoDark : LogoLight}
                alt="Logo"
                style={{ height: '50px' }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleMenu}
              aria-controls="navbarNav"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-center ${menuOpen ? 'show' : ''}`}
              id="navbarNav"
              style={{
                backgroundColor: menuOpen
                  ? theme === 'dark'
                    ? '#343a40'
                    : '#f8f9fa'
                  : 'transparent',
              }} // Added background color
            >
              <ul className="navbar-nav mb-lg-0">
                <li className="nav-item">
                  <Link className={getLinkClass('/about')} to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={getLinkClass('/service')} to="/service">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={getLinkClass('/portfolio')} to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={getLinkClass('/blog')} to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={getLinkClass('/pages')} to="/pages">
                    Pages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={getLinkClass('/contact')} to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <button
              className={`btn theme-selector ms-2 ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
              onClick={saveTheme}
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
