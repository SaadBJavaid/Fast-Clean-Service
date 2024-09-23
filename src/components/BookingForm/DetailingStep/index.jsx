import { Box } from "@mui/material";
import React from "react";
import DetailingOptions from "./Detailing";
import { BookingFormHeading } from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Detailing</BookingFormHeading>
      <Box>
        <DetailingOptions />
      </Box>
    </Box>
  );
};

export default Index;
