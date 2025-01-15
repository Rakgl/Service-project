import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  useEffect(() => {
    loadTheme();
  }, []);
  return (
    <>
      <nav className="px-10">
        <div className="nav-content">
          <div className="logo">
            <Link className="logo-img" to="/app">IT service</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/portfolio">Protfolio</Link>
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
          <select id="theme-selector" onChange={saveTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
      </nav>
    </>
  );
};
function saveTheme() {
  const themeSelector = document.getElementById('theme-selector');
  const selectedTheme = themeSelector.value;
  localStorage.setItem('theme', selectedTheme);
  applyTheme(selectedTheme);
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    const themeSelector = document.getElementById('theme-selector');
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);
  }
}

function applyTheme(theme) {
  document.body.className = theme;
  if (theme === 'dark') {
    document.body.style.backgroundColor = 'black';
  } else {
    document.body.style.backgroundColor = 'white';
  }
}


export default Header;
