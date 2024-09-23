"use client";
import { Box } from "@mui/system";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import LiscencePlateStep from "./LiscensePlateStep";
import CarTypeStep from "./CarTypeStep";
import PackageSelectionStep from "./PackageSelectionStep";
import SubscriptionPackagesStep from "./SubscriptionPackagesStep";
import AutocarePackagesStep from "./AutoCarePackagesStep";
import AdditionalOptionsStep from "./AdditonalOptionsStep";

const BookingForm = () => {
  const { currentStep, formData, nextStep } = useMultiStepForm();

  if (currentStep === 1) return <LiscencePlateStep />;
  else if (currentStep === 2) return <CarTypeStep />;
  else if (currentStep === 3) return <PackageSelectionStep />;
  else if (currentStep === 4 && formData.selectedPackageType === "Subscription Plans") return <SubscriptionPackagesStep />;
  else if (currentStep === 4 && formData.selectedPackageType === "Anywhere Autocare") return <AutocarePackagesStep />;
  else if (currentStep === 5) return <AdditionalOptionsStep />;
  else if (currentStep === 2) return <LiscencePlateStep />;

  return <Box>Undefined</Box>;
};

export default BookingForm;
