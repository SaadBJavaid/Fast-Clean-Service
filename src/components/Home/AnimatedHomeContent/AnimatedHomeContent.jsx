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
        <video src="/video1.mp4" autoPlay loop muted />
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
        <Button
          className="animate"
          size="large"
          variant="contained"
          color="secondary"
          sx={{
            padding: {
              sm: "1.2rem 2.4rem",
              md: "1.4rem 2.8rem",
              lg: "1rem 3rem",
            },
            marginBottom: "1rem",
          }}
        >
          Book Now
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "1rem",
          left: "0.5rem",
          right: "0.5rem",
        }}
      >
        <Stats />
      </Box>
    </HomeHeroContainer>
  );
};

export default AnimatedHomeContent;