"use client";
import {Button, Input, Paper, styled, Typography} from "@mui/material";

export const CardComponent = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "20px",
  width: "auto",
  maxWidth: "600px",
  background: "rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(10px)",
  webkitBackdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2rem",
}));

export const PlateTextInput = styled(Input)(({ theme }) => ({
  fontSize: "2.5rem",
  fontFamily: "BDSans, Roboto !important",
  fontWeight: "bold",
  color: theme.palette.text.primary,
  width: "100%",
  padding: "0 2rem",
  textAlign: "center",
}));

export const BookingButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: theme.palette.primary.accent,
  fontSize: "2rem",
  borderRadius: "10px",
  padding: "1rem 2rem",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  "&:hover": {
    backgroundColor: "none",
    boxShadow: "none",
  },
}));

export const BookingStepHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontFamily: "BDSans",
  fontWeight: "bold",
  color: theme.palette.primary.contrastText,
  textAlign: "center",
}));

export const BookingStepSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: theme.palette.primary.text1,
  textAlign: "center",
  marginBottom: "4.5rem",
}));
