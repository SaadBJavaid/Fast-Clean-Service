import React from "react";
import { ServicesOverviewWrapper, SectionHeading } from "../../mui/HomePkgs";
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
      <SectionHeading sx={{ marginBottom: "10rem" }}>
        Services Overview
      </SectionHeading>
      {/* <HeadingLinesAnimation variant="h2">Services Overview</HeadingLinesAnimation> */}
      <CarService />
      <Autocare />
      <CamperService />
    </ServicesOverviewWrapper>
  );
}
