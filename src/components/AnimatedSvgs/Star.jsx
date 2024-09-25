"use client";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Star() {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/svgsjson/star.json",
      });

      animationRef.current.addEventListener("DOMLoaded", () => {
        const elements = animationRef.current.renderer.elements;

        elements.forEach((element) => {
          if (element && element.el) {
            element.el.style.fill = "#ffffff";
          }
        });
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100px", height: "100px" }} />;
}
