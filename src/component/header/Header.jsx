import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import LogoDark from '../../assets/logo-dark.png';
import LogoLight from '../../assets/logo-light.png';

const Header = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const saveTheme = (event) => {
    const selectedTheme = event.target.value;
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);
    applyTheme(selectedTheme);
  };

  const applyTheme = (theme) => {
    document.body.className = theme;
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <nav className="px-10">
      <div className="nav-content">
        <div className="logo">
          <Link className="logo-img" to="/app">
            <img src={theme === 'dark' ? LogoDark : LogoLight} alt="Logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/pages">Pages</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <select id="theme-selector" onChange={saveTheme} value={theme}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </nav>
  );
};

export default Header;
