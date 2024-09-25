import {Box} from "@mui/material";
import AutocarePackages from "./AutocarePackages";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const Index = () => {
  return (
    <Box>
      <BookingFormHeading>Package</BookingFormHeading>
      <Box>
        <AutocarePackages />
      </Box>
    </Box>
  );
};

export default Index;
