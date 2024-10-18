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
            Enter your license plate to kickstart your personalized service.
        </BookingFormTagline>

      <Box>
        <SubscriptionPackages />
      </Box>
    </Box>
  );
};

export default Index;
