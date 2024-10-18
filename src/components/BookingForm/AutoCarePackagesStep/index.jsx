import {Box} from "@mui/material";
import AutocarePackages from "./AutocarePackages";
import {BookingFormHeading, BookingFormSubHeading, BookingFormTagline} from "../../mui/BookingFormPackages";
import React from "react";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Package</BookingFormHeading>
        <BookingFormSubHeading sx={{ marginBottom: "5rem" }}>
            Please choose a plan<br />
            Enjoy regular, worry-free cleaning!
        </BookingFormSubHeading>
      <Box>
        <AutocarePackages />
      </Box>
    </Box>
  );
};

export default Index;
