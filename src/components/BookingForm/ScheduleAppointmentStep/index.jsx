import {Box} from "@mui/material";
import React from "react";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SmallScreenView from "./smallScreenView";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Schedule Appointment</BookingFormHeading>
      <BookingFormSubHeading>
        Please select an appointment time <br />
        We’re ready to clean when it’s most convenient for you!
      </BookingFormSubHeading>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <SmallScreenView />
        </LocalizationProvider>
      </Box>
    </Box>
  );
};

export default Index;
