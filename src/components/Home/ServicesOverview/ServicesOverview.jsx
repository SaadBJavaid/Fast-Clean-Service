import React from "react";
import { HomePkgsInBox, ServicesOverviewWrapper } from "../../mui/HomePkgs";
import CarService from "./CarService";
import CamperService from "./CamperService";
import Autocare from "./AutoCare";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import ServiceColumnGroup from "./ServiceColumnGroup";
import LongTermVehicleCare from "./LongTermVehicleCare";
import RadialCircle from "../../Decorative/RadialCircle";
import { Box } from "@mui/material";

export default function ServicesOverview() {
  return (
    <HomePkgsInBox
      sx={{
        margin: "0 auto",
      }}
    >
      <ServicesOverviewWrapper>
        <HeadingLinesAnimation sx={{ width: "50%", marginBottom: "7rem" }}>SERVICES</HeadingLinesAnimation>
        
        <Box sx={{ position: "relative" }}>
          <CarService />

          <RadialCircle bottom={"-22rem"} right={"-22rem"} />
        </Box>

        <ServiceColumnGroup />
        <Autocare />
        <CamperService />
        <LongTermVehicleCare />
      </ServicesOverviewWrapper>
    </HomePkgsInBox>
  );
}
