"use client";
import { Box, Typography, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useTheme } from "../../../contexts/themeContext";
import { useValidation } from '../../../contexts/ValidationContext';
import { styled } from "@mui/system";

const StyledImage = styled("img")(({ }) => ({
    width: "100%",
    height: "250px",
    objectFit: "cover",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
}));

const packages = [
    { name: "Anywhere Autocare", image: "/g1.jpg"},
    { name: "Subscription Plans", image: "/g4.jpg"},
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
        <Box sx={{ width: "90%", margin: "auto", mt: 2 }}>
            <Grid container spacing={2}>
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} key={pkg.name} onClick={() => handlePackageSelect(pkg.name)}>
                        <Box
                            sx={{
                                cursor: "pointer",
                                position: "relative",
                                padding: "1rem",
                                borderRadius: "15px",
                                boxShadow: selectedOption === pkg.name ? "0px 8px 20px rgba(0, 0, 0, 0.3)" : "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                transition: "box-shadow 0.3s ease",
                                backgroundColor: theme.palette.background.default,
                                "&:hover": {
                                    transform: "scale(1.05)",
                                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                                },
                                textAlign: "center",
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    cursor: "pointer",
                                    fontWeight: selectedOption === pkg.name ? "bold" : "normal",
                                    color: selectedOption === pkg.name ? theme.palette.primary.accent : theme.palette.text.primary,
                                    mb: 2,
                                }}
                            >
                                {pkg.name}
                            </Typography>
                            <StyledImage src={pkg.image} alt={pkg.name} isTriangleRight={pkg.isTriangleRight} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PackageSelection;
