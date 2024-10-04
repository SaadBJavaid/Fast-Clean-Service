"use client";
import React, {useState} from "react";
import {Box, ToggleButton, ToggleButtonGroup} from "@mui/material";
import {styled} from "@mui/material/styles";
import {useTheme} from "../../contexts/themeContext";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "white",
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: "9999px",
  padding: "5px",
  boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.25)",
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  borderRadius: "9999px !important",
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
  color: theme.palette.mode === "dark" ? "#FFF" : "#040404",

  "@media (max-width: 600px)":  {
    fontSize: "0.7rem",
    maxHeight: "2.6rem",
    maxWidth: "15.2rem",
    fontWeight: "200",
    padding: "12px 8px",
  },
}));

const ServiceToggle = () => {
  const [service, setService] = useState("mobile");
  const { theme } = useTheme();

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
