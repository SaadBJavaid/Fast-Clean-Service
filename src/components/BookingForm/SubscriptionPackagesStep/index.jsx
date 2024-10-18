import { Box } from "@mui/material";
import SubscriptionPackages from "./SubscriptionPackages";
import {BookingFormHeading, BookingFormTagline} from "../../mui/BookingFormPackages";
import React from "react";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>
        Package
      </BookingFormHeading>

        <BookingFormTagline>
            Pick the package that will give your car the care it deserves.
        </BookingFormTagline>

      <Box>
        <SubscriptionPackages />
      </Box>
    </Box>
  );
};

export default Index;
