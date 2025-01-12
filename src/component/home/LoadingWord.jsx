import React, { useEffect, useRef } from "react";
import "./LoadingStyle.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from '@fortawesome/free-solid-svg-icons';

const LoadingWord = () => {
  const typedTextRef = useRef(null);
  const cursorRef = useRef(null);

  const textArray = ["hard", "", "a journey", ""];
  const typingDelay = 150;
  const erasingDelay = 100;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    //useEffect Hook allows you to perform side effects in your components.

    const typedTextSpan = typedTextRef.current;
    const cursorSpan = cursorRef.current;

    const type = () => {
      if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent +=
          textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
      }
    };

    const erase = () => {
      if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) {
          cursorSpan.classList.add("typing");
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(
          0,
          charIndex - 1
        );
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    };

    if (textArray.length) {
      setTimeout(type, newTextDelay + 250);
    }
  }, [textArray]);

  return (
    <>
      <div className="container">
        <div className="container-profile">
          <h2 className="main-name">Hello, I’m</h2>
          <h1 className="sub-name">Kosal Linnorak</h1>
          <h3 className="position">Software Developer</h3>
          <div className="container-loading">
            <h1>
              Coding is <span ref={typedTextRef} className="typed-text"></span>
              <span ref={cursorRef} className="cursor">
                &nbsp;
              </span>
            </h1>
            <div className="button-cv">
              <button className="btn-resume">
                <a href="#" download>
                  Get Resume
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="img-profile">
          <img
            src="https://htmldemo.net/lendex/lendex/assets/images/portrait/portrait-hero.png"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
};

export default LoadingWord;