"use client";
import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: "white",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "9999px", // Very large value for pill shape
  padding: "5px",
  boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  border: "none",
  borderRadius: "9999px !important", // Very large value for pill shape
  padding: "16px 24px",
  textTransform: "none",
  border: "1px solid transparent",

  "&.Mui-selected": {
    backgroundColor: "#1C79CC",
    color: "white",
    "&:hover": {
      backgroundColor: "#1C79DD",
    },
    border: "1px solid #C4C1C1",
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  transition: "all 0.3s ease",

  fontSize: "1rem",
  fontFamily: "Unbounded",
  fontWeight: "300",
  color: "#040404",
}));

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
