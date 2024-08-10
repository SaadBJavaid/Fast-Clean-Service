import React from "react";
import { ServicesOverviewWrapper, SectionHeading } from "../../mui/HomePkgs";
import CarService from "./CarService";
import { Typography } from "@mui/material";
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
      <SectionHeading variant="h2">Services Overview</SectionHeading>
      <CarService />
      <Autocare />
      <CamperService />
    </ServicesOverviewWrapper>
  );
}
