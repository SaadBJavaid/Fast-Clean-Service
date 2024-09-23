import { Grid, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";

const SummaryHeading = styled(Typography)(({ theme }) => ({
  fontFamily: "Unbounded",
  marginBottom: "0.5rem",
  color: "#000000",
  fontSize: "1.4rem",
  fontWeight: "regular",
  lineHeight: "2.4rem",
}));

const Summary = () => {
  const { formData } = useMultiStepForm();
  const { updateValidation } = useValidation();
  updateValidation(true);

  return (
    <Box
      sx={{
        padding: "3.2rem 1.6rem",
        borderRadius: "1.5rem",
        maxWidth: "700px",
        margin: "auto",
        boxShadow: "0 2px 11.9px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <SummaryHeading>Vehicle Information</SummaryHeading>
            <SummaryItem label="License Plate" value={formData.vehicleDetails?.kenteken} />
            <SummaryItem label="Vehicle Type" value={formData.carType} />
          </Box>
          <Box>
            <SummaryHeading>Add Ons</SummaryHeading>
            {formData.selectedAdditionalOptions ? (
              formData.selectedAdditionalOptions.map((option) => <SummaryItem label={option} value="" />)
            ) : (
              <Typography sx={{ fontFamily: "Unbounded", fontSize: "0.8rem", fontWeight: 300, lineHeight: "2.4rem" }}>
                No Addons
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <SummaryHeading>Service</SummaryHeading>
            <SummaryItem label="Service Type" value={formData.selectedPackageType} />
            <SummaryItem label="Package Type" value={formData.selectedPackage} />
          </Box>
          <Box>
            <SummaryHeading>Detailings</SummaryHeading>
            {formData.selectedDetailingOptions ? (
              formData.selectedDetailingOptions.map((option) => <SummaryItem label={option} value="" />)
            ) : (
              <Typography sx={{ fontFamily: "Unbounded", fontSize: "0.8rem", fontWeight: 300, lineHeight: "2.4rem" }}>
                No Detailing Addons
              </Typography>
            )}
          </Box>
          <Box>
            <SummaryHeading>Appointment</SummaryHeading>
            <SummaryItem label="Appointment" value="123456" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Summary;

const SummaryItem = ({ label, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        padding: "0 1rem",
        boxShadow: "0 2px 11.9px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Unbounded",
          fontSize: "0.8rem",
          fontWeight: 300,
          lineHeight: "2.4rem",
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
