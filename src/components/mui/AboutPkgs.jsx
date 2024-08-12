"use client";
import React, { useState } from "react";
import { styled, Box, Typography, Button, ListItem } from "@mui/material";
import { useTheme } from "../../app/contexts/themeContext";

export const AboutContainer = styled(Box)(({ theme }) => ({
  padding: "2rem",
  display: "flex",
  //   flexDirection: "column",
  gap: "2rem",
  maxWidth: "1300px",
  width: "100%",
  marginTop: "-8rem",
  backgroundColor:
    theme.palette.mode === "light"
      ? theme.palette.common.white
      : theme.palette.common.black,
}));

export const AboutItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexBasis: "50%",
  gap: "3rem",
}));

export const AboutImgContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const AboutItemSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

export const AboutItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "bold",
  color: "#80AECE",
  //   lineHeight: 1,
  marginBottom: "1.5rem",
}));

export const AboutItemDetail = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#85868c",
  lineHeight: 1.5,
  //   marginBottom: "2rem",
}));

export const AboutUsWrappers = styled(Typography)(({ theme }) => ({
  padding: "20px 30px",
}));

export const Carousel = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
}));

export const CarouselContentContainer = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  transition: "all 300ms ease-in-out",
  marginBottom: "8rem",
}));

export const CarouselContentItem = styled(Box)(({ theme }) => ({

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  transition: "all 300ms ease-in-out",
  // backgroundColor: "red",
  padding: "2rem 3rem",
  borderRadius: "16px",
  // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(6px)",
  border: "1px solid rgba(255, 255, 255, 0.45)",
  overflow: "hidden",
}));

export const CarouselImg = styled(Box)(({ theme }) => ({
  minHeight: "10rem",
  width: "10rem",
  border: `3px solid ${theme.palette.primary.accent}`,
  borderRadius: "50%",
  marginBottom: "2rem",
}));

export const CarouselDetails = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  marginBottom: "2rem",
}));

export const CarouselSignatures = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  alignSelf: "flex-start",
}));

export const CarouselName = styled(Typography)(({ theme }) => ({
  fontSize: "1.8rem !important",
  color: theme.palette.primary.accent,
}));

export const CarouselDate = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem !important",
  fontWeight: "bold",
  color: "#707070",
}));

export const CarouselControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: "0",
  zIndex: "3",
  display: "flex",
  gap: "0.5rem",
  alignSelf: "flex-end",
  justifyContent: "flex-end",
}));

export const CarouselDot = styled(Box)(({ theme }) => ({
  width: "10px",
  height: "10px",
  backgroundColor: "#00000029",
  borderRadius: "50%",
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