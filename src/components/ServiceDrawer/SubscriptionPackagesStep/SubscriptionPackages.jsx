import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import { AutoTabContainer } from "../../../components/mui/AutoCarePkgs";
import { packages } from "../../../app/subscribe/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from '../../../contexts/ValidationContext';
import { AutoTabPackage } from "../../BookingForm/AutoCarePackagesStep/AutocarePackages";

const SubscriptionPackages = () => {
    const { theme } = useTheme();
    const [selectedPackage, setSelectedPackage] = useState(null);
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const color = "#00c3ff";
    const textColor = theme.palette.mode === 'dark' ? '#ffffff' : '#000000';

    useEffect(() => {
        updateValidation(!!selectedPackage);
    }, [selectedPackage, updateValidation]);

    const handleClick = (packageName) => {
        if (packageName !== selectedPackage) {
            setSelectedPackage(packageName);
            form.updateFormData({ selectedPackage: packageName });
        }
    };

    return (
        <Box>
            <AutoTabContainer
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "center",
                    color: textColor,
                    "& > div": {
                        flex: "1 1 calc(33.333% - 16px)",
                        maxWidth: "calc(33.333% - 16px)",
                        fontSize: "1.5rem",
                    },
                    "@media (max-width: 600px)": {
                        "& > div": {
                            flex: "1 1 100%",
                            maxWidth: "100%",
                        },
                    },
                }}
            >
                {packages.map((pkg, index) => (
                    <AutoTabPackage
                        key={index}
                        pkg={pkg}
                        index={index}
                        color={color}
                        onClick={() => {
                            handleClick(pkg.name);
                        }}
                    />
                ))}
            </AutoTabContainer>
        </Box>
    );
};

export default SubscriptionPackages;
