import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";

const carTypes = [
  "Trailer",
  "Company car",
  "Moped",
  "Bus",
  "Three-wheeler",
  "Mobile machine",
  "Motorcycle",
  "Semi-trailer",
  "Passenger car",
];

const CarTypeBox = ({ name, icon, selected }) => {
  const { theme } = useTheme();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "2rem",
        borderRadius: "5px",
        width: "180px",
        height: "180px",
        backgroundColor: selected ? theme.palette.primary.accent : "#333",

        "&:hover": {
          backgroundColor: selected ? theme.palette.primary.accent : "#444",
        },
      }}
    >
      <DirectionsCarIcon sx={{ fontSize: 50 }} />
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

const Index = () => {
  const [selectedCarType, setSelectedCarType] = useState(null);

  const form = useMultiStepForm();

  const handleCarTypeClick = (carType) => {
    setSelectedCarType(carType);

    form.updateFormData({ carType });
  };

  return (
    <Box>
      <BookingStepHeading>Vehicle Type</BookingStepHeading>
      <BookingStepSubHeading>Select your vehicle type</BookingStepSubHeading>

      <Box
        style={{
          display: "flex",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {carTypes.map((carType) => (
          <Box onClick={() => handleCarTypeClick(carType)} style={{ cursor: "pointer" }}>
            <CarTypeBox name={carType} icon={<DirectionsCarIcon />} selected={selectedCarType === carType} key={carType} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Index;
