"use client";
import { Box, styled } from "@mui/material";

export const ContactCardContainer = styled(Box)(({ theme }) => ({
  textAlign: "left !important",
  padding: "1.5rem !important",
  marginTop: "0 !important",
  height: "auto !important",
  width: "350px",
  borderRadius: "1rem",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
  border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
  backdropFilter: "blur(2.4px)",
}));
