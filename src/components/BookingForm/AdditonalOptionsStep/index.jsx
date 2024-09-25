import {Box} from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Add Ons</BookingFormHeading>
      <BookingFormSubHeading>Optional</BookingFormSubHeading>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
