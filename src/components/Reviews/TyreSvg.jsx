// components/TyreSvg.js
"use client";

import React, {useRef} from "react";
import {Box} from "@mui/material";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function TyreSvg() {
    const scrollRef = useRef();

    useGSAP(() => {
        const element = scrollRef.current;
        gsap.fromTo(
            element,
            { x: 0, rotation: 0, scale: 0.6 },
            {
                x: 300,
                delay: 5,
                rotation: 360,
                scale: 1,

                ease: "none",
                scrollTrigger: {
                    trigger: element,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        );
    }, []);

    return (
        <Box
            ref={scrollRef}
            className="animate"
            component="img"
            src="/tyre.svg"
            alt="Tyre"
            sx={{
                position: "absolute",
                opacity: 0.4,
                width: "120px",
                height: "120px",
                zIndex: 0,
                top: "-5px",
                left: 0,

                '@media (max-width: 900px)': {
                    top: "-15px",
                    left: "40px",
                },
                '@media (max-width: 600px)': {
                    top: "-10px",
                    left: "10px",
                },
            }}
        />
    );
}
