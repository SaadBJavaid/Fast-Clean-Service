"use client";
import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import { gsap } from "gsap";
import { useTheme } from "../../../contexts/themeContext";
import { HomeHeroContainer } from "../../mui/HomePkgs";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import HomeSocialsBox from "./HomeSocialsBox";

const AnimatedHomeContent = () => {
  const { theme } = useTheme();

  return (
    <HomeHeroContainer
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#000",
        backgroundImage: 'url("/homebg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "8",
      }}
    >
      <HomeSocialsBox />
      <Box
        sx={{
          marginTop: "8%",
          marginBottom: "10%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              animation: "fadeIn 1s ease-in-out forwards",
              // marginTop: "-30rem",
              letterSpacing: "8px",
              fontWeight: 700,
              marginBottom: "6rem",
              fontFamily: "Unbounded",
              fontSize: {
                xs: "2rem",
                sm: "3.5rem",
                md: "4rem",
                lg: "4.8rem",
                xl: "4.8rem",
              },
              textAlign: "center",
              color: "white",
            }}
          >
            FAST CLEAN SERVICE
          </Typography>

          <Typography
            sx={{
              letterSpacing: "2px",
              textAlign: "center",
              fontFamily: "Unbounded",
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "4rem",
              },
              color: "white",
              marginBottom: "7rem",
            }}
            variant="h2"
          >
            The number 1 in the field of specialist car cleaning!
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "2rem",
            flexDirection: { xs: "column", sm: "row" },
            margin: "0 auto",
            marginBottom: "8rem",
          }}
        >
          <Button
            variant="contained"
            sx={{
              padding: "1.5rem 3rem",
              fontSize: "1.6rem",
              fontWeight: "bold",
              backgroundColor: "primary.accentDark",
              color: "white",
              fontFamily: "DMSans",
              "&:hover": {
                backgroundColor: theme.palette.primary.accent,
              },
            }}
          >
            Book Now
          </Button>
        </Box>

        {/* Scroll Down Button */}
        <IconButton
          sx={{
            animation: "bubbleDown 1s ease-in-out infinite 1s",
            backgroundColor: "transparent",
            color: "white",
            padding: "1rem",
            border: "1px solid white",
            width: "40px",
            height: "40px",
          }}
        >
          <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
        </IconButton>
      </Box>
    </HomeHeroContainer>
  );
};

export default AnimatedHomeContent;
