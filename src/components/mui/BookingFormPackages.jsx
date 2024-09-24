"use client";
import {Box, ButtonBase, styled, Typography} from "@mui/material";

export const BookingFormHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  margin: "1rem",
  padding: "2rem 0",
  color: "#232E4A",
  textAlign: "center",
  fontSize: "2.6rem",
  fontWeight: "700",
  lineHeight: "57.6px",
}));

export const BookingFormSubHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: "#A4A4A4",
  textAlign: "center",
  fontSize: "1.6rem",
  fontWeight: "300",
  lineHeight: "auto",
}));

export const AutoCarePackageSubheading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: "#14BC06",
  textAlign: "center",
  fontSize: "1.4rem",
  fontWeight: "light",
  lineHeight: "57.6px",
  marginBottom: "1rem",
}));

export const ServiceToggleContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "4rem",
}));

export const PricingSpacer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "2px",
  background: "linear-gradient(to right, white 0%, black 50%, white 100%)",
}));

export const PricingContainer = styled(Box)(({ theme }) => ({
  maxWidth: "570px",
  margin: "0 auto",
  marginTop: "10rem",
}));

export const PricingText = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: theme.palette.text.primary,
  fontWeight: "300",
  fontSize: "1.6rem",
}));

export const PricingTextContainer = styled(Typography)(({ theme }) => ({
  padding: "1rem 3rem",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "5rem",
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
}));

export const NextPrevButton = styled(ButtonBase)(({ theme, dull = false }) => ({
  width: "160px",
  padding: "1.6rem 0",
  borderRadius: "12px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  color: dull ? "black" : "white",
  backgroundColor: dull ? "#DFDFDF" : "#1C79CC",
  fontFamily: "DMSans",
  fontSize: "1.6rem",
  lineHeight: "1.5rem",
  textAlign: "center",
  fontWeight: "500",
}));


