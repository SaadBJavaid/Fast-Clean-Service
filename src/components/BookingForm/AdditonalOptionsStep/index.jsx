import {Box} from "@mui/material";
import React from "react";
import AdditionalOptions from "./AdditionalOptions";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading
        sx={{
          marginBottom: "5rem",
        }}
      >
        Add Ons
      </BookingFormHeading>
      <Box>
        <AdditionalOptions />
      </Box>
    </Box>
  );
};

export default Index;
