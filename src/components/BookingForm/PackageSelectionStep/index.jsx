import React from "react";
import PackageSelection from "./PackageSelection";
import { Box } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading
        sx={{
          marginBottom: "5rem",
        }}
      >
        Service Type
      </BookingFormHeading>
      <BookingFormSubHeading>Choose a service type</BookingFormSubHeading>
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
