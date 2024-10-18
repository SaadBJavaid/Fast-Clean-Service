import {Box} from "@mui/material";
import AutocarePackages from "./AutocarePackages";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";
import React from "react";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading sx={{ marginBottom: "5rem" }}>Package</BookingFormHeading>
      <Box>
        <AutocarePackages />
      </Box>
    </Box>
  );
};

export default Index;
