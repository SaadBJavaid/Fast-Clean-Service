import React from "react";
import { ServicesOverviewWrapper } from "../../mui/HomePkgs";
import CarService from "./CarService";
import { Typography } from "@mui/material";
import CamperService from "./CamperService";

export default function ServicesOverview() {
  return (
    <ServicesOverviewWrapper>
      {" "}
      <Typography
        variant="h2"
        sx={{
          fontSize: "5rem !important",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          margin: "50px ", // Space above and below the title
        }}
      >
        Services Overview
      </Typography>
      {/* Add your content here */}
      <CarService />
      <CamperService />
    </ServicesOverviewWrapper>
  );
}
