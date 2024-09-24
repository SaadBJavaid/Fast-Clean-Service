"use client";
import React, {useEffect, useRef, useState} from "react";
import TOPOLOGY from "vanta/dist/vanta.topology.min";
import p5 from "p5";
//TOPOLOGY
//BIRDS
// WAVES

const VantaBackground = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TOPOLOGY({
          el: vantaRef.current,
          p5,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 600.0,
          scale: 1.0,
          scaleMobile: 1.0,

          color: "#80AECE",
          backgroundColor: "#fff",
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1, // Ensure it's behind other content
      }}
      ref={vantaRef}
    >
      {children}
    </div>
  );
};

export default VantaBackground;
