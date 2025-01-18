import React, { useEffect, useState, useRef } from "react";

const RunningNum = () => {
  const counters = [
    { id: 1, targetNumber: 750, label: "Finished projects" },
    { id: 2, targetNumber: 23, label: "Created jobs" },
    { id: 3, targetNumber: 200, label: "Happy customers" },
    { id: 4, targetNumber: 28, label: "Years of experience" },
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
      threshold: 0.5, // Trigger when 50% of the section is visible
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
    <div ref={sectionRef} className="widthPC-100 flex-wrap rowCC py-5">
      {counters.map((counter, index) => (
        <div
          key={counter.id}
          className="heightPx-200 widthPx-250 border border-primary columnCC rounded text-center"
        >
          <div id="counter" className="font-big font-weight">
            {numbers[index]}+
          </div>
          <h4>{counter.label}</h4>
        </div>
      ))}
    </div>
  );
};

export default RunningNum;
