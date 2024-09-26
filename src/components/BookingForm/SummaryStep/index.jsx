import { Box } from "@mui/material";
import { BookingFormHeading } from "../../mui/BookingFormPackages";
import Summary from "./Summary";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading sx={{ marginBottom: "4rem" }}>
        Summary
      </BookingFormHeading>
      <Box>
        <Summary />
      </Box>
    </Box>
  );
};

export default Index;
