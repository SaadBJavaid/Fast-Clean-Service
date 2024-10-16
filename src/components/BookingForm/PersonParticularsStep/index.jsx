import {Box} from "@mui/material";
import React from "react";
import BookingParticulars from "./BookingParticulars";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Booking Confirmation</BookingFormHeading>
      <Box>
        <BookingParticulars />
      </Box>
    </Box>
  );
};

export default Index;
