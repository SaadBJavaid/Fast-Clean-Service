"use client";
import React, { useEffect } from "react";
import { Typography, Button, Box } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../../../app/contexts/themeContext";
import { HomeHeroContainer, HeroVideoContainer } from "../../mui/HomePkgs";
import Stats from "../stats/Stats";
// import styleHome from "../../../app/Home.module.css";

const AnimatedHomeContent = () => {
  const { theme } = useTheme();
  useGSAP(() => {
    gsap.fromTo(
      ".animate",
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 2, stagger: 0.2 }
    );
  }, []);
  // GSAP animations

  return (
    <HomeHeroContainer>
      <HeroVideoContainer sx={{}}>
        <video src="/fastclean.mp4" autoPlay loop muted />
      </HeroVideoContainer>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          className="animate"
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "3rem",
              sm: "4rem",
              md: "5rem",
              lg: "6rem",
              xl: "7rem",
            },
            pb: "0",
            marginBottom: "8px",
          }}
        >
          FAST CLEAN SERVICE
        </Typography>
        <Typography
          className="animate"
          sx={{
            fontSize: {
              sm: "2rem",
              md: "2.5rem",
              lg: "3rem",
            },
            marginBottom: "6px",
          }}
          variant="h6"
        >
          ON YOUR LOCATION
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          right: "2rem",
          left: "2rem",
          bottom: "0.5rem",
        }}
      >
        <Stats />
      </Box>
    </HomeHeroContainer>
  );
};

export default AnimatedHomeContent;
