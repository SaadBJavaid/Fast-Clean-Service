"use client";
import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { BookingStepHeading, BookingStepSubHeading } from "../BookingPckgs";
import { useValidation } from '../../../contexts/ValidationContext';

const carTypes = [
    { name: "Trailer", icon: <AgricultureIcon sx={{ fontSize: 40 }} /> },
    { name: "Company car", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
    { name: "Moped", icon: <TwoWheelerIcon sx={{ fontSize: 40 }} /> },
    { name: "Bus", icon: <DirectionsBusIcon sx={{ fontSize: 40 }} /> },
    { name: "Three-wheeler", icon: <PedalBikeIcon sx={{ fontSize: 40 }} /> },
    { name: "Mobile machine", icon: <AgricultureIcon sx={{ fontSize: 40 }} /> },
    { name: "Motorcycle", icon: <PedalBikeIcon sx={{ fontSize: 40 }} /> },
    { name: "Semi-trailer", icon: <LocalShippingIcon sx={{ fontSize: 40 }} /> },
    { name: "Passenger car", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
];

const CarTypeBox = ({ name, icon, selected }) => {
    const { theme } = useTheme();

    const styledIcon = React.cloneElement(icon, {
        sx: {
            fontSize: 40,
            color: selected ? "white" : (theme.palette.mode === 'dark' ? "#ccc" : "#333")
        }
    });

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
                borderRadius: "10px",
                width: "140px",
                height: "140px",
                backgroundColor: selected ? theme.palette.primary.accent : theme.palette.mode === "dark" ? "#333" : "white",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                "&:hover": {
                    backgroundColor: selected ? theme.palette.primary.accent : (theme.palette.mode === 'dark' ? '#444' : '#eeeeee'),
                },
                textAlign: "center",
            }}
        >
            {styledIcon}
            <Typography
                sx={{
                    fontSize: 14,
                    fontWeight: "bold",
                    color: selected ? "white" : (theme.palette.mode === 'dark' ? "#ccc" : "#333"),
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
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
        }}>
            <BookingStepHeading>Vehicle Type</BookingStepHeading>
            <BookingStepSubHeading>Select your vehicle type</BookingStepSubHeading>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "fit-content",
                    margin: 'auto',
                }}
            >
                {carTypes.slice(0, 9).map((carType) => (
                    <Box
                        key={carType.name}
                        onClick={() => handleCarTypeClick(carType.name)}
                    >
                        <CarTypeBox
                            name={carType.name}
                            icon={carType.icon}
                            selected={selectedCarType === carType.name}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Index;
