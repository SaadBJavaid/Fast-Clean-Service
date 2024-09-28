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
import { DecorativeBackgroundImage } from "../../Decorative/ItemBoxes";

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
          <DecorativeBackgroundImage top="10rem" right="-40rem" width="92rem" height="110rem" />
        </Box>

        <ServiceColumnGroup />

        <Box sx={{ position: "relative" }}>
          <Autocare />

          <RadialCircle bottom={"10rem"} left={"0rem"} />
        </Box>

        <CamperService />
      </ServicesOverviewWrapper>

      <Box sx={{ margin: "0 auto" }}>
        <LongTermVehicleCare />
      </Box>
    </HomePkgsInBox>
  );
}
