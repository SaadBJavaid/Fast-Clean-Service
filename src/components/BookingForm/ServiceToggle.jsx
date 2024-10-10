"use client";
import { useState } from "react";
import { StyledToggleButton, StyledToggleButtonGroup } from "../mui/BookingFormPackages";
import useMultiStepForm from "../../hooks/useMultiStepForm";

const ServiceToggle = () => {
  const { updateFormData, formData } = useMultiStepForm();
  const [service, setService] = useState(formData.service || "Remote");

  const handleChange = (event, newService) => {
    if (newService === service) return;

    updateFormData({ service: newService });
    setService(newService);
  };

  return (
    <StyledToggleButtonGroup value={service} exclusive onChange={handleChange} aria-label="service type">
      <StyledToggleButton value="Remote" aria-label="on-location service">
        On-location
      </StyledToggleButton>
      <StyledToggleButton value="Onsite" aria-label="onsite service">
        Detailing Shop
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default ServiceToggle;
