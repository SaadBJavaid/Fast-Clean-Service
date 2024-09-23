"use client";
import React from "react";
import { FooterContainer, FooterHeading, FooterDescription, FooterButton } from "./FooterCTAStyles";
import { useTheme } from "../../contexts/themeContext";

export default function FooterCTA() {
  const { theme } = useTheme();
  return (
    <FooterContainer
      sx={{
        "--color-primary-contrast": theme.palette.primary.contrastText,
        background: theme.palette.mode === "linear-gradient(to top, #d3d3d3, #f5f5f5)" ? "" : "#linear-gradient(to top, #131313, #050505)",
}}
    >
      <FooterHeading variant="h2">Fast Clean Service</FooterHeading>
      <FooterDescription variant="body1">
        We come to you at your location to service your vehicle
        <br />
        The specilaist in steam cleaning
      </FooterDescription>
      <FooterButton variant="contained" color="primary">
        Book Now
      </FooterButton>
    </FooterContainer>
  );
}
