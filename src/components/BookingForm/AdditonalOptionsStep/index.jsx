import {Box} from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Add Ons</BookingFormHeading>
        <BookingFormSubHeading>
            Please choose your add-ons <br />
            Enhance your service for extra sparkle!
        </BookingFormSubHeading>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
