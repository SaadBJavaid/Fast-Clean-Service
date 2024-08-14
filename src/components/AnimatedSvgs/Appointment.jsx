"use client";
import { useEffect } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

export default function Appointment() {
  useEffect(() => {
    // Define the custom element only on the client side
    defineElement(lottie.loadAnimation);
  }, []);

  return (
    <lord-icon
      speed="1.5"
      delay="2000"
      trigger="loop"
      src="/svgsjson/appointment.json"
      style={{ width: "50px", height: "50px" }} // Customize the style as needed
    ></lord-icon>
  );
}
