"use client";
import { useState } from "react";
import { StyledToggleButton, StyledToggleButtonGroup } from "../mui/BookingFormPackages";

const ServiceToggle = () => {
  const [service, setService] = useState("mobile");

  const handleChange = (event, newService) => {
    if (newService !== null) {
      setService(newService);
    }
  };

  return (
    <StyledToggleButtonGroup value={service} exclusive onChange={handleChange} aria-label="service type">
      <StyledToggleButton value="mobile" aria-label="mobile service">
        Mobile Service
      </StyledToggleButton>
      <StyledToggleButton value="onsite" aria-label="onsite service">
        Onsite Service
      </StyledToggleButton>
    </StyledToggleButtonGroup>
  );
};

export default ServiceToggle;
