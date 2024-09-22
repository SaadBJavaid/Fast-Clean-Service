import { Box } from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";

const Index = () => {
  return (
    <Box>
      <BookingStepHeading>Additional Options</BookingStepHeading>
      <BookingStepSubHeading>Select additional options</BookingStepSubHeading>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
