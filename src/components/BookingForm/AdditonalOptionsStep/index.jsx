import {Box} from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Add Ons</BookingFormHeading>
        <BookingFormTagline>
            Enter your license plate to kickstart your personalized service.
        </BookingFormTagline>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
