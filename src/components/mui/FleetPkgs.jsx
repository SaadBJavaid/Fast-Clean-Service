"use client";
import { Box, FormControl, styled } from "@mui/material";

export const GrayBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  // overflow: "hidden",
  flex: 1,

  "& img": {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    padding: "1rem",
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  // width: "100%",
  minHeight: "calc(100vh - 12rem)",
}));

export const FormContainer = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  // maxWidth: "500px",
  margin: "0 auto",
  padding: theme.spacing(3),
  boxSizing: "border-box",
}));
