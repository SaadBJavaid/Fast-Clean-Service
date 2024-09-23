import { Box } from "@mui/material";
import { BookingFormHeading } from "../../mui/BookingFormPackages";
import Summary from "./Summary";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading
      >
        Summary
      </BookingFormHeading>
      <Box>
        <Summary />
      </Box>
    </Box>
  );
};

export default Index;
