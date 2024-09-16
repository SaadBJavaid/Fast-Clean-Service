import { Box } from "@mui/material";
import React from "react";
import { AutoTabContainer } from "../../../components/mui/AutoCarePkgs";
import { AutoTabPackage } from "../../../app/subscribe/page";
import { packages } from "../../../app/subscribe/data";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";

const SubscriptionPackages = ({ onValidate }) => {
    const { theme } = useTheme();
    const form = useMultiStepForm();
    const color = "#00c3ff" || "#FFC107";
    const textColor = theme.palette.mode === 'dark' ? '#ffffff' : '#000000';

    const handleClick = (packageName) => {
        form.updateFormData({ selectedPackage: packageName });
        form.nextStep();
        onValidate(true);
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
        </Box>
    );
};

export default SubscriptionPackages;
