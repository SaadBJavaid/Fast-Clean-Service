"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React from "react";
import { useTheme } from "../../../contexts/themeContext";
import {
    BookingFormHeading,
    BookingFormSubHeading,
    BookingFormTagline,
} from "../../mui/BookingFormPackages";

const Index = ({ plate, setPlate, error, loading }) => {
    const { theme } = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (
        <Box>
            <BookingFormHeading>Liscense Plate</BookingFormHeading>

            <BookingFormSubHeading>
                Please enter your license plate<br />
                We’ll make sure your vehicle is on our care list!
            </BookingFormSubHeading>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: "20px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LiscencePlate />
                </Box>

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

                {loading && <Typography>Loading...</Typography>}
            </Box>
        </Box>
    );
};

export default Index;
