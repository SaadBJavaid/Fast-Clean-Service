import React from "react";
import PackageSelection from "./PackageSelection";
import {Box} from "@mui/material";
import {BookingStepHeading, BookingStepSubHeading} from "../BookingPckgs";

const Index = () => {
  return (
    <Box>
      <BookingStepHeading>Service</BookingStepHeading>
      <BookingStepSubHeading>Select type of service</BookingStepSubHeading>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PackageSelection />
      </Box>
    </Box>
  );
};

export default Index;
