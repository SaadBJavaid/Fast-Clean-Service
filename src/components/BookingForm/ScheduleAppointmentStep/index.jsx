import {Box} from "@mui/material";
import React from "react";
import ScheduleAppointment from "./ScheduleAppointment";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Schedule Appointment</BookingFormHeading>
        <BookingFormTagline>
            Book a slot that works for you, and let us take care of your car.
        </BookingFormTagline>
      <Box>
        <ScheduleAppointment />
      </Box>
    </Box>
  );
};

export default Index;
