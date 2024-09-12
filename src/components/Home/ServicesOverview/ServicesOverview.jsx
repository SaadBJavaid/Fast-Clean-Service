import React from "react";
import { ServicesOverviewWrapper, SectionHeading,  SectionHeadingCentered} from "../../mui/HomePkgs";
import CarService from "./CarService";
import { Typography } from "@mui/material";
import CamperService from "./CamperService";
import Autocare from "./AutoCare";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

export default function ServicesOverview() {
  return (
    <ServicesOverviewWrapper
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {" "}
      <SectionHeadingCentered sx={{ marginBottom: {
              xs: '2rem',  // Extra small screens
              sm: '4rem',  // Small screens
              md: '6rem',  // Medium screens
              lg: '8rem',  // Large screens
              xl: '10rem'  // Extra large screens
          }, }}>
        Services Overview
      </SectionHeadingCentered>
      {/* <HeadingLinesAnimation variant="h2">Services Overview</HeadingLinesAnimation> */}
      <CarService />
      <Autocare />
      <CamperService />
    </ServicesOverviewWrapper>
  );
}
