import { Box } from "@mui/material";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";
import Summary from "./Summary";
import React from "react";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading sx={{ marginBottom: "4rem" }}>
        Order Overview
      </BookingFormHeading>
        <BookingFormTagline>
            Enter your license plate to kickstart your personalized service.
        </BookingFormTagline>
      <Box>
        <Summary />
      </Box>
    </Box>
  );
};

export default Index;
