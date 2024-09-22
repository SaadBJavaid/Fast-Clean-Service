import { Box } from "@mui/material";
import React from "react";
import ScheduleAppointment from "./ScheduleAppointment";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";

const Index = () => {
  return (
    <Box>
      <BookingStepHeading>Schedule Appointment</BookingStepHeading>
      <BookingStepSubHeading>Select what time suits you</BookingStepSubHeading>
      <Box>
        <ScheduleAppointment />
      </Box>
    </Box>
  );
};

export default Index;
