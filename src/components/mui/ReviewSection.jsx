"use client";
import { Box, styled } from "@mui/material";

// Define the styled components
export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "70vh",
  width: "100%",
}));

export const LeftSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.paper,
}));

export const RightSection = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));
