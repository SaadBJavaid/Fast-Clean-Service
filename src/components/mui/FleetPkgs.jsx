"use client";
import { Box, styled } from "@mui/material";

export const GrayBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  padding: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  flex: 1,
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  clipPath: "polygon(7% 0, 100% 0%, 100% 100%, 0% 100%)",
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  // maxWidth: "500px",
  margin: "0 auto",
  padding: theme.spacing(3),
  boxSizing: "border-box",
}));
