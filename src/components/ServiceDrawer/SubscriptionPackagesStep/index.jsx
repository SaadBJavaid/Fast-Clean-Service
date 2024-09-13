import { Box } from "@mui/material";
import SubscriptionPackages from "./SubscriptionPackages";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";

const Index = () => {
  return (
    <Box>
      <BookingStepHeading>Package</BookingStepHeading>
      <BookingStepSubHeading>Select desired package</BookingStepSubHeading>
      <Box>
        <SubscriptionPackages />
      </Box>
    </Box>
  );
};

export default Index;
