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
import axios from "axios";

const ServiceDrawer = ({ anchor, open, onClose }) => {
    const form = useMultiStepForm();
    const { theme } = useTheme();
    const { isValid, updateValidation } = useValidation();  // Context validation

    const [loading, setLoading] = useState(false);
    const [plate, setPlate] = useState("");
    const [error, setError] = useState("");

    const step = form.currentStep;
    const price = form.price;

    const fetchLicensePlateData = async (licensePlate) => {
        const response = await axios.get(`/api/license-plate?licensePlate=${licensePlate}`);
        const data = response.data;

        if (response.data?.length === 0) {
            throw new Error(`No data found for ${licensePlate}`);
        }

        return data[0];
    };

    const validatePlate = async () => {
        setLoading(true);
        setError("");

        if (plate.length === 0) {
            setError("Please enter your license plate number");
            setLoading(false);
            updateValidation(false);
            return false;
        }

        const dutchLicensePlateRegex = /^(([A-Z]{2}-?\d{2}-?\d{2})|([A-Z]{2}-?\d{2}-?[A-Z]{2})|(\d{2}-?[A-Z]{2}-?\d{2})|(\d{2}-?[A-Z]{3}-?\d{1})|(\d{1}-?[A-Z]{3}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{2})|([A-Z]{3}-?\d{2}-?[A-Z]{1})|(\d{1}-?[A-Z]{2}-?\d{3})|([A-Z]{2}-?\d{3}-?[A-Z]{1})|([A-Z]{1}-?\d{2}-?[A-Z]{3})|([A-Z]{3}-?\d{2}-?\d{1})|(\d{3}-?[A-Z]{2}-?\d{1})|([A-Z]{2}-?[A-Z]{2}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{1})|([BHK]{1}[SDJFM]{1}-?[A-Z]{2}-?\d{2}))$/;

        if (!dutchLicensePlateRegex.test(plate)) {
            setError("Invalid license plate format");
            setLoading(false);
            updateValidation(false);
            return false;
        }

        try {
            const data = await fetchLicensePlateData(plate);
            form.updateFormData({ vehicleDetails: data });
            updateValidation(true);
            setLoading(false);
            return true;
        } catch (err) {
            setError(err.message);
            console.error(err);
            updateValidation(false);
            setLoading(false);
            return false;
        }
    };

    const handleNext = async () => {
        // Step 1 (License Plate Validation) logic
        if (step === 1) {
            const isValid = await validatePlate();  // Validate license plate
            if (!isValid) return;  // Stop if validation fails
        }

        // For all steps, check context `isValid` before progressing
        if (!isValid) return;  // Disable progression if form is not valid

        form.nextStep();  // Move to the next step if validation passes
    };

    const handleBack = () => {
        form.prevStep();
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
          return <LiscencePlate plate={plate} setPlate={setPlate} error={error} loading={loading} />;
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
            disabled={!isValid && step !== 1}
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
