"use client";
import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";
import { GrayBox, ImageWrapper, Container } from "../../components/mui/FleetPkgs";
import { ThemeProvider } from "@emotion/react";
import { deepmerge } from "@mui/utils";
import { darkTheme } from "../contexts/themeContext";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox, HomePkgsInBox, ServiceSubheading } from "../../components/mui/HomePkgs";

export const FleetSubheading = styled(Typography)(({ theme }) => ({
  color: "white",
  fontSize: "2.5rem",
  marginBottom: "2rem",
  fontFamily: "JakartaSans",
  fontWeight: "900",
}));

export const FleetContainer = styled(Container)(({ theme }) => ({
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  // border: "2px solid green",
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
    zIndex: 0,
  },
  margin: "2rem",
  // marginRight: "1rem",
  marginTop: "12rem",
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  "&::before": {
    content: '"•"',
    color: theme.palette.primary.accent,
    display: "inline-block",
    width: "1em",
    marginLeft: "-1em",
  },
  paddingLeft: "1em",
}));

export default function FleetMain() {
  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <FleetContainer sx={{}}>
      <HomePkgsInBox sx={{ margin: "0 auto" }}>
        <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, darkTheme)}>
          <Image src="/car.jpg" alt="Background image with 4 cars" layout="fill" objectFit="cover" />
          <GrayBox sx={{ display: "flex", flexDirection: "column", zIndex: "10", alignContent: "left" }}>
            <ServiceSubheading>FleetCare Pro</ServiceSubheading>
            <FleetSubheading>Fleet maintenance at your company location or at an individual employee's premises</FleetSubheading>

            <Box>
              <List
                sx={{
                  color: "white",
                  fontSize: "2rem",
                  fontFamily: "JakartaSans",
                }}
              >
                <CustomListItem>Excellent on-site service.</CustomListItem>
                <CustomListItem>Cleaning of vehicles at a time that suits you and/or your employees.</CustomListItem>
                <CustomListItem>Environmentally friendly, sustainable working method.</CustomListItem>
                <CustomListItem>Excellent value for money.</CustomListItem>
                <CustomListItem>Discount on fixed purchases of any package.</CustomListItem>
              </List>
            </Box>
          </GrayBox>
          <GrayBox sx={{ zIndex: 10, alignItems: "center" }}>
            <Form onSubmit={handleFormSubmit} />
          </GrayBox>
        </ThemeProvider>
      </HomePkgsInBox>
    </FleetContainer>
  );
}
