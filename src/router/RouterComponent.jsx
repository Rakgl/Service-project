import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../page/Home';
import Contact from '../page/Contact';
import About from '../page/About';
import Header from '../component/header/Header';
import Footer from '../component/footer/footer';
import Loading from '../component/loading/Loading';
import Service from '../page/Service';
import Portfolio from '../page/Portfolio';
import Blog from '../page/Blog';
import Pages from '../page/Pages';

const RouterComponent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    AOS.init({ 
      duration: 2000,
    });

    setLoading(true); 
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default RouterComponent;
