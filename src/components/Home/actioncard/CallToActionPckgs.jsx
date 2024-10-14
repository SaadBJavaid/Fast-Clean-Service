"use client";
import { Box, Button, Paper, Typography, styled } from "@mui/material";
import { ServiceBtn1 } from "../../mui/HomePkgs";
import Image from "next/image";

export const CTAContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10.2rem",
  padding: "0 2rem",
  marginTop: "12.6rem",
}));

export const CTAImage = styled(Image)(({ theme }) => ({
  position: "absolute",
  left: "12.8rem",
  top: "-10.2rem", // Moves the image above the card
  width: "38.8rem",
  height: "4.1rem",
  zIndex: 1, // Ensures it is above the card
}));

export const CTAContentBox = styled(Paper)(({ theme }) => ({
  maxWidth: "135.5rem",
  width: "100%",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.001)" : "black",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.32)" : "white"}`,
  borderRadius: "4.2rem",
  padding: "5rem",
  boxShadow: "0px 5px 7.6px rgba(0, 0, 0, 0.22)",
  textAlign: "center",
  position: "relative", // Ensure the content remains below the image
  zIndex: 2,
}));

export const CTAHeading = styled(Typography)(({ theme }) => ({
  fontSize: "4rem",
  fontWeight: 500,
  marginBottom: "3rem",
  color: "white",
}));

export const CTADescription = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: 500,
  color: "#FFFFFF",
}));

export const CTAInnerBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  flexDirection: { xs: "column", sm: "row" },
  marginTop: "2rem",
}));

export const CTAButton = styled(ServiceBtn1)(({ theme }) => ({
  fontSize: "1.6rem",
  fontWeight: "bold",
  backgroundColor: "#0085FF",
  color: "white",
}));
