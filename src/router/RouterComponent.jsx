import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Loading from '../component/loading/Loading';

// Lazy load pages for code-splitting
const Home = lazy(() => import('../page/Home'));
const About = lazy(() => import('../page/About'));
const Service = lazy(() => import('../page/Service'));
const Portfolio = lazy(() => import('../page/Portfolio'));
const Blog = lazy(() => import('../page/Blog'));
const Pages = lazy(() => import('../page/Pages'));
const Contact = lazy(() => import('../page/Contact'));

const RouterComponent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 2000 });

    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  return loading ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default RouterComponent;
