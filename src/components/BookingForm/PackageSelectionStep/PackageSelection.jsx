"use client";
import { Box, Typography, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useTheme } from "../../../contexts/themeContext";
import { useValidation } from '../../../contexts/ValidationContext';
import { maxWidth, styled, textAlign } from "@mui/system";
import Image from "next/image";

const StyledImage = styled(Image)(({}) => ({
  width: "162px",
  height: "87px",
  objectFit: "cover",
  borderRadius: "7px",
  boxShadow: "0px 4px 9.6px rgba(0, 0, 0, 0.25)",
}));

const packages = [
  { name: "Anywhere Autocare", image: "/g1.jpg" },
  { name: "Subscription Plans", image: "/g4.jpg" },
];

const PackageSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const form = useMultiStepForm();
  const { theme } = useTheme();
  const { updateValidation } = useValidation();

  useEffect(() => {
    updateValidation(!!selectedOption);
  }, [selectedOption, updateValidation]);

  const handlePackageSelect = (packageName) => {
    setSelectedOption(packageName);
    form.updateFormData({ selectedPackageType: packageName });
  };

  return (
    <Box sx={{ maxWidth: "550px", margin: "auto", mt: 2 }}>
      <Grid container spacing={1}>
        {packages.map((pkg) => (
          <Grid item xs={6} key={pkg.name} onClick={() => handlePackageSelect(pkg.name)}>
            <Box
              sx={{
                cursor: "pointer",
                padding: "1rem",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: theme.palette.primary.main,
                border: `1px solid ${selectedOption === pkg.name ? "#1C79CC" : "#A5A5A5"}`,
              }}
            >
              <StyledImage src={pkg.image} alt={pkg.name} width={162} height={87} />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Unbounded",
                  fontSize: "12px",
                  fontWeight: "light",
                  color: "#232E4A",
                  padding: "1rem 0",
                  textAlign: "center",
                }}
              >
                {pkg.name}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackageSelection;
