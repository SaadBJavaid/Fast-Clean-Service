"use client";
import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import {useTheme} from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {BookingStepHeading, BookingStepSubHeading} from "../BookingPckgs";
import {useValidation} from '../../../contexts/ValidationContext';

const carTypes = [
    { name: "Bestelwagen", icon: <LocalShippingIcon sx={{ fontSize: 40 }} /> },
    { name: "Cabriolet", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
    { name: "Coupe", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
    { name: "Hatchback", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
    { name: "Pick-uptruck", icon: <LocalShippingIcon sx={{ fontSize: 40 }} /> },
    { name: "Sedan", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
    { name: "Stationwagen", icon: <DirectionsCarIcon sx={{ fontSize: 40 }} /> },
    { name: "SUV/MPV", icon: <DirectionsBusIcon sx={{ fontSize: 40 }} /> }
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
                    gridTemplateColumns: "repeat(4, 1fr)",
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
