import { Box, Typography } from "@mui/material";
import React from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useTheme } from "../../../contexts/themeContext";

const PackageBox = ({ onClick, name, price, duration, cleaningFrequency, additionalCost, selected = false }) => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        padding: "16px",
        cursor: "pointer",
        backgroundColor: selected ? theme.palette.primary.accent : "#333",

        "&:hover": {
          backgroundColor: selected ? theme.palette.primary.accent : "#444",
        },
      }}
      onClick={(e) => {
        onClick(name);
      }}
    >
      <Typography
        style={{
          fontSize: 18,
          fontWeight: "bold",
          color: selected ? "white" : "#ccc",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

const packages = [
  { name: "Anywhere Autocare" },
  {
    name: "Subscription Plans",
  },
];

const PackageSelection = () => {
  const form = useMultiStepForm();

  const onClick = (packageId) => {
    form.updateFormData({ selectedPackageType: packageId });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
        }}
      >
        {packages.map((pkg) => (
          <PackageBox {...pkg} selected={pkg.name === form.formData?.selectedPackageType} onClick={onClick} />
        ))}
      </Box>
    </Box>
  );
};

export default PackageSelection;
