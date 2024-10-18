import { Box } from "@mui/material";
import SubscriptionPackages from "./SubscriptionPackages";
import {BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import React from "react";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>
        Package
      </BookingFormHeading>

        <BookingFormSubHeading>
            Please choose a plan<br />
            Enjoy regular, worry-free cleaning!
        </BookingFormSubHeading>

      <Box sx={{ marginBottom: "3rem"}}>
        <SubscriptionPackages />
      </Box>
    </Box>
  );
};

export default Index;
