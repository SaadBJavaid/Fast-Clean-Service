"use client";
import React from "react";
import {Box, List, ListItem, styled, Typography} from "@mui/material";
import Image from "next/image";
import Form from "./Form";
import {Container, GrayBox} from "../../components/mui/FleetPkgs";
import {HomePkgsInBox, ServiceSubheading} from "../../components/mui/HomePkgs";
import styles from "./Fleet.module.css";

export const FleetSubheading = styled(Typography)(({ theme }) => ({
  color: "white !important",
  fontFamily: "JakartaSans",
  fontSize: "2.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem", // Adjust for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem", // Adjust for small screens
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem", // Adjust for medium screens
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem", // Adjust for small screens
  },
}));

export const FleetContainer = styled(Container)(({ theme }) => ({
  borderRadius: "10px",
  minHeight: "100vh",
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden", // Ensure no overflow issues
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
  
  return (
      <FleetContainer sx={{}}>
        <HomePkgsInBox sx={{
          margin: "0 auto",
          position: "relative",
          //zIndex: 10, // Ensures it stays above the background overlay
          padding: "15rem 2rem", // Adds padding to push content from the top and bottom
          backgroundColor: "rgba(255, 255, 255, 0.85)", // Background for better text readability
          borderRadius: "10px"
        }}>
          <Image
              src="/fast-clean-service-wassen-waxen-exterieur-interieur-lakverzegeling-wagenpark-3.jpg"
              alt="Background image with 4 cars"
              layout="fill"
              objectFit="cover"
              style={{ zIndex: 0 }} // Keep the image at the background
          />
          <GrayBox sx={{
            display: "flex",
            flexDirection: "column",
            zIndex: "10",
            alignContent: "left"
          }}>
            <Box
                sx={{
                  zIndex: 20,
                }}
            >
              <ServiceSubheading special sx={{ textAlign: "center" }}>
                FleetCare Pro
              </ServiceSubheading>
            </Box>
            <Box
                sx={{
                  zIndex: 20,
                }}
            >
              <FleetSubheading className={styles.quoteText}>
                Fleet maintenance at your company location or at an individual employee&apos;s premises
              </FleetSubheading>
            </Box>
            <Box>
              <List
                  sx={{
                    marginLeft: "5rem",
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
