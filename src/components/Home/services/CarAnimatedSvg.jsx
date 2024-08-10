"use client";
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as Car } from "../../../../public/car.svg";
import "./car.css";

const CarModel = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(ref.current); // Stop observing after it has been in view
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return <Car className={`logo ${animate ? "active" : ""}`} />;
};

export default CarModel;
