import {Box} from "@mui/material";
import React from "react";
import BookingParticulars from "./BookingParticulars";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Booking Confirmation</BookingFormHeading>
        <BookingFormTagline>
            Tell us where to reach you so we can confirm your booking.
        </BookingFormTagline>
      <Box>
        <BookingParticulars />
      </Box>
    </Box>
  );
};

export default Index;
