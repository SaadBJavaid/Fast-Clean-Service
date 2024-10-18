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
            Review your order to ensure your car gets exactly what it needs.
        </BookingFormTagline>
      <Box>
        <Summary />
      </Box>
    </Box>
  );
};

export default Index;
