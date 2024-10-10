import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { useTheme } from "../../../contexts/themeContext";
import { SummaryHeading } from "../../mui/BookingFormPackages";

const Summary = () => {
  const { formData } = useMultiStepForm();
  const { updateValidation } = useValidation();
  updateValidation(true);
    const {theme} = useTheme();

  return (
    <Box
      sx={{
        padding: "3.2rem 1.6rem",
        borderRadius: "1.5rem",
        maxWidth: "700px",
        margin: "auto",
        boxShadow: "0 2px 11.9px rgba(0, 0, 0, 0.25)",
          "@media (max-width: 600px)": {
                padding: "0.5rem 2rem",
              border: "none",
              backgroundColor: "transparent",
              boxShadow: "none",
          },
      }}
    >
      <Grid container spacing={4}
            sx={{
                "@media (max-width: 600px)": {
                    backgroundColor: "transparent",
                    border: "none",
                },
            }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{marginBottom: "2rem",}}>
            <SummaryHeading>Vehicle Information</SummaryHeading>
            <SummaryItem
              label="License Plate"
              value={formData?.vehicleDetails?.kenteken}
            />
            <SummaryItem label="Vehicle Type" value={formData?.carType} />
          </Box>
          <Box
          sx={{
              "@media (max-width: 600px)": {
                  marginBottom: 0,
              },
          }}
          >
            <SummaryHeading>Add Ons</SummaryHeading>
            {formData?.selectedAdditionalOptions ? (
              formData.selectedAdditionalOptions.map((option, index) => (
                <SummaryItem key={index} label={option} value="" />
              ))
            ) : (
              <Typography
                sx={{
                  fontFamily: "Unbounded",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: "2.4rem",
                }}
              >
                No Addons
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ marginBottom: "2rem" }}>
            <SummaryHeading>Service</SummaryHeading>
            <SummaryItem
              label="Service Type"
              value={formData.selectedPackageType}
            />
            <SummaryItem
              label="Package Type"
              value={formData.selectedPackage.name}
            />
          </Box>
          <Box sx={{ marginBottom: "2rem" }}>
            <SummaryHeading>Detailings</SummaryHeading>
            {formData?.selectedDetailingOptions ? (
              formData.selectedDetailingOptions.map((option, index) => (
                <SummaryItem key={index} label={option} value="" />
              ))
            ) : (
              <Typography
                sx={{
                  fontFamily: "Unbounded",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  lineHeight: "2.4rem",
                }}
              >
                No Detailing Add ons
              </Typography>
            )}
          </Box>
          <Box>
            <SummaryHeading>Appointment</SummaryHeading>
            <SummaryItem
              label={formData.selectedTime?.toLocaleDateString("en-US", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
              value={formData.selectedTime?.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;

const SummaryItem = ({ label, value }) => {
    const {theme} = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        padding: "0 1rem",
        boxShadow: "0 2px 11.9px rgba(0, 0, 0, 0.25)",
        backgroundColor: theme.palette.mode === "dark" ? "transparent" : "#F9F9F9",
        borderRadius: "6px",
          border: '1px solid',
          borderColor: theme.palette.mode === "dark" ? "#C5C5C5" : "transparent",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Unbounded",
          fontSize: "0.8rem",
          fontWeight: 300,
          lineHeight: "2.4rem",
          color: theme.palette.mode === "dark" ? "#C5C5C5" : '#212121',
        }}
      >
        {label}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Unbounded",
          fontSize: "0.8rem",
          fontWeight: 300,
          lineHeight: "2.4rem",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
