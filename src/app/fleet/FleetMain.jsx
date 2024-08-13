"use client";
import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import Image from "next/image";
import Form from "./Form";
import { GrayBox, ImageWrapper, Container } from "../../components/mui/FleetPkgs";
import { darkTheme } from "../contexts/themeContext";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox, HomePkgsInBox, ServiceSubheading } from "../../components/mui/HomePkgs";
import styles from "./Fleet.module.css";
import { transform } from "lodash";
import zIndex from "@mui/material/styles/zIndex";

export const FleetSubheading = styled(Typography)(({ theme }) => ({
  color: "white !important",
  fontFamily: "JakartaSans",
  fontSize: "2.5rem",
}));

export const FleetContainer = styled(Container)(({ theme }) => ({
  borderRadius: "10px",
  height: "100vh",
  // overflow: "hidden",
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
  // marginRight: "1rem",
}));

export const CustomListItem = styled(ListItem)(({ theme }) => ({
  "&::before": {
    content: '"✔"',
    color: theme.palette.primary.accent,
    display: "inline-block",
    marginLeft: "-1em",
    width: "1em",
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
        <Image
          src="/fast-clean-service-wassen-waxen-exterieur-interieur-lakverzegeling-wagenpark-3.jpg"
          alt="Background image with 4 cars"
          layout="fill"
          objectFit="cover"
        />
        <GrayBox sx={{ display: "flex", flexDirection: "column", zIndex: "10", alignContent: "left" }}>
          <Box
            sx={{
              zIndex: 20,
              transform: "translate(-10%, -50%) !important",
            }}
          >
            <ServiceSubheading special sx={{ fontSize: "6.5rem !important" }}>
              FleetCare Pro
            </ServiceSubheading>
          </Box>
          <Box
            sx={{
              zIndex: 20,
              transform: "translate(-10%, -20%) !important",
            }}
          >
            <FleetSubheading className={styles.quoteText}>
              Fleet maintenance at your company location or at an individual employee's premises
            </FleetSubheading>
          </Box>
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
      </HomePkgsInBox>
    </FleetContainer>
  );
}
