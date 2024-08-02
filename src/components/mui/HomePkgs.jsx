"use client";
import React, { useState } from "react";
import { styled, Box, Typography, Button, ListItem } from "@mui/material";
import { useTheme } from "../../app/contexts/themeContext";

export const HomeTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  fontSize: "1.5rem",
  //   fontWeight: "600",
  color: theme.palette.text.primary,
  textAlign: "center",
  padding: "1em",
}));

export const HomePkgsBox = styled(Box)(({ theme }) => ({
  fontSize: "1.6rem",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  padding: "5rem 0",
  display: "flex",
  justifyContent: "center",
  "& .MuiTypography-root": {
    fontSize: "1.6rem",
  },
}));

export const HomePkgsInBox = styled(Box)(({ theme }) => ({
  maxWidth: "1300px",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
}));

export const HomePkgBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  flexBasis: "calc(33% - 2.3rem)",
}));

export const PkgImgCtr = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const HomeBlueBanner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10rem",
  backgroundSize: "cover",
  // backgroundRepeat: "repeat",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  backgroundImage: `linear-gradient(
      #0066bf81,
      #0066bf81),url(
    "/fast-cleaning-service-achtergrond.jpg"
  )`,
  backgroundAttachment: "fixed",

  "& .MuiTypography-root": { color: "white" },
}));

export const HomeBlueBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#22b8f0",
  color: theme.palette.text.primary,
  padding: "1.5rem",
  fontSize: "2rem",
  marginBottom: "3rem",
  "&:hover": {
    backgroundColor: "#1e9bc9",
  },
}));

export const HomeBlueLink = styled(Typography)(({ theme }) => ({
  color: "#0c7fcf",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "1.7rem !important",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const HomeCollageCtr = styled(Box)(({ theme }) => ({
  flexBasis: "calc(100%/5 - 3.2rem)",
  // backgroundColor: "red",
  height: "200px",
  "& img": {
    transition: "all 0.2s ease-in",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "&:hover": {
    cursor: "pointer",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
}));

export const HomeListItem = styled(ListItem)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '"•"',
    position: "absolute",
    left: 0,
    top: "10px",
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
  },
}));

const PkgExtraHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem !important",
  fontWeight: "bold",
  color: theme.palette.text.primary,
}));

const StyledBox4 = styled(Box)(({ theme }) => ({
  borderTop:
    theme.palette.mode === "light" ? "2px solid #000" : "2px solid #fff",
  backgroundColor: theme.palette.mode === "light" ? "#efefef" : "#212121",
  padding: "2rem",
}));

export const HomeHeroContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const HeroVideoContainer = styled(Box)(({ theme }) => ({
  "--overlay-dark":
    "linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.5))",
  "--overlay-light":
    "linear-gradient(rgba(220, 246, 255, 0.9), rgba(196, 246, 255, 0.6), rgba(220, 245, 255, 0.3))",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: "hidden",
  zIndex: "-1",
  background: "rgba(0,0,0,0.3)",

  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: `var(--overlay-${theme.palette.mode})`,
  },
}));

export const PackagesSection = styled(Box)(({ theme }) => ({
  fontSize: "1.6rem",
  backgroundColor: theme.palette.primary.main,
  padding: "5rem 0",
  display: "flex",
  justifyContent: "center",
  "& .MuiTypography-root": {
    fontSize: "1.6rem",
  },
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: "5rem 0",
  height: "90vh",
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
}));

export const Slider = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "200px" /* Increased width */,
  height: "350px" /* Increased height */,
  top: "12%",
  left: "calc(50% - 100px)" /* Center the larger slider */,
  transformStyle: "preserve-3d",
  transform: "perspective(1000px) rotateX(-18deg)",
  animation: "autoRun 20s linear infinite",
  transition: "animation-play-state 0.5s ease",
  borderRadius: "20px",
  zIndex: 3,

  "&:hover": {
    animationPlayState: "paused",
  },
}));

export const SliderItem = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: "0 0 0 0",
  transform:
    "rotateY(calc((var(--position) - 1) * (360 / var(--quantity)) * 1deg)) translateZ(510px)" /* Increased translateZ value for a larger circle */,
  transition: "transform 0.5s ease",
  zIndex: 2 /* Default z-index for items */,
  backgroundColor: "red",
  borderRadius: "20px",
  overflow: "hidden",
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(255 255 255 / 31%)"
      : "rgba(16 18 27 / 40%)",
  backdropFilter: "blur(20px)",
  boxShadow:
    theme.palette.mode === "light"
      ? "0 0 10px rgba(0, 0, 0, 0.2)"
      : "0 0 10px rgba(255, 255, 255, 0.2)",

  // "& img": {
  //   width: "100%",
  //   height: "100%",
  //   objectFit: "cover",
  // },
}));

export const PkgDetailsSection = React.forwardRef(function PkgDetailsSection(
  { pros = [], cons = [] },
  ref
) {
  return (
    <StyledBox4 sx={{ minHeight: "400px" }}>
      <Box sx={{ mb: "1.5rem" }}>
        {pros.map((pro, index) => (
          <Typography sx={{ lineHeight: "3rem" }} key={index}>
            {pro}
          </Typography>
        ))}
      </Box>
      <Box sx={{ mb: "1.5rem" }}>
        {cons.map((con, index) => (
          <Typography sx={{ lineHeight: "3rem" }} key={index}>
            {con}
          </Typography>
        ))}
      </Box>
    </StyledBox4>
  );
});

export const PkgExtrasSection = React.forwardRef(function PkgExtrasSection(
  { interior = [], exterior = [], detailing = [] },
  ref
) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <StyledBox4
      sx={{
        border:
          theme.palette.mode === "light"
            ? "1px solid #cbcbcb"
            : "1px solid #575757",
        padding: 0,
      }}
    >
      <Box
        sx={{ width: "100%", padding: "2rem" }}
        onClick={() => setOpen(!open)}
      >
        Extra Opties
      </Box>
      {open && (
        <>
          <Box
            sx={{
              padding: "2rem 2rem 0",
              display: interior.length > 0 ? "block" : "none",
            }}
          >
            <PkgExtraHeading>Interieur</PkgExtraHeading>
            {interior?.map((pro, index) => (
              <Typography sx={{ lineHeight: "3rem" }} key={index}>
                {pro}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              padding: "2rem 2rem 0",
              display: exterior.length > 0 ? "block" : "none",
            }}
          >
            <PkgExtraHeading>Exterieur</PkgExtraHeading>
            {exterior.map((con, index) => (
              <Typography sx={{ lineHeight: "3rem" }} key={index}>
                {con}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              padding: "2rem 2rem 0",
              display: detailing.length > 0 ? "block" : "none",
            }}
          >
            <PkgExtraHeading>Detailing</PkgExtraHeading>
            {detailing.map((detail, index) => (
              <Typography sx={{ lineHeight: "3rem" }} key={index}>
                {detail}
              </Typography>
            ))}
          </Box>
        </>
      )}
    </StyledBox4>
  );
});

// export const BackgroundPkgImage = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url('/PackageBackImage.avif')`, // Path to your background image
//   backgroundSize: "cover", // Ensure the image covers the entire area without stretching
//   backgroundPosition: "center", // Center the image within the container
//   backgroundRepeat: "no-repeat", // Prevent repeating the image
//   zIndex: -1, // Place the background behind all other content
//   // Add any additional styling if needed, like:
//   // opacity: 0.5, // To make the image less prominent
// }));
