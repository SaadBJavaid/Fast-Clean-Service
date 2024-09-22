import { Box } from "@mui/material";
import React from "react";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";
import BookingParticulars from "./BookingParticulars";

const Index = () => {
  return (
    <Box>
      <BookingStepHeading>Person Particulars</BookingStepHeading>
      <BookingStepSubHeading>Enter your personal details</BookingStepSubHeading>
      <Box>
        <BookingParticulars />
      </Box>
    </Box>
  );
};

export default Index;
