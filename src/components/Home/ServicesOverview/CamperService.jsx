"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Button, useMediaQuery, styled } from "@mui/material";
import { HomePkgsBox, HomePkgsInBox, HomeServicesBox, ServiceBtn1, ServicesBtn } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";
import styles from "./CamperService.module.css";
import { ServiceDescription, ServiceHeading, ServiceItemContainer, ServiceItemSubheading } from "./ServiceColumnGroup";
import RadialCircle from "../../Decorative/RadialCircle";

export const CamperServiceBox = styled(Box)(({ theme }) => ({
  minWidth: "500px",
  flexShrink: 1,
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: "40%",
  display: "flex",
  justifyContent: "space-between",
}));

export const ServiceItemDesciptionB = styled(ServiceItemSubheading)(({ theme }) => ({
  margin: "2.4rem 0",
  fontSize: "2rem",
}));

export const ServiceItemCTA = styled(ServiceBtn1)(({ theme }) => ({
  padding: "1.4rem 3.7rem",
}));

export const ServiceItemHighlight = styled(Typography)(({ theme, special }) => ({
  fontSize: "1.4rem",
  color: special
    ? theme.palette.mode === "dark"
      ? "#01BEFF"
      : "#005F7F"
    : theme.palette.mode === "dark"
    ? "#C2C2C2"
    : "#535353",
  textAlign: "center",
  marginBottom: "2.5rem",
}));

export default function CamperService() {
  const { theme } = useTheme();

  return (
    <HomeServicesBox
      sx={{
        position: "relative",
        flexWrap: "wrap",
        marginTop: "6.3rem",
        marginBottom: "22rem",
        gap: "10.7rem",
      }}
    >
      <RadialCircle top={"-2rem"} left={"50%"} />
      <CamperServiceBox>
        <Box>
          <ServiceHeading>FleetCare Pro</ServiceHeading>
          <ServiceItemDesciptionB>
            Elevate your fleet’s appearance with our cutting-edge mobile cleaning service. FleetCare Pro brings professional-grade
            steam cleaning technology directly to your location, ensuring your vehicles are spotless and ready for the road -
            anywhere, anytime.
          </ServiceItemDesciptionB>
          <ServiceItemHighlight>With FleetCare Pro, pristine vehicles are just a booking away.</ServiceItemHighlight>
        </Box>
        <ServiceItemCTA special>Book Now</ServiceItemCTA>
      </CamperServiceBox>

      <CamperServiceBox>
        <Box>
          <ServiceHeading>Subscriptions</ServiceHeading>
          <ServiceItemDesciptionB>
            Transform your vehicle maintenance routine with our flexible subscription plans. Experience premium care tailored to
            your schedule and preferences.
          </ServiceItemDesciptionB>
          <ServiceItemHighlight>Choose your plan and never worry about a dirty car again!</ServiceItemHighlight>

          <ServiceItemHighlight special>24 months | Yearly | Monthly plans</ServiceItemHighlight>
        </Box>
        <ServiceItemCTA special>Book Now</ServiceItemCTA>
      </CamperServiceBox>
    </HomeServicesBox>
  );
}
