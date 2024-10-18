import {Box} from "@mui/material";
import React from "react";
import ScheduleAppointment from "./ScheduleAppointment";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Schedule Appointment</BookingFormHeading>
        <BookingFormTagline>
            Enter your license plate to kickstart your personalized service.
        </BookingFormTagline>
      <Box>
        <ScheduleAppointment />
      </Box>
    </Box>
  );
};

export default Index;
