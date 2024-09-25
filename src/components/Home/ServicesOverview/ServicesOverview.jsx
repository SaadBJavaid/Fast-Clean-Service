import React from "react";
import { ServicesOverviewWrapper} from "../../mui/HomePkgs";
import CarService from "./CarService";
import CamperService from "./CamperService";
import Autocare from "./AutoCare";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import ServiceColumnGroup from "./ServiceColumnGroup";
import LongTermVehicleCare from "./LongTermVehicleCare";

export default function ServicesOverview() {
  return (
    <ServicesOverviewWrapper>
      <HeadingLinesAnimation sx={{ width: "70%", marginBottom: "7rem" }}>SERVICES</HeadingLinesAnimation>
      <CarService />
      <ServiceColumnGroup />
      <Autocare />
      <CamperService />
      <LongTermVehicleCare />
    </ServicesOverviewWrapper>
  );
}
