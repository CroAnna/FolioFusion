import React, { useState, useEffect, useRef, useContext } from "react";
import { PortfolioContext } from "./PortfolioProvider";

const SHAPES = ["square", "triangle"];
const COLOR_DIGIT = "ABCDEF1234567890";

const Confetti = () => {
  const { confettiTriggerState, setConfettiTriggerState } =
    useContext(PortfolioContext);
  const containerRef = useRef(null);
  useEffect(() => {
    if (confettiTriggerState) {
      setConfettiTriggerState(true);
      // reset the confetti after a short delay
      setTimeout(() => {
        setConfettiTriggerState(false);
      }, 5000);
    }
  }, [confettiTriggerState]);

  useEffect(() => {
    if (confettiTriggerState) {
      generateConfetti();
    }
  }, [confettiTriggerState]);

  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
  };
  const generateConfetti = () => {
    const container = containerRef.current;
    if (container) {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        const positionX = Math.random() * window.innerWidth;
        const positionY = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // set confetti styles
        confetti.style.left = `${positionX}px`;
        confetti.style.top = `${positionY}px`;
        confetti.style.transform = `rotate(${rotation}deg)`;
        confetti.className =
          "confetti " + SHAPES[Math.floor(Math.random() * 3)];
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = generateRandomColor(); // append confetti to the container
        container.appendChild(confetti);
        // remove confetti element after animation duration (5 seconds)
        setTimeout(() => {
          setConfettiTriggerState(false);
          container.removeChild(confetti);
        }, 5000);
      }
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      ref={containerRef}
      id="confetti-container"
    ></div>
  );
};

export default Confetti;
