import React from "react";
import { ServicesOverviewWrapper } from "../../mui/HomePkgs";
import CarService from "./CarService";
import { Typography } from "@mui/material";
import CamperService from "./CamperService";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

export default function ServicesOverview() {
  return (
    <ServicesOverviewWrapper>
      {" "}
      <Typography
        variant="h2"
        sx={{
          fontFamily: "BDSans",
          fontSize: "5rem !important",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          margin: "50px ", // Space above and below the title
        }}
      >
        <HeadingLinesAnimation text="Services Overview" />
      </Typography>
      <CarService />
      <CamperService />
    </ServicesOverviewWrapper>
  );
}
