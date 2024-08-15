"use client";
import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, Box } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../../../app/contexts/themeContext";
import { HomeHeroContainer, HeroVideoContainer } from "../../mui/HomePkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
// import styleHome from "../../../app/Home.module.css";

const AnimatedHomeContent = () => {
  const { theme } = useTheme();
  useGSAP(() => {
    gsap.fromTo(".animate", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 2, stagger: 0.2 });
  }, []);
  // GSAP animations

  const typographyRef = useRef(null);
  const tlRef = useRef(null);
  const [currentText, setCurrentText] = useState("");

  const lines = [
    "Your clean card is our calling card!",
    "The number 1 in the field of specialist car cleaning!",
    "We come on location.",
  ];

  useEffect(() => {
    const container = typographyRef.current;

    tlRef.current = gsap.timeline({ repeat: -1 });

    lines.forEach((line, index) => {
      tlRef.current
        .to(container, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => setCurrentText(line),
        })
        .to(container, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to({}, { duration: 3 }); // Pause for 2 seconds
    });

    // Start with the first line visible
    setCurrentText(lines[0]);
    gsap.set(container, { opacity: 1 });

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, []);

  return (
    <HomeHeroContainer>
      <HeroVideoContainer sx={{}}>
        <video src="/video1.mp4" autoPlay loop muted />
      </HeroVideoContainer>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography
          className="animate"
          variant="h1"
          sx={{
            letterSpacing: "12px",
            fontWeight: "bold",
            fontSize: {
              xs: "1.5rem",
              sm: "2.5rem",
              md: "3.5rem",
              lg: "4.5rem",
              xl: "5.5rem",
            },
            pb: "",
            marginBottom: "10rem",
            color: "white",
            fontFamily: "BDSansBold",
          }}
        >
          FAST CLEAN SERVICE
        </Typography>
        <div ref={typographyRef}>
          <Typography
            className="animate"
            sx={{
              letterSpacing: "2px",
              textAlign: "center",
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "5rem",
                lg: "6rem",
                xl: "7rem",
              },
              marginBottom: "6px",
              color: "primary.accent",
              "& span": {
                backgroundColor: theme.palette.primary.accent,
                padding: "0.5rem 1.5rem",
                borderRadius: "50px",
                ml: "1rem",
              },
            }}
            variant="h2"
          >
            {currentText}
          </Typography>
        </div>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "2rem",
          left: "2rem",
          bottom: "0",
        }}
      >
        {/* <Stats /> */}
      </Box>
      <div className="content">
        {theme.palette.mode === "light" && (
          <svg width="100%" height="100%" viewBox="0 0 100 15" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,10 H40 L50,6 L60,10 H100 V50 H0 Z" fill={theme.palette.primary.main} />
          </svg>
        )}
      </div>
    </HomeHeroContainer>
  );
};

export default AnimatedHomeContent;
