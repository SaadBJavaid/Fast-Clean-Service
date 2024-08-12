"use client";
import { styled, Box } from "@mui/material";

export const LeftSection = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%", // Ensure it takes full height
  padding: theme.spacing(4, 2), // Add padding top and bottom
  paddingLeft: theme.spacing(4), // Add padding to the left side
  display: "flex",
  flexDirection: "column",
  justifyContent: "center", // Center content vertically
  alignItems: "flex-start", // Align content to the left
  boxSizing: "border-box", // Ensure padding is included in total width/height
}));

export const RightSection = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%", // Ensure it takes full height
  position: "relative", // Position relative for the Image component to fill
  right: "-30vw", // Move the right section 25% off the viewport to the right
  overflow: "hidden", // Hide the part of the image that overflows
  boxSizing: "border-box", // Ensure padding is included in total width/height
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
