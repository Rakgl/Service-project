import React, { useEffect, useState } from "react";

const RunningNum = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const targetNumber = 100;
  const speed = 50; // Speed in milliseconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < targetNumber) {
          return prevNumber + 1;
        } else {
          clearInterval(interval);
          return prevNumber;
        }
      });
    }, speed);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return <div id="counter">{currentNumber}</div>;
};

export default RunningNum;
