// components/ScrollSpinningSvg.tsx

import React, {useEffect, useRef} from "react";
import {Box} from "@mui/material";
import {gsap} from "gsap";
// import { transform } from "lodash";

const ScrollSpinningSvg = (sx = {}) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const spinFactor = 0.1;

      if (svgRef.current) {
        gsap.to(svgRef.current, {
          rotation: scrollY * spinFactor,
          duration: 0.1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: -1,
      }}
    >
      <svg
        ref={svgRef}
        fill="#00000030"
        height="200px"
        width="200px"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          class="cls-1"
          d="M7,14A6.1,6.1,0,0,1,7,2V4.68613a3.47522,3.47522,0,0,0,0,6.62774ZM9,2V4.68613a3.47522,3.47522,0,0,1,0,6.62774V14A6.1,6.1,0,0,0,9,2Z"
        />
      </svg>
    </Box>
  );
};

export default ScrollSpinningSvg;
