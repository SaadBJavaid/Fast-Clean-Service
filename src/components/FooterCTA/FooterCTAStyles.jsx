"use client";

import { Box, Typography, Button, styled } from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "40vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  background: "linear-gradient(to top, #d3d3d3, #f5f5f5)",
  textAlign: "center",
  padding: theme.spacing(4),
}));

export const FooterHeading = styled(Typography)(({ theme }) => ({
  fontSize: "5rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.accent,
}));

export const FooterDescription = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  marginBottom: theme.spacing(4),
  color: "#9c9b91",
}));

export const FooterButton = styled(Button)(({ theme }) => ({
  fontSize: "2rem",
  padding: theme.spacing(2, 4),
  fontWeight: "bold",
}));
