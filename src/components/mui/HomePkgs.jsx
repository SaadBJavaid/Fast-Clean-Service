"use client";
import React, { useState } from "react";
import {
  styled,
  Box,
  Typography,
  Button,
  ListItem,
  Paper,
} from "@mui/material";
import { useTheme } from "../../app/contexts/themeContext";
import { context } from "@react-three/fiber";

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

export const HomePkgBox = styled(Box)(({ theme, bg = null }) => ({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  flexBasis: "calc(33% - 2.3rem)",

  // backgroundImage: `linear-gradient(to bottom right, #eeedebe5, #eeedebe5), url(${bg})`,
  // // backgroundBlendMode: "exclusion",
  // backgroundPosition: "center",
  // backgroundSize: "cover",
  // backgroundRepeat: "no-repeat",
}));

export const PkgImgCtr = styled(Box)(({ theme, img }) => ({
  width: "100%",
  height: "100%",
  background: `linear-gradient(to bottom, #000000, #000000), url(${img})`,
  backgroundBlendMode: "screen",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
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
  paddingTop: "25rem",
  // justifyContent: "center",
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
    "linear-gradient(rgba(40, 40, 40, 0.9), rgba(26, 26, 26, 0.8), #0000004c)",
  position: "fixed",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  overflow: "hidden",
  zIndex: "-100",
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
  paddingTop: "2.5rem",
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
  height: "600px",
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
    "linear-gradient(to bottom right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), var(--url)",
  backgroundPosition: "50% 50%",
  display: "inline-block",
  transition: "0.5s",
  backgroundSize: "cover",
  position: "absolute",
  zIndex: 1,
  top: "85%",
  transform: "translate(0,-60%)",
  borderRadius: "20px",
  boxShadow: "0 0px 15px 1px #505050",
  backgroundRepeat: "no-repeat",

  // This is the card content div
  "& div": {
    position: "absolute",
    top: "50%",
    left: "100px",
    // width: "450px",
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
  marginBottom: "4rem",
}));

export const CardDesc = styled(Typography)(({ theme }) => ({
  width: "100%",
  fontWeight: "bold",
  fontSize: "2.5rem !important",
  opacity: 0,
  animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  margin: "2rem 0",
}));

export const CardBtn = styled(Button)(({ theme }) => ({
  marginTop: "2rem",
  fontWeight: "700",
  opacity: 0,
  animation: "showContent 1s ease-in-out 0.6s 1 forwards",

  padding: "1.6rem 3.2rem",
  borderRadius: "200px",
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.primary.accent}`,
  "&:hover": {
    backgroundColor: theme.palette.primary.accent,
    color: "white",
    // border: "none",
  },
  color: theme.palette.primary.accent,
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
    maxHeight: "580px",

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

export const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: "5.5rem !important",
  fontWeight: "bold",
  // textAlign: "center",
  fontFamily: "BDSansBold",
  position: "relative",
  zIndex: 2,
  animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  margin: "2rem 0",
  color: theme.palette.mode === "light" ? "#00111A" : "#fff",
}));

export const SectionHeadingCentered = styled(Typography)(({ theme }) => ({
  fontSize: "5.5rem !important",
  fontWeight: "bold",
  // textAlign: "center",
  fontFamily: "BDSansBold",
  position: "relative",
  zIndex: 2,
  animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  margin: "2rem 0",
  color: theme.palette.mode === "light" ? "#00111A" : "#fff",
  textAlign: "center",
}));

export const ServiceSubheading = styled(Typography)(({ theme, special }) => ({
  fontFamily: "BDSansBold",
  fontWeight: "bold",
  fontSize: "4.5rem !important",
  color: special
    ? theme.palette.primary.accent
    : theme.palette.primary.contrastText,
  opacity: 0,
  animation: "showContent 1s ease-in-out 0.3s 1 forwards",
  margin: "3rem 0",
}));

export const ServicesDesc = styled(Typography)(({ theme }) => ({
  margin: "2rem 0",
  lineHeight: 1.5,
  fontSize: "2.5rem !important",
  color: "#aaa",

  "& .focus": {
    fontFamily: "JakartaSansBold",
  },

  "& span": {
    display: "block",
  },
}));

export const ServicesTagline = styled(Typography)((theme) => ({
  margin: "2.5rem 0",
  lineHeight: 1.1,
  fontSize: "3.1rem !important",
  fontWeight: "bold",

  "& .focus": {
    fontFamily: "JakartaSansBold",
  },

  "& span": {
    display: "block",
  },
}));

export const ServicesBtn = styled(Button)(({ theme, special }) => ({
  padding: "15px",
  fontSize: "1.5rem",
  fontWeight: "bold",

  padding: "1.6rem 3.2rem",
  borderRadius: "200px",
  backgroundColor: special ? theme.palette.primary.accent : "transparent",
  border: `1px solid ${theme.palette.primary.accent}`,
  "&:hover": {
    backgroundColor: special ? "transparent" : theme.palette.primary.accent,
    color: special ? theme.palette.primary.accent : "white",
    // border: "none",
  },
  color: theme.palette.primary.accent,
}));

// export const ServicesItem = styled(Paper)(({ theme }) => ({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   boxShadow: "none",
// }));

export const ServicesItem = styled(Paper)(
  ({ theme, rowStart, rowEnd, colStart, colEnd }) => ({
    // padding: 16,
    textAlign: "center",
    gridRow: `${rowStart} / ${rowEnd}`,
    gridColumn: `${colStart} / ${colEnd}`,
    display: "flex",
    flexDirection: "column",
    boxShadow: "none",
    borderRadius: 0,
    // minHeight: "600px",
    position: "relative",
    overflow: "hidden",
    borderRadius: "16px",

    "&:hover": {
      "& .service__content": {
        bottom: 0,
      },
    },
  })
);

export const ServicesGrid = styled(Paper)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(9, 8rem)",
  // gap: "16px",
  boxShadow: "none",
  gap: "2rem",
  backgroundColor: "transparent",
  backgroundImage: "none",
}));

export const ServiceContent = styled(Box)(({ theme }) => ({
  padding: "0.5rem 2rem",
  display: "flex",
  // margin: "0 2rem",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  flexBasis: "50%",
  backgroundColor: "rgba(82, 82, 82, 0.235)",
  backdropFilter: "blur(6px)",
  // backgroundColor: theme.palette.mode === "light" ? "#ebedff" : "#000",
  minHeight: "500px",
  position: "absolute",
  bottom: "-58%",
  left: "0",
  right: "0",
  transition: "all 0.3s ease-in",
}));

export const ServiceName = styled(Typography)(({ theme }) => ({
  fontFamily: "BDSansBold",
  textTransform: "uppercase",
  fontSize: "3.5rem !important",
  color: theme.palette.primary.accent,
  textAlign: "left",
}));

export const ServiceCat = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem !important",
  // marginBottom: "2.5rem",
  textAlign: "left",
  color:
    theme.palette.mode === "light"
      ? theme.palette.primary.light
      : theme.palette.primary.dark,
}));

export const ServiceDetails = styled(Box)(({ theme }) => ({
  fontSize: "2rem !important",
  textAlign: "left",
  color: theme.palette.primary.light,
  // color: theme.palette.primary.accent,
  "& span": {
    display: "block",
  },
}));

export const ServiceDetail = styled(Typography)(({ theme }) => ({
  textAlign: "left",
  color: theme.palette.primary.light,
  marginBottom: "1.5rem",
  // color: theme.palette.primary.accent,

  "& .MuiTypography-root": {
    fontSize: "2rem !important",
    color: theme.palette.primary.accent,
  },

  "& span": {
    display: "block",

    "&:before": {
      content: '"• "',
    },
  },
}));

export const ServiceBtn = styled(Button)(({ theme }) => ({
  fontSize: "2rem !important",
  textAlign: "left",
  display: "flex",
  gap: "1rem",
  marginBottom: "3rem",
  borderRadius: 0,
  padding: "1rem 1.5rem",
  backgroundColor: theme.palette.primary.accent2,
  color: theme.palette.primary.accent,
  overflow: "hidden",

  "& .MuiBox-root": {
    position: "relative",
    overflow: "hidden",
    height: "100%",
    width: "20px",
    height: "20px",
  },

  "& svg": {
    position: "absolute",
    // top: 0,
    transition: "all 0.3s ease-in",

    "&:nth-of-type(1)": {
      left: "-100%",
    },

    "&:nth-of-type(2)": {
      left: "0%",
    },
  },

  "&:hover": {
    "& .MuiBox-root svg": {
      "&:nth-of-type(1)": {
        left: "0",
      },

      "&:nth-of-type(2)": {
        left: "100%",
      },
    },
  },
}));

export const Carousel = styled(Box)(({ theme }) => ({
  maxWidth: "70rem",
  overflow: "hidden",
  position: "relative",
}));

export const CarouselContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  transition: "all 300ms ease-in-out",
  marginBottom: "8rem",
  // gap: "2rem",
}));

export const CarouselContentItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  justifyContent: "center",
  transition: "all 300ms ease-in-out",
  // backgroundColor: "red",
  padding: "1rem",
  // margin: "0 3rem",
  // background: "#eee9e987",
  // backgroundColor: "#080a0d",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b8_Ellipse%2012.webp'), url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b7_Noise%20%26%20Texture.webp')"
      : "url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b8_Ellipse%2012.webp'), url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b7_Noise%20%26%20Texture.webp')",
  backgroundPosition: "0 0, 0 0",
  backgroundSize: "cover",
  borderRadius: "16px",
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border:
    theme.palette.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.45)"
      : "1px solid rgba(0, 0, 0, 0.45)",
  overflow: "hidden",
}));

export const CarouselItemInner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  transition: "all 300ms ease-in-out",
  padding: "3rem",
  backdropFilter: "blur(20px)",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b8_Ellipse%2012.webp'), url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b7_Noise%20%26%20Texture.webp')"
      : "url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b8_Ellipse%2012.webp'), url('https://cdn.prod.website-files.com/667d4cb2a5160e521941d969/667d4cb2a5160e521941d9b7_Noise%20%26%20Texture.webp')",
  backgroundPosition: "0 0, 0 0",
  backgroundSize: "cover",
  borderRadius: "16px",
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  border:
    theme.palette.mode === "dark"
      ? "1px solid rgba(255, 255, 255, 0.45)"
      : "1px solid rgba(0, 0, 0, 0.45)",
  overflow: "hidden",
  backdropFilter: "blur(20px)",
  height: "100%",
}));

export const CarouselImg = styled(Box)(({ theme }) => ({
  minHeight: "4.5rem",
  width: "4.5rem",
  border: `2px solid ${theme.palette.primary.accent}`,
  borderRadius: "50%",
  marginRight: "1rem",
}));

export const CarouselStarsBox = styled(Box)(({ theme, stars }) => ({
  display: "flex",
  marginBottom: "1rem",
  fontSize: "2rem",

  "& svg": {
    marginRight: "0.3rem",
    color: `${theme.palette.primary.accent2}`,

    "&.colorstar": {
      color: "gold",
    },
  },
}));

export const CarouselDetails = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: "2rem",
  textAlign: "left",

  "& h5": {
    fontSize: "2.5rem",
  },
}));

export const CarouselSignatures = styled(Box)(({ theme }) => ({
  display: "flex",
  // flexDirection: "column",
  alignItems: "center",
  // marginTop: "auto",
}));

export const CarouselName = styled(Typography)(({ theme }) => ({
  fontSize: "2rem !important",
  fontWeight: "bold",
  fontFamily: "JakartaSansBold",
  // color: theme.palette.primary.accent,
  // lineHeight: "1.5",
}));

export const CarouselDate = styled(Typography)(({ theme }) => ({
  fontSize: "1rem !important",
  fontWeight: "bold",
  color: "#707070",
}));

export const CarouselControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "52%",
  width: "100%",
  zIndex: "3",
  display: "flex",
  justifyContent: "space-between",
}));

export const CarouselBtn = styled(Button)(({ theme }) => ({
  width: "2rem",
  height: "6rem",
  borderRadius: "50%",

  "& svg": {
    height: "100%",
    width: "100%",
  },
}));

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


export const Badge = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.primary.accent,
  color: "white",
  padding: "0.2rem 0.5rem",
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: "bold",
  display: "inline-block",
  height: "100%",
  margin: "0 auto",
}));
