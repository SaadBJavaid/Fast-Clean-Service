import { Box, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useTheme } from "../../../contexts/themeContext";
import { styled } from "@mui/system";

const StyledImage = styled("img")(({ isTriangleRight }) => ({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    clipPath: isTriangleRight
        ? "polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%)"
        : "polygon(100% 0, 100% 100%, 5% 100%, 0 50%, 5% 0)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
    },
}));

const packages = [
    { name: "Anywhere Autocare", image: "/g1.jpg", isTriangleRight: true },
    { name: "Subscription Plans", image: "/g4.jpg", isTriangleRight: false },
];

const PackageSelection = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const form = useMultiStepForm();
    const { theme } = useTheme();

    const handlePackageSelect = (packageName) => {
        setSelectedOption(packageName);
        form.updateFormData({ selectedPackageType: packageName });
    };

    return (
        <Box sx={{ width: "90%", margin: "auto", mt: 2 }}>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} key={pkg.name} onClick={() => handlePackageSelect(pkg.name)} sx={{ textAlign: "center" }}>
                        <Typography
                            variant="h3"
                            sx={{
                                cursor: "pointer",
                                fontWeight: selectedOption === pkg.name ? "bold" : "normal",
                                color: selectedOption === pkg.name ? theme.palette.primary.accent : theme.palette.text.primary,
                                mb: 1,
                            }}
                        >
                            {pkg.name}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            <Grid container spacing={0}>
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} key={pkg.name} onClick={() => handlePackageSelect(pkg.name)}>
                        <Box sx={{ cursor: "pointer", position: "relative" }}>
                            <StyledImage src={pkg.image} alt={pkg.name} isTriangleRight={pkg.isTriangleRight} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PackageSelection;
