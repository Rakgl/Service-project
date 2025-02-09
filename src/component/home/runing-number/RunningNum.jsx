import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faRegularLightbulb, faUser as faRegularUser } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState, useRef } from 'react';
import './running.scss'

const RunningNum = () => {
  const counters = [
    { id: 1, targetNumber: 750, label: 'Finished projects', icon: <FontAwesomeIcon icon={faRegularLightbulb} /> },
    { id: 2, targetNumber: 23, label: 'Created jobs', icon: <FontAwesomeIcon icon={faFileInvoice} /> },
    { id: 3, targetNumber: 200, label: 'Happy customers', icon: <FontAwesomeIcon icon={faRegularUser} /> },
    { id: 4, targetNumber: 28, label: 'Years of experience', icon: <FontAwesomeIcon icon={faBullseye} /> },
  ];

  const [numbers, setNumbers] = useState(counters.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const intervals = counters.map((counter, index) => {
      const dynamicSpeed = 2000 / counter.targetNumber; // Higher target numbers get a smaller interval

      return setInterval(() => {
        setNumbers((prevNumbers) => {
          const newNumbers = [...prevNumbers];
          if (newNumbers[index] < counter.targetNumber) {
            newNumbers[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newNumbers;
        });
      }, dynamicSpeed);
    });

    return () => intervals.forEach(clearInterval); // Cleanup intervals on component unmount
  }, [hasStarted]);

  return (
    <div ref={sectionRef} className=" background ">
      <div className='opa'>
        {counters.map((counter, index) => (
          <div
            key={counter.id}
            className="heightPx widthPx-230 borderr columnCC text-white text-center mr-4"
          >
            <div className='font-lg text-primary'>{counter.icon}</div>
            <div id="counter" className="fontlg font-weight text-white">
              {numbers[index]}+
            </div>
            <h5 className='text-white'>{counter.label}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningNum;
