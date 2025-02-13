import 'react';
import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './router/RouterComponent';
import './styles/main.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/navigation';
import 'swiper/css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: true,
    });
  }, []);
  return (
    <Router>
      <RouterComponent />
    </Router>
  );
};

export default App;