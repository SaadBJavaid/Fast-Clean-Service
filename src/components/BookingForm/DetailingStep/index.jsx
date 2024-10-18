import {Box} from "@mui/material";
import React from "react";
import DetailingOptions from "./Detailing";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Detailing</BookingFormHeading>
        <BookingFormTagline>
            Enter your license plate to kickstart your personalized service.
        </BookingFormTagline>
      <Box>
        <DetailingOptions />
      </Box>
    </Box>
  );
};

export default Index;
