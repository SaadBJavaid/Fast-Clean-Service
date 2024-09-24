import {Box} from "@mui/material";
import SubscriptionPackages from "./SubscriptionPackages";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading
        sx={{
          marginBottom: "5rem",
        }}
      >
        Vehicle Type
      </BookingFormHeading>
      <Box>
        <SubscriptionPackages />
      </Box>
    </Box>
  );
};

export default Index;
