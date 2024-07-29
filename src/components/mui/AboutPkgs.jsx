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
  color: "#0c7fcf",
  //   lineHeight: 1,
  marginBottom: "1.5rem",
}));

export const AboutItemDetail = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#85868c",
  lineHeight: 1.5,
  //   marginBottom: "2rem",
}));
