import {Box} from "@mui/material";
import React from "react";
import BookingParticulars from "./BookingParticulars";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Booking Confirmation</BookingFormHeading>
        <BookingFormTagline>
            Enter your license plate to kickstart your personalized service.
        </BookingFormTagline>
      <Box>
        <BookingParticulars />
      </Box>
    </Box>
  );
};

export default Index;
