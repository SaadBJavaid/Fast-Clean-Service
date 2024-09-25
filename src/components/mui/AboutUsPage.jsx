"use client";
import {Box, styled} from "@mui/material";

export const LeftSection = styled(Box)(({ theme }) => ({
  width: "50%",
  marginRight: "auto",
  height: "100%", // Ensure it takes full height
  padding: theme.spacing(4, 2), // Add padding top and bottom
  paddingLeft: theme.spacing(4), // Add padding to the left side
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically
  alignItems: "flex-start", // Align content to the left
  boxSizing: "border-box", // Ensure padding is included in total width/height

  [theme.breakpoints.down("sm")]: {
    paddingLeft: theme.spacing(2), // Reduce left padding on small screens
    paddingRight: theme.spacing(2),
  },
}));

export const RightSection = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh", // Ensure it takes full height
  position: "absolute", // Position relative for the Image component to fill
  right: "-55%",
  top: "5%",
  bottom: 0,
  boxSizing: "border-box",
  zIndex: 2,
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",

  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));


export const ContainerWrapper = styled(Box)(({ theme }) => ({
  display: "flex",

  height: "100vh", // Full viewport height
  padding: theme.spacing(4, 0), // Add padding top and bottom
  margin: 0, // Remove default margin
}));

export const ServicesItemHeading = styled(Box)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#0c7fcf",
  marginBottom: theme.spacing(2),
}));
