import {Box} from "@mui/material";
import React from "react";
import BookingParticulars from "./BookingParticulars";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Booking Confirmation</BookingFormHeading>
        <BookingFormSubHeading>
            Please verify your details<br/>
            Let’s make sure everything is perfect for your cleaning!
        </BookingFormSubHeading>
      <Box>
        <BookingParticulars />
      </Box>
    </Box>
  );
};

export default Index;
