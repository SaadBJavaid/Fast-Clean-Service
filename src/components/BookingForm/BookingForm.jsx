"use client";
import {Box} from "@mui/system";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import LiscencePlateStep from "./LiscensePlateStep";
import CarTypeStep from "./CarTypeStep";
import PackageSelectionStep from "./PackageSelectionStep";
import SubscriptionPackagesStep from "./SubscriptionPackagesStep";
import AutocarePackagesStep from "./AutoCarePackagesStep";
import AdditionalOptionsStep from "./AdditonalOptionsStep";
import DetailingStep from "./DetailingStep";
import ScheduleAppointmentStep from "./ScheduleAppointmentStep";
import SummaryStep from "./SummaryStep";
import PersonParticularsStep from "./PersonParticularsStep";

const BookingForm = () => {
  const { currentStep, formData, nextStep } = useMultiStepForm();

  if (currentStep === 1) return <LiscencePlateStep />;
  else if (currentStep === 2) return <CarTypeStep />;
  else if (currentStep === 3) return <PackageSelectionStep />;
  else if (currentStep === 4) return <SubscriptionPackagesStep />;
  else if (currentStep === 5 && formData.selectedPackageType === "Subscription Plans") {
    nextStep();
    // return null;
  } else if (currentStep === 5 && formData.selectedPackageType === "Anywhere Autocare") return <AutocarePackagesStep />;
  else if (currentStep === 6) return <AdditionalOptionsStep />;
  else if (currentStep === 7) return <DetailingStep />;
  else if (currentStep === 8) return <ScheduleAppointmentStep />;
  else if (currentStep === 9) return <SummaryStep />;
  else if (currentStep === 10) return <PersonParticularsStep />;

  return <Box>Undefined</Box>;
};

export default BookingForm;
