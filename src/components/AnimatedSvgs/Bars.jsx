"use client";
import {useEffect, useRef} from "react";
import lottie from "lottie-web";

export default function Bars() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      // Initialize the Lottie animation
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current, // the DOM element where the animation will be rendered
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/svgsjson/bars.json", // path to the animation JSON file
      });
    }

    // Cleanup animation on component unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy(); // Ensure animation is properly destroyed
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100px", height: "100px" }} // Customize the style as needed
    />
  );
}
