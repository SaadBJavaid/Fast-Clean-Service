import {Box} from "@mui/material";
import React from "react";
import DetailingOptions from "./Detailing";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Detailing</BookingFormHeading>
      <BookingFormSubHeading>Optional</BookingFormSubHeading>
      <Box>
        <DetailingOptions />
      </Box>
    </Box>
  );
};

export default Index;
