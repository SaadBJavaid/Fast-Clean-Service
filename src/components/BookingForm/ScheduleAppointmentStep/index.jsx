import {Box} from "@mui/material";
import React from "react";
import ScheduleAppointment from "./ScheduleAppointment";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Schedule Appointment</BookingFormHeading>
        <BookingFormSubHeading>
            Please select an appointment time <br/>
            We’re ready to clean when it’s most convenient for you!
        </BookingFormSubHeading>
      <Box>
        <ScheduleAppointment />
      </Box>
    </Box>
  );
};

export default Index;
