import {Box} from "@mui/material";
import React from "react";
import BookingSummary from "./BookingSummary";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Booking Summary</BookingFormHeading>

      <Box>
        <BookingSummary />
      </Box>
    </Box>
  );
};

export default Index;
