import React from "react";
import {SectionHeadingCentered, ServicesOverviewWrapper} from "../../mui/HomePkgs";
import CarService from "./CarService";
import CamperService from "./CamperService";
import Autocare from "./AutoCare";

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
