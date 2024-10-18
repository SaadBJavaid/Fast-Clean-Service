import {Box} from "@mui/material";
import React from "react";
import DetailingOptions from "./Detailing";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Detailing</BookingFormHeading>
        <BookingFormTagline>
            Choose detailing options for that showroom finish.
        </BookingFormTagline>
      <Box>
        <DetailingOptions />
      </Box>
    </Box>
  );
};

export default Index;
