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
import { useTheme } from "../../contexts/themeContext";

const ServiceDrawer = ({ anchor, open, onClose }) => {
  const form = useMultiStepForm();
  const { theme } = useTheme();

  const step = form.currentStep;
  const handleNext = form.nextStep;
  const handleBack = form.prevStep;
  const price = form.price;

  const [isStepCompleted, setIsStepCompleted] = useState(false);

  const handleValidation = (validated) => {
    setIsStepCompleted(validated);
  };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return <LiscencePlate onValidate={handleValidation} />;
            case 2:
                return <CarTypeStep onValidate={handleValidation} />;
            case 3:
                return <PackageSelectionStep onValidate={handleValidation} />;
            case 4:
                return <SubscptionPackagesStep onValidate={handleValidation} />;
            case 5:
                return <AdditionalOptionsStep onValidate={handleValidation} />;
            case 6:
                return <ScheduleAppointmentStep onValidate={handleValidation} />;
            case 7:
                return <BookingSummaryStep onValidate={handleValidation} />;
            case 8:
                return <PersonParticularsStep onValidate={handleValidation} />;
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
        <Box sx={{ width: "100%", padding: 2, flexGrow: 1, overflowY: "auto" }}>
          {renderStepContent()}
        </Box>
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
                disabled={!isStepCompleted}
                variant="contained"
                sx={{
                  backgroundColor: isStepCompleted ? "#333" : "#555",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: isStepCompleted ? "#444" : "#555",
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
