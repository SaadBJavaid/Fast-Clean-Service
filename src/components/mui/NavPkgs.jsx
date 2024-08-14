"use client";
import { Box, List, styled } from "@mui/material";

export const NavSidebar = styled(Box)(({ theme, menuOpen }) => ({
  position: "fixed",
  top: 0,
  left: menuOpen ? 0 : "-100%",
  bottom: 0,
  width: "30%",
  backgroundColor: "#000000bb",
  zIndex: 1000000,
  transition: "all 0.3s ease-in",
  display: "flex",
  flexDirection: "column",
  padding: "3rem",
  color: "white",

  "& svg": {
    fontSize: "3rem",
    pointer: "cursor",
  },

  "& .topbar": {
    padding: "1rem",
    borderBottom: "1px solid #ffffff80",
  },

  "& .content": {
    padding: "1rem",
  },
}));

export const NavSidebarContent = styled(List)(({ theme }) => ({
  textalign: "left",
  transition: "all 0.3s ease-in",

  "& li": {
    fontSize: "2rem",
    lineHeight: "1",
    cursor: "pointer",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: "0 4px",
    marginLeft: 0,
    transition: "all 0.3s ease-in",
    overflow: "hidden",

    // "&:not(:last-of-type)": {
    //   marginBottom: "2rem",
    // },

    "& svg": {
      transition: "all 0.3s ease-in",
      fontSize: "2rem",
      marginRight: "1rem",
      // transform: "translateY(1.5px)",
    },
  },
}));
