import { Box } from "@mui/material";
import StepBar from "./StepBar";
import { FormProvider } from "../../contexts/MultiStepFormContext";
import { ServiceToggleContainer } from "../mui/BookingFormPackages";
import BookingForm from "./BookingForm";
import BookingFormFooter from "./BookingFormFooter";
import ServiceToggle from "./ServiceToggle";
import { ValidationProvider } from "../../contexts/ValidationContext";

const Index = () => {
  return (
    <ValidationProvider>
      <FormProvider>
        <Box
          sx={{
            maxWidth: "1170px",
            margin: "0 auto",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.17)",
            borderRadius: "23px",
            padding: "4rem 2rem",
            border: "1px solid #CECECE",
          }}
        >
          <ServiceToggleContainer>
            <ServiceToggle />
          </ServiceToggleContainer>

          <StepBar />

          <BookingForm />

          <BookingFormFooter />
        </Box>
      </FormProvider>
    </ValidationProvider>
  );
};

export default Index;
