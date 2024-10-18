import {Box} from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Add Ons</BookingFormHeading>
        <BookingFormTagline>
            Elevate your service with optional add-ons for a complete experience.
        </BookingFormTagline>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
