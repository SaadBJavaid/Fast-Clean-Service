"use client";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useTheme } from "../../../contexts/themeContext";
import { useValidation } from "../../../contexts/ValidationContext";
import { styled } from "@mui/material";
import Image from "next/image";

const StyledImage = styled(Image)(({}) => ({
  width: "194.4px",
  height: "104.4px",
  objectFit: "cover",
  borderRadius: "7px",
  boxShadow: "0px 4px 9.6px rgba(0, 0, 0, 0.25)",

  "@media (max-width: 600px)": {
    padding: "0.6rem 0.6rem 0",
    width: "100%",
    objectFit: "cover",
    height: "auto",
    maxHeight: "9.3rem",
  },
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
    <Box sx={{ maxWidth: "550px", margin: "auto", mt: 2,
      "@media (max-width: 600px)": {
        width: "100%",
        padding: "0 2rem",
      },
    }}>
      <Grid container spacing={1} sx={{ alignItems: "center" }}>
        {packages.map((pkg) => (
          <Grid item xs={6} key={pkg.name} onClick={() => handlePackageSelect(pkg.name)}>
            <Box
              sx={{
                cursor: "pointer",
                padding: "1rem",
                borderRadius: "10px",
                transition: "all 0.3s ease",
                backgroundColor: theme.palette.primary.main,
                border: `${selectedOption === pkg.name ? "2px" : "1px"} solid ${
                  selectedOption === pkg.name ? "#1C79CC" : "#A5A5A5"
                }`,
                boxSizing: "border-box",
                transformOrigin: "center center",
                boxShadow: "0px 4px 12.3px 0px #0000002B",

                "@media (max-width: 600px)": {
                  borderRadius: "10px",
                  padding: 0,
                  marginTop: "-1.5rem",
                  marginBottom: "9.9rem",

                  "& img" : {
                    width: "100%",
                  },
                },
              }}
            >
              <StyledImage src={pkg.image} alt={pkg.name} width={194.4} height={104.4} />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Unbounded",
                  fontSize: "12px",
                  fontWeight: "light",
                  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                  padding: "1rem 0",
                  textAlign: "center",

                  "@media (max-width: 600px)": {
                    fontSize: "8px",
                    fontWeight: "300",
                    lineHeight: "0.992rem",
                    padding: "0.8rem 0",
                  },
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
