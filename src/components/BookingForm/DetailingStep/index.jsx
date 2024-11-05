import {Box} from "@mui/material";
import React from "react";
import DetailingOptions from "./Detailing";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Detailing</BookingFormHeading>
        <BookingFormSubHeading>
            Please pick your detailing extras <br/>
            The finer the detail, the better the clean!
        </BookingFormSubHeading>
      <Box>
        <DetailingOptions />
      </Box>
    </Box>
  );
};

export default Index;
