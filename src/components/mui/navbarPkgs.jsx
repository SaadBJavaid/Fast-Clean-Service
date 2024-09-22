"use client";

import { Box, ButtonBase, Paper, Popper, styled } from "@mui/material";
import Link from "next/link";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2rem 12rem",
  position: "fixed",
  top: 0,
  zIndex: 100,
}));

export const NavLinksContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "7rem",
}));

export const NavLinkContainer = styled(Box)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "400",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  position: "relative",
}));

export const NavLinkT = styled(Link)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "400",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const NavLinkD = styled(Link)(({ theme }) => ({
  fontFamily: "DMSans",
  fontWeight: "300",
  fontSize: "1.5rem",
  lineHeight: "27.8px",
  color: theme.palette.primary.main,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const NavbarCTA = styled(ButtonBase)(({ theme }) => ({
  width: "12rem",
  backgroundColor: theme.palette.primary.accent,
  padding: "1.5rem 0",
  color: "white",
  border: "1px solid #405FF2",
  borderRadius: "12px",
  fontFamily: "DMSans",
  fontWeight: "400",
  lineHeight: "15px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));

export const BlurredPaper = styled(Paper)({
  backdropFilter: "blur(10px)",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "180px",
  zIndex: 100,
});

