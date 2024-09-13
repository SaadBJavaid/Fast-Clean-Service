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

import useMultiStepForm from "../../hooks/useMultiStepForm";
import { useTheme } from "../../contexts/themeContext";

const ServiceDrawer = ({ anchor, open, onClose }) => {
  const form = useMultiStepForm();
  const { theme } = useTheme();

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
        return <ScheduleAppointmentStep />;
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
      <Box sx={{ width: "100%", padding: 2, flexGrow: 1, overflowY: "auto" }}>{renderStepContent()}</Box>
      <Divider sx={{ borderColor: "#444" }} />
      <Box sx={{ padding: 2 }}>
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.primary.contrastText,
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
              backgroundColor: "#333",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#444",
              },
              fontSize: "1rem",
              padding: "10px 20px",
            }}
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            // !change to form steps
            disabled={false}
            variant="contained"
            sx={{
              backgroundColor: selectedOption ? "#333" : "#555", // Lighter color when disabled
              color: "#fff",
              "&:hover": {
                backgroundColor: selectedOption ? "#444" : "#555", // No hover effect if disabled
              },
              fontSize: "1rem",
              padding: "10px 20px",
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
