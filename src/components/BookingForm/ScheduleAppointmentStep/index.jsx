import {Box} from "@mui/material";
import React from "react";
import ScheduleAppointment from "./ScheduleAppointment";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Schedule Appointment</BookingFormHeading>
      <Box>
        <ScheduleAppointment />
      </Box>
    </Box>
  );
};

export default Index;
