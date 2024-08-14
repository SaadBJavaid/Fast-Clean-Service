"use client";
import { Box, styled } from "@mui/material";

// Define the styled components
export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  // flex: 1,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
  flexBasis: "50%",
}));

export const RightSection = styled(Box)(({ theme }) => ({
  // flex: 1,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
  // flexBasis: "50%",
}));
