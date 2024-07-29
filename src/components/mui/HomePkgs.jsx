"use client";
import React, { useState } from "react";
import { styled, Box, Typography, Button, ListItem } from "@mui/material";
import { useTheme } from "../../app/contexts/themeContext";

export const HomeTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  fontSize: "1.5rem",
  //   fontWeight: "600",
  color: theme.palette.text.primary,
  textAlign: "center",
  padding: "1em",
}));

export const HomePkgsBox = styled(Box)(({ theme }) => ({
  fontSize: "1.6rem",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#000",
  padding: "5rem 0",
  display: "flex",
  justifyContent: "center",
  "& .MuiTypography-root": {
    fontSize: "1.6rem",
  },
}));

export const HomePkgsInBox = styled(Box)(({ theme }) => ({
  maxWidth: "1300px",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "4rem",
}));

export const HomePkgBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  flexDirection: "column",
  flexBasis: "calc(33% - 2.3rem)",
}));

export const PkgImgCtr = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export const HomeBlueBanner = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10rem",
  backgroundSize: "cover",
  // backgroundRepeat: "repeat",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  backgroundImage: `linear-gradient(
      #0066bf81,
      #0066bf81),url(
    "/fast-cleaning-service-achtergrond.jpg"
  )`,
  backgroundAttachment: "fixed",

  "& .MuiTypography-root": { color: "white" },
}));

export const HomeBlueBtn = styled(Button)(({ theme }) => ({
  width: "100%",
  backgroundColor: "#22b8f0",
  color: theme.palette.text.primary,
  padding: "1.5rem",
  fontSize: "2rem",
  marginBottom: "3rem",
  "&:hover": {
    backgroundColor: "#1e9bc9",
  },
}));

export const HomeBlueLink = styled(Typography)(({ theme }) => ({
  color: "#0c7fcf",
  fontWeight: "bold",
  textAlign: "center",
  fontSize: "1.7rem !important",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export const HomeCollageCtr = styled(Box)(({ theme }) => ({
  flexBasis: "calc(100%/5 - 3.2rem)",
  // backgroundColor: "red",
  height: "200px",
  "& img": {
    transition: "all 0.2s ease-in",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  "&:hover": {
    cursor: "pointer",
  },
  "&:hover img": {
    transform: "scale(1.05)",
  },
}));

export const HomeListItem = styled(ListItem)(({ theme }) => ({
  position: "relative",
  "&::before": {
    content: '"•"',
    position: "absolute",
    left: 0,
    top: "10px",
    color: theme.palette.primary.main,
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
  },
}));

const PkgExtraHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem !important",
  fontWeight: "bold",
  color: theme.palette.text.primary,
}));

const StyledBox4 = styled(Box)(({ theme }) => ({
  borderTop:
    theme.palette.mode === "light" ? "2px solid #000" : "2px solid #fff",
  backgroundColor: theme.palette.mode === "light" ? "#efefef" : "#212121",
  padding: "2rem",
}));

export const PkgDetailsSection = React.forwardRef(function PkgDetailsSection(
  { pros = [], cons = [] },
  ref
) {
  return (
    <StyledBox4 sx={{ minHeight: "400px" }}>
      <Box sx={{ mb: "1.5rem" }}>
        {pros.map((pro, index) => (
          <Typography sx={{ lineHeight: "3rem" }} key={index}>
            {pro}
          </Typography>
        ))}
      </Box>
      <Box sx={{ mb: "1.5rem" }}>
        {cons.map((con, index) => (
          <Typography sx={{ lineHeight: "3rem" }} key={index}>
            {con}
          </Typography>
        ))}
      </Box>
    </StyledBox4>
  );
});

export const PkgExtrasSection = React.forwardRef(function PkgExtrasSection(
  { interior = [], exterior = [], detailing = [] },
  ref
) {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <StyledBox4
      sx={{
        border:
          theme.palette.mode === "light"
            ? "1px solid #cbcbcb"
            : "1px solid #575757",
        padding: 0,
      }}
    >
      <Box
        sx={{ width: "100%", padding: "2rem" }}
        onClick={() => setOpen(!open)}
      >
        Extra Opties
      </Box>
      {open && (
        <>
          <Box
            sx={{
              padding: "2rem 2rem 0",
              display: interior.length > 0 ? "block" : "none",
            }}
          >
            <PkgExtraHeading>Interieur</PkgExtraHeading>
            {interior?.map((pro, index) => (
              <Typography sx={{ lineHeight: "3rem" }} key={index}>
                {pro}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              padding: "2rem 2rem 0",
              display: exterior.length > 0 ? "block" : "none",
            }}
          >
            <PkgExtraHeading>Exterieur</PkgExtraHeading>
            {exterior.map((con, index) => (
              <Typography sx={{ lineHeight: "3rem" }} key={index}>
                {con}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              padding: "2rem 2rem 0",
              display: detailing.length > 0 ? "block" : "none",
            }}
          >
            <PkgExtraHeading>Detailing</PkgExtraHeading>
            {detailing.map((detail, index) => (
              <Typography sx={{ lineHeight: "3rem" }} key={index}>
                {detail}
              </Typography>
            ))}
          </Box>
        </>
      )}
    </StyledBox4>
  );
});
