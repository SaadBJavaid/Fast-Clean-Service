"use client";
import {Box, Typography} from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React from "react";
import {useTheme} from "../../../contexts/themeContext";
import {BookingStepHeading, BookingStepSubHeading} from "../BookingPckgs";

const Index = ({ plate, setPlate, error, loading }) => {
    const { theme } = useTheme();

    return (
        <Box>
            <BookingStepHeading>License Plate</BookingStepHeading>
            <BookingStepSubHeading>Enter your license plate number</BookingStepSubHeading>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
                <LiscencePlate plateNumber={plate} setPlateNumber={setPlate} />

                {error && (
                    <Typography
                        sx={{
                            color: "red",
                            fontSize: "12px",
                            textAlign: "center",
                            marginTop: "1rem",
                        }}
                    >
                        {error}
                    </Typography>
                )}

                {loading && (
                    <Typography>Loading...</Typography>
                )}
            </Box>
        </Box>
    );
};

export default Index;
