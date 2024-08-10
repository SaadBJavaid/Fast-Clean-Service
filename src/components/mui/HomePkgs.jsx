"use client";
import React, { useState } from "react";
import { styled, Box, Typography, Button, ListItem } from "@mui/material";
import { useTheme } from "../../app/contexts/themeContext";
import { maxHeaderSize } from "http";

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
  padding: "5rem 0",
  display: "flex",
  justifyContent: "center",
  "& .MuiTypography-root": {
    fontSize: "1.6rem",
  },
}));

export const HomePkgsInBox = styled(Box)(({ theme }) => ({
  maxWidth: "1440px",
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

  // backgroundRepeat: "repeat",
}));

export const HomeContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  // backgroundImage: `radial-gradient(${
  //   theme.palette.mode === "dark"
  //     ? "rgba(255, 255, 255, 0.4)"
  //     : "rgba(0, 0, 0, 0.4)"
  // } 9%, transparent 9%)`,
  // backgroundPosition: "0% 0%",
  // backgroundSize: "50px 50px",
  // backgroundAttachment: "fixed",
}));

export const HomeBlueBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#80AECE",
  color: theme.palette.text.primary,
  padding: "1.5rem",
  fontSize: "2rem",
  marginBottom: "3rem",
  "&:hover": {
    backgroundColor: "#A0D7E4",
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
  height: "calc(100vh + 7rem)",
  width: "100%",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 10,

  "& .content": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "20rem",
    // clipPath: "ellipse(50% 50% at 50% 0%)",
    backgroundColor: "transparent",
    overflow: "hidden",
  },

  "& .content__in": {
    position: "relative",
    zIndex: 2 /* Ensure it is above the pseudo-element */,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    clipPath: "ellipse(50% 80% at 50% 0%)",
    backgroundColor: "white",
    // maskImage:
    //   "radial-gradient(circle closest-side, transparent 50%, black 51%)",
    maskSize: "100% 100%",
    maskRepeat: "no-repeat",
  },
}));

export const HeroVideoContainer = styled(Box)(({ theme }) => ({
  "--overlay-dark":
    "linear-gradient( rgba(0, 0, 0, 0.7), rgba(33, 33, 33, 0.8), #0a0a0a)",
  "--overlay-light":
    "linear-gradient(rgba(54, 54, 54, 0.8), rgba(26, 26, 26, 0.6), #0000004c)",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: "hidden",
  zIndex: "-1",
  background: "rgba(0,0,0,0.3)",
  // mixBlendMode: ,

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

export const StatsContainer = styled(Box)(({ theme }) => ({
  padding: "0rem",
  marginTop: "6rem",
  // background: `linear-gradient(to bottom, white, ${theme.palette.secondary.main})`,
}));

export const PackagesSection = styled(Box)(({ theme }) => ({
  fontSize: "1.6rem",
  // backgroundColor: theme.palette.primary.main,
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

export const CardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  // left: "50%",
  // top: "65%",
  // transform: "translate(-50%, -50%)",
  width: "100%",
  // height: "100%",
  height: "700px",
  overflow: "hidden",
  // boxShadow: "0 0 2px 2px #dbdbdb",
  borderRadius: "20px",
}));

export const Cards = styled(Box)(({ theme }) => ({
  width: "max-content",
  mt: "5rem",
}));

export const Card = styled(Box)(({ theme }) => ({
  width: "280px",
  height: "160px",
  background:
    "linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), var(--url)",
  backgroundPosition: "50% 50%",
  display: "inline-block",
  transition: "0.5s",
  backgroundSize: "cover",
  position: "absolute",
  zIndex: 1,
  top: "85%",
  transform: "translate(0,-50%)",
  borderRadius: "20px",
  boxShadow: "0 0px 15px 1px #505050",
  backgroundRepeat: "no-repeat",

  // This is the card content div
  "& div": {
    position: "absolute",
    top: "50%",
    left: "100px",
    width: "450px",
    textAlign: "left",
    padding: 0,
    color: "#eee",
    transform: "translate(0, -50%)",
    display: "none",
  },
}));

export const CardName = styled(Typography)(({ theme }) => ({
  fontSize: "4rem !important",
  fontWeight: "bold",
  opacity: 0,
  animation: "showContent 1s ease-in-out forwards",
  color: "#00c3ff",
}));

export const CardDesc = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontSize: "2.5rem !important",
  opacity: 0,
  animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  margin: "2rem 0",
}));

export const CardBtn = styled(Button)(({ theme }) => ({
  padding: "1rem 2rem",
  border: "none",
  opacity: 0,
  animation: "showContent 1s ease-in-out 0.6s 1 forwards",
  backgroundColor: theme.palette.primary.accent,
  color: "white",
  fontSize: "2rem !important",
}));

export const CardControls = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "3rem",
  zIndex: 20,
  textAlign: "center",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  gap: "1rem",
}));

export const CardBtnNav = styled(Button)(({ theme }) => ({
  fontSize: "2rem !important",
  backgroundColor: "white",
  color: theme.palette.secondary.main,
  height: "5rem",
  width: "5rem",
  borderRadius: "50%",
  padding: 0,
  minWidth: "auto",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export const ServicesImgContainer = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  position: "relative",
  flexBasis: "52.5%",

  "& .content": {
    content: "''",
    width: "100%",
    backgroundColor: "transparent",
    overflow: "hidden",
    clipPath:
      "polygon(100% 0, 100% 100%, 5% 100%, 5% 70%, 0 50%, 5% 30%, 5% 0)",
    maxHeight: "500px",

    "& svg": {
      "& path": {
        fill: theme.palette.primary.main,
      },
    },

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
}));

export const HomeServicesBox = styled(Box)(({ theme }) => ({
  fontSize: "1.6rem",
  padding: "5rem 0",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.palette.mode === "light" ? "#eeedeb" : "#141414",

  "& .MuiTypography-root": {
    fontSize: "1.6rem",
  },
}));

export const ServiceSubheading = styled(Typography)(({ theme }) => ({
  fontFamily: "BDSansBold",
  fontWeight: "bold",
  fontSize: "3.5rem !important",
  opacity: 0,
  animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  margin: "2rem 0",
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

export const PackageSliderWrapper = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/packageimage.jpg)" /* Path to the image */,
  backgroundSize: "cover" /* Ensure the image covers the container */,
  backgroundPosition: "center" /* Center the image */,
  backgroundRepeat: "no-repeat" /* Prevent image from repeating */,
  backgroundAttachment: "fixed" /* Fix the background image */,
  padding: "20px 40px" /* Padding for the content */,
  display: "flex",
  alignItems: "start" /* Center content vertically */,
  justifyContent: "center" /* Center content horizontally */,
}));

export const ServicesOverviewWrapper = styled(Box)(({ theme }) => ({
  // padding: "20px 40px" /* Padding for the content */,
}));

export const HomeWrapper = styled(Box)(({ theme }) => ({
  padding: "34px 40px" /* Padding for the content */,
  maxWidth: "1440px",
  margin: "auto",
}));
