"use client";

import {Box, Button, styled, Typography} from "@mui/material";

export const FooterContainer = styled(Box)(({ theme }) => ({
  height: "40vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
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
  color: theme.palette.primary.text,
}));

export const FooterButton = styled(Button)(({ theme }) => ({
  fontSize: "2rem",
  color: theme.palette.primary.main,
  padding: theme.spacing(2, 4),
  borderRadius: "50px",
  fontWeight: "bold",
  marginBottom: "4rem",
  backgroundColor: theme.palette.primary.accent,
  border: `2px solid ${theme.palette.primary.accent}`,
  ":hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.accent,
  },
}));
