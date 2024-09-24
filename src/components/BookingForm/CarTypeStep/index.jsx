"use client";
import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {useTheme} from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {useValidation} from "../../../contexts/ValidationContext";
import {BookingFormHeading} from "../../mui/BookingFormPackages";

const carTypes = [
  { name: "Bestelwagen", icon: <LocalShippingIcon sx={{ fontSize: 40 }} /> },
  { name: "Cabriolet", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
  { name: "Coupe", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
  { name: "Hatchback", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
  { name: "Pick-uptruck", icon: <LocalShippingIcon sx={{ fontSize: 40 }} /> },
  { name: "Sedan", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
  { name: "Stationwagen", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
  { name: "SUV/MPV", icon: <DirectionsBusIcon sx={{ fontSize: 40 }} /> },
];

const CarTypeBox = ({ name, icon, selected }) => {
  const { theme } = useTheme();

  const styledIcon = React.cloneElement(icon, {
    sx: {
      fontSize: 32,
      color: theme.palette.primary.contrastText,
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        border: `1px solid ${selected ? "#1C79CC" : "#A5A5A5"}`,
        borderRadius: "10px",
        width: "80px",
        height: "80px",
        backgroundColor: theme.palette.primary.main,
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
        textAlign: "center",
        boxShadow: "0 1px 14.3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {styledIcon}
      <Typography
        sx={{
          fontFamily: "Unbounded",
          fontSize: 7,
          fontWeight: "light",
          color: "#434343",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

const Index = () => {
  const [selectedCarType, setSelectedCarType] = useState(null);
  const form = useMultiStepForm();
  const { updateValidation } = useValidation();

  useEffect(() => {
    updateValidation(!!selectedCarType);
  }, [selectedCarType, updateValidation]);

  const handleCarTypeClick = (carType) => {
    setSelectedCarType(carType);
    form.updateFormData({ carType });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <BookingFormHeading
        sx={{
          marginBottom: "5rem",
        }}
      >
        Vehicle Type
      </BookingFormHeading>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "fit-content",
          margin: "auto",
        }}
      >
        {carTypes.slice(0, 9).map((carType) => (
          <Box key={carType.name} onClick={() => handleCarTypeClick(carType.name)}>
            <CarTypeBox name={carType.name} icon={carType.icon} selected={selectedCarType === carType.name} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
