import { Box } from "@mui/material";
import StepBar from "./StepBar";
import { FormProvider } from "../../contexts/MultiStepFormContext";
import { BookingFormHeading } from "../mui/BookingFormPackages";
import LiscencePlate from "../ServiceDrawer/LiscensePlateStep/LiscencePlate";

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
        <StepBar />


        <LiscencePlate />
      </Box>
    </FormProvider>
  );
};

export default Index;
