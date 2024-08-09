"use client";
import React, { useEffect } from "react";
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
            color: "white",
            fontFamily: "BDSansBold",
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
            // color: theme.palette.primary.accent,
            color: "#028EB5",
            textTransform: "uppercase",

            "& span": {
              backgroundColor: theme.palette.primary.accent,
              padding: "0.5rem 1.5rem",
              borderRadius: "50px",
              ml: "1rem",
            },
          }}
          variant="h6"
        >
          On Your Location
          <span>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              style={{
                color: "white",
                // marginleft: "1rem",
              }}
            />
          </span>
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
        {/* <Stats /> */}
      </Box>
      <div className="content">
        {theme.palette.mode === "light" && (
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 15"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0,10 H40 L50,6 L60,10 H100 V50 H0 Z"
              fill={theme.palette.mode === "light" ? "white" : "#212121"}
            />
          </svg>
        )}
      </div>
    </HomeHeroContainer>
  );
};

export default AnimatedHomeContent;
