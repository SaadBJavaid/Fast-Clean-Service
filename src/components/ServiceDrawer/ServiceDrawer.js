"use client";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import LiscencePlate from "./LiscensePlateStep";
import CarTypeStep from "./CarTypeStep";
import PackageSelectionStep from "./PackageSelectionStep";
import SubscptionPackagesStep from "./SubscriptionPackagesStep";
import AdditionalOptionsStep from "./AdditonalOptionsStep";
import ScheduleAppointmentStep from "./ScheduleAppointmentStep";
import BookingSummaryStep from "./BookingSummaryStep";
import PersonParticularsStep from "./PersonParticularsStep";

import useMultiStepForm from "../../hooks/useMultiStepForm";
import { useValidation } from '../../contexts/ValidationContext';
import { useTheme } from "../../contexts/themeContext";

const ServiceDrawer = ({ anchor, open, onClose }) => {
  const form = useMultiStepForm();
  const { theme } = useTheme();

  const { isValid } = useValidation();
  const formData = form.formData;
  const step = form.currentStep;
  const handleNext = form.nextStep;
  const handleBack = form.prevStep;

  const price = form.price;

  const [selectedOption, setSelectedOption] = useState(null);

  const selectOption = (option, price) => {
    setSelectedOption(option);
    if (step === 1) {
      setStep(2);
    }
  };

  const Triangle = ({ left, top }) => (
      <Box
          sx={{
            position: "absolute",
            top: top,
            left: left,
            height: "150px",
            width: "150px",
            clipPath: "polygon(0 0, 100% 50%, 0 100%)",
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
            transform: "rotate(45deg)",
            zIndex: -1,
          }}
      />
  );

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <LiscencePlate />;
      case 2:
        return <CarTypeStep />;
      case 3:
        return <PackageSelectionStep />;
      case 4:
        return <SubscptionPackagesStep />;
      case 5:
        return <AdditionalOptionsStep />;
      case 6:
        return <BookingSummaryStep />;
      case 7:
        return <ScheduleAppointmentStep />;
      case 8:
        return <PersonParticularsStep />;
      default:
        return null;
    }
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          width: "70%",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        },
      }}
    >
      <Triangle left="25%" top="10%" />
      <Box sx={{ width: "100%", padding: 2, flexGrow: 1, overflowY: "auto" }}>{renderStepContent()}</Box>
      <Divider sx={{ borderColor: "#444" }} />
      <Box sx={{ padding: 2 }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.contrastText,
              fontSize: "1.5rem"
            }}
          >
            Price: €{price}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            onClick={handleBack}
            disabled={step === 1}
            variant="contained"
            sx={{
              backgroundColor: theme.palette.primary.accent,
              color: "#fff",
              "&:hover": {
                backgroundColor: theme.palette.primary.accent2,
              },
              fontSize: "1.4rem",
              padding: "12px 24px",
              borderRadius: "20px",
            }}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!isValid}
            variant="contained"
            sx={{
              backgroundColor: isValid ? theme.palette.primary.accent : "#555",
              color: "#fff",
              "&:hover": {
                backgroundColor: isValid ? theme.palette.primary.accent2 : "#555",
              },
              fontSize: "1.4rem",
              padding: "12px 24px",
              borderRadius: "20px",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
};

export default ServiceDrawer;
