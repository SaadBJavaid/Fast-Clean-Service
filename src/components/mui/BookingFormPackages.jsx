"use client";
import {
  styled,
  Box,
  Typography,
  Button,
  ListItem,
  ButtonBase,
} from "@mui/material";

export const BookingFormHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  margin: "1rem",
  padding: "2rem 0 0",
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
  marginBottom: "1rem",
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

export const CarTypeContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "fit-content",
  margin: "auto",
}));

export const SubscriptionPkgsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  "@media (max-width: 600px)": {
    "& > div": {
      flex: "1 1 100%",
      maxWidth: "100%",
    },
  },
}));

export const SubscriptionCardContainer = styled(Box)(({ theme, selected }) => ({
  position: "relative",
  width: "207px",
  height: "280px",
  borderRadius: "15px",
  boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
  overflow: "hidden",
  border: `1px solid ${selected ? "#1C79CC" : "#FAFAFA"}`,
}));

export const SubscriptionCardBanner = styled(Box)(({ theme, color }) => ({
  position: "absolute",
  top: "1.6rem",
  left: "-3rem",
  padding: "0.2rem 3rem",
  backgroundColor: color,
  zIndex: 30,
  transform: "rotate(-45deg)",
}));

export const SubscriptionCardHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  color: "#ffffff",
  fontSize: "1rem",
  fontWeight: "light",
}));

export const SubscriptionCardHeader = styled(Box)(({ theme, color }) => ({
  position: "relative",
  width: "100%",
  height: "166px",
  overflow: "hidden",

  "& > img": {
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: "10px 10px 0 0",
    clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
    boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
  },

  "& > .heading": {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: color,
    filter: "brightness(1.5)",
    borderRadius: "7px",
    padding: "1rem",
    zIndex: 20,
    fontFamily: "Unbounded",
    color: "#ffffff",
    fontSize: "1.4rem",
    fontWeight: "semibold",
  },

  "& .highlight": {
    position: "absolute",
    backgroundColor: color,
    clipPath: "path('M -2 165 Q 200 80 250 200 L 220 -2 L -2 -2 Z')",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: "35%",
    zIndex: 10,
  },
}));

export const SubscriptionCardContent = styled(Box)(({ theme }) => ({
  marginTop: "2rem",
  padding: "0 1.6rem",

  "& > .content__row": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const SubscriptionContentLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  fontSize: "1.2rem",
  fontWeight: "light",
  color: "#000000",
  lineHeight: "2.4rem",
}));

export const SubscriptionContentValue = styled(Typography)(
  ({ theme, color, highlight }) => ({
    fontFamily: "Unbounded",
    fontSize: "1.4rem",
    fontWeight: highlight ? "medium" : "light",
    color: highlight ? color : "#000000",
    lineHeight: "2.4rem",
  })
);

export const LisencePlateContainer = styled(Box)(({ theme }) => ({
  height: "12.5rem",
  width: "100%",
  maxWidth: "520px",
  margin: "auto auto",
  backgroundColor: "#F2BA00",
  display: "grid",
  gridTemplateColumns: "20% 80%",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2) inset",
  // padding: "0.4rem",
  position: "relative",
  boxShadow: "0px 0px 20px rgba(51, 51, 51, 0.2)",

  "& > .border": {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    border: "3px solid black",
    // margin: "0.4rem",
  },
}));

export const LisencePlateImg = styled(Box)(({ theme }) => ({
  backgroundColor: "#003599",
  width: "100%",
  height: "100%",
  borderRadius: "10px 0 0 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",

  "& img": {
    width: "100%",
    // height: "100%",
    objectFit: "cover",
  },
}));

export const LisencePlateInput = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  margin: "auto 0",
  alignItems: "center",
  padding: "0 2rem",
  textDecoration: "uppercase",

  "& input": {
    fontSize: "7rem",
    fontfamily: "BDSans, Roboto !important",
    fontWeight: "bold",
    color: "#000",
  },
}));

export const AutoCareContainer = styled(Box)(({ theme }) => ({
  marginBottom: "2rem",
  display: "flex",
  justifyContent: "center",
  gap: "1.5rem",
  "@media (max-width: 600px)": {
    "& > div": {
      flex: "1 1 100%",
      maxWidth: "100%",
    },
  },
}));

export const AdditionalContainer = styled(Box)(({ theme }) => ({
  border: "0.4px solid #38E274",
  borderRadius: "6px",
  boxShadow: "0px 4px 30.1px rgba(0, 0, 0, 0.25)",
  padding: "3.4rem 4.1rem",
  maxWidth: "700px",
  margin: "0 auto",
  display: "flex",
  gap: "1rem",
}));

export const AdditionalName = styled(Typography)(({ theme }) => ({
  color: "#000000",
  fontWeight: "regular",
  fontFamily: "Unbounded",
  fontSize: "1.8rem",
  lineHeight: "2.4rem",
  marginBottom: "1.2rem",
}));

export const AdditionalContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  margin: "0 auto",
}));

export const AdditionalNoOption = styled(Typography)(({ theme }) => ({
  color: "#525252",
  fontWeight: "regular",
  fontFamily: "Unbounded",
  fontSize: "1.2rem",
  lineHeight: "2.4rem",
  marginBottom: "1.2rem",
}));

export const AdditionalOption = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "0 1.2rem",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "6px",
  boxShadow: "0px 2px 11.9px rgba(0, 0, 0, 0.25)",
  cursor: "pointer",
}));

export const AdditionalOptionText = styled(Typography)(({ theme }) => ({
  color: "#585858",
  fontWeight: "light",
  fontFamily: "Unbounded",
  fontSize: "0.8rem",
  lineHeight: "2.4rem",
}));
