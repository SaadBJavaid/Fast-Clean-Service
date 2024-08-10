"use client";
import { useEffect } from "react";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

export default function Customer() {
  useEffect(() => {
    // Define the custom element only on the client side
    defineElement(lottie.loadAnimation);
  }, []);

  return (
    <lord-icon
      delay="2000"
      trigger="loop"
      src="/svgsjson/customer.json"
      style={{ width: "100px", height: "100px" }} // Customize the style as needed
    ></lord-icon>
  );
}
