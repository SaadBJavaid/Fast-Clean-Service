import { Box } from "@mui/material";
import StepBar from "./StepBar";
import { FormProvider } from "../../contexts/MultiStepFormContext";
import {
  BookingFormHeading,
  ButtonContainer,
  NextPrevButton,
  PricingContainer,
  PricingSpacer,
  PricingText,
  PricingTextContainer,
  ServiceToggleContainer,
} from "../mui/BookingFormPackages";
import LiscencePlateStep from "./LiscensePlateStep";

import ServiceToggle from "./ServiceToggle";

const Index = () => {
  return (
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

        <LiscencePlateStep />

        <PricingContainer>
          <PricingSpacer />

          <PricingTextContainer>
            <PricingText>Price</PricingText>
            <PricingText>$ 0.00</PricingText>
          </PricingTextContainer>
          <ButtonContainer>
            <NextPrevButton dull>Back</NextPrevButton>
            <NextPrevButton>Next</NextPrevButton>
          </ButtonContainer>
        </PricingContainer>
      </Box>
    </FormProvider>
  );
};

export default Index;
