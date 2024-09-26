"use client";

import { Box, ButtonBase, Paper, styled } from "@mui/material";
import Link from "next/link";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "2rem 4rem",
  position: "fixed",
  top: 0,
  zIndex: 100,
  background:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
  transition: "padding 0.4s ease, background 0.3s ease",

  // Media query for screens smaller than 1368px
  "@media (max-width: 1368px)": {
    padding: "1.5rem 3rem",
  },
  "@media (max-width: 768px)": {
    padding: "1rem 2rem", // Adjust for mobile or tablet screens
  },
}));

export const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  "@media (max-width: 1368px)": {
    // gap: "3rem", // Adjust gap for smaller screens
  },
  "@media (max-width: 768px)": {
    flexDirection: "column", // Stack links for mobile view
    gap: "2rem",
  },
}));

export const NavLinkT = styled(Link)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "500",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },

  "@media (max-width: 1368px)": {
    fontSize: "1.3rem", // Reduce font size for smaller screens
  },
  "@media (max-width: 768px)": {
    fontSize: "1.2rem", // Further reduce for mobile
  },
}));

export const NavLinkD = styled(Link)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "500",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },

  "@media (max-width: 1368px)": {
    fontSize: "1.3rem",
  },
  "@media (max-width: 768px)": {
    fontSize: "1.2rem",
  },
}));

export const NavbarCTA = styled(ButtonBase)(({ theme }) => ({
  width: "17.5rem",
  backgroundColor: "#00BEFF",
  height: "5rem",
  padding: "2rem 1rem",
  color: "white",
  borderRadius: "12px",
  fontFamily: "DMSans",
  fontWeight: "500",
  lineHeight: "15px",
  transition: "all 0.3s ease",
  // marginLeft: "21rem",

  "@media (max-width: 1368px)": {
    width: "15rem",
    height: "4.5rem",
    padding: "2rem 1.5rem",
    marginLeft: "15rem",
    width: "15rem",
  },
  "@media (max-width: 768px)": {
    width: "12rem",
    height: "4rem",
    padding: "2.5rem 1.5rem",
    width: "12rem",
  },
}));

export const BlurredPaper = styled(Paper)({
  backdropFilter: "blur(10px)",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "180px",
  zIndex: 100,

  "@media (max-width: 1368px)": {
    width: "150px",
    padding: "1.5rem",
  },
  "@media (max-width: 768px)": {
    width: "120px",
    padding: "1rem",
  },
});
