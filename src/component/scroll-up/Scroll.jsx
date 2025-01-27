import React, { useState, useEffect } from 'react';

const Scroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 1000) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showScroll && (
        <div
          className="toTop"
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
            backgroundColor: '#15aef7',
            borderRadius: '5%',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '60px',
            height: '60px',
            zIndex: 1000,
          }}
        >
          <img
            src="https://sudip-bhowmick.github.io/images/img/top-arrow.svg"
            alt="top-arrow"
            style={{ width: '30px', height: '30px' }}
          />
        </div>
      )}
    </>
  );
};

export default Scroll;
