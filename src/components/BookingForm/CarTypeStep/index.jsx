"use client";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import {
    BookingFormHeading,
    BookingFormTagline,
    BookingFormSubHeading,
    CarTypeContainer,
} from "../../mui/BookingFormPackages";

import Subtract1 from "../../../../public/carsIcons/Subtract-1.svg";
import Subtract2 from "../../../../public/carsIcons/Subtract-2.svg";
import Subtract3 from "../../../../public/carsIcons/Subtract-3.svg";
import Subtract from "../../../../public/carsIcons/Subtract.svg";
import Union1 from "../../../../public/carsIcons/Union-1.svg";
import Union2 from "../../../../public/carsIcons/Union-2.svg";
import Union3 from "../../../../public/carsIcons/Union-3.svg";
import UnionIcon from "../../../../public/carsIcons/Union.svg";

const CarTypeBox = ({ name, icon, selected }) => {
    const { theme } = useTheme();

    const styledIcon = React.cloneElement(icon, {
        sx: {
            fontSize: 32,
            color: theme.palette.primary.contrastText,

            "@media (max-width: 600px)": {
                fontSize: 12,
            },
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

                "@media (max-width: 600px)": {
                    width: "6.3rem",
                    height: "5.9rem",
                },
            }}
        >
            {styledIcon}
            <Typography
                sx={{
                    marginTop: "6.5px",
                    fontFamily: "Unbounded",
                    fontSize: 7,
                    fontWeight: "light",
                    color: theme.palette.mode === "dark" ? "#fff" : "#434343",

                    "@media (max-width: 600px)": {
                        fontSize: "0.6rem",
                        lineHeight: "0.75rem",
                        fontWeight: "300",
                    },
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

    const { theme } = useTheme();

    const carTypes = [
        {
            name: "Bestelwagen",
            icon: (
                <Image
                    src={Subtract}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "Cabriolet",
            icon: (
                <Image
                    src={UnionIcon}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "Coupe",
            icon: (
                <Image
                    src={Subtract2}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "Hatchback",
            icon: (
                <Image
                    src={UnionIcon}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "Pick-uptruck",
            icon: (
                <Image
                    src={Union2}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "Sedan",
            icon: (
                <Image
                    src={Subtract1}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "Stationwagen",
            icon: (
                <Image
                    src={Subtract3}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
        {
            name: "SUV/MPV",
            icon: (
                <Image
                    src={Union3}
                    alt={"car type"}
                    width={40}
                    height={40}
                    style={{ filter: theme.palette.mode === "dark" ? "invert(1)" : "" }}
                />
            ),
        },
    ];

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
                marginTop: "5rem",

                "@media (max-width: 600px)": {
                    marginTop: 0,
                    padding: 0,
                },
            }}
        >
            <BookingFormHeading
                sx={{
                    marginBottom: "5rem",
                    "@media (max-width: 600px)": {
                        marginBottom: "1.5rem",
                    },
                }}
            >
                Vehicle Type
            </BookingFormHeading>

            <BookingFormSubHeading>
                Select Vehicle Type
            </BookingFormSubHeading>

            <BookingFormTagline>
                What type of car are we working on? Choose now for a custom fit.
            </BookingFormTagline>

            <CarTypeContainer
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "repeat(3, 1fr)",
                        sm: "repeat(4, 1fr)",
                    },
                    gridAutoFlow: "dense",
                    gap: "1rem",
                }}
            >
                {carTypes.slice(0, 9).map((carType, index) => (
                    <Box
                        key={carType.name}
                        onClick={() => handleCarTypeClick(carType.name)}
                        sx={{
                            gridColumn: index === 6 || index === 7 ? "span 1" : undefined,
                        }}
                    >
                        <CarTypeBox
                            name={carType.name}
                            icon={carType.icon}
                            selected={selectedCarType === carType.name}
                        />
                    </Box>
                ))}
            </CarTypeContainer>
        </Box>
    );
};

export default Index;
