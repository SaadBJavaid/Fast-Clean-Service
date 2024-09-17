"use client";
import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

import { AutoTabContainer } from "../../../components/mui/AutoCarePkgs";
import { AutoTabPackage } from "../../../app/subscribe/page";
import { packages } from "../../../app/subscribe/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from '../../../contexts/ValidationContext';

const SubscriptionPackages = () => {
  const { theme } = useTheme();
    const [selectedPackage, setSelectedPackage] = useState(null);
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
  const color = "#00c3ff" || "#FFC107";
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
          "@media (min-width: 300px) and (max-width: 600px)": {
            "& > div": {
              flex: "1 1 calc(50% - 16px)",
              maxWidth: "calc(50% - 16px)",
            },
          },
          "@media (max-width: 300px)": {
            "& > div": {
              flex: "1 1 70%",
              maxWidth: "70%",
            },
          },
          "@media (max-width: 150px)": {
            "& > div": {
              flex: "1 1 50%",
              maxWidth: "50%",
            },
          },
            color: textColor,
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
      )
    </Box>
  );
};

export default SubscriptionPackages;
