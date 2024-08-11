"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default function HeadingLinesAnimation({ text }) {
  const scrollRef = useRef();

  React.useEffect(() => {
    const element = scrollRef.current;

    gsap.fromTo(
      element.querySelector(".heading"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom", // Trigger when the bottom of the element hits the bottom of the viewport
          once: true, // Run animation only once
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".above-line"),
      {
        x: "-200%",
      },
      {
        x: "0%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom", // Trigger when the bottom of the element hits the bottom of the viewport
          once: true, // Run animation only once
        },
      }
    );

    gsap.fromTo(
      element.querySelector(".below-line"),
      {
        x: "200%",
      },
      {
        x: "0%",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "bottom bottom", // Trigger when the bottom of the element hits the bottom of the viewport
          once: true, // Run animation only once
        },
      }
    );
  }, []);

  return (
    <div
      ref={scrollRef}
      style={{
        display: "inline-block",
        textAlign: "center",
        position: "relative",
        margin: "20px 0",
      }}
    >
      <div
        className="above-line"
        style={{
          position: "absolute",
          left: "-70%",
          width: "100%",
          height: "3px",
          background: "linear-gradient(to right, #cfcfcf, #00607a)",
          top: "0",
        }}
      ></div>
      <h2
        className="heading"
        style={{
          fontSize: "60px",
          fontWeight: "bold",
          display: "inline-block",
          margin: "0",
          position: "relative",
          zIndex: 1,
          padding: "12px 0px",
        }}
      >
        {text}
      </h2>
      <div
        className="below-line"
        style={{
          position: "absolute",
          right: "-70%",
          width: "100%",
          height: "3px",
          background: "linear-gradient(to left, #cfcfcf, #00607a)",
          bottom: "1px",
        }}
      ></div>
    </div>
  );
}
