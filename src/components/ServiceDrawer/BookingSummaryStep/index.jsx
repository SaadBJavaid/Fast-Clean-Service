import { Box } from "@mui/material";
import React from "react";
import BookingSummary from "./BookingSummary";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";

const Index = () => {
  return (
    <Box>
      <BookingStepHeading>Booking Summary</BookingStepHeading>
      <BookingStepSubHeading>Confirm your package</BookingStepSubHeading>

      <Box>
        <BookingSummary />
      </Box>
    </Box>
  );
};

export default Index;
