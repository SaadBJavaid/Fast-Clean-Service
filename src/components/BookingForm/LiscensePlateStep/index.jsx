"use client";
import { Box, Typography, useMediaQuery } from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React from "react";
import { useTheme } from "../../../contexts/themeContext";
import {
    BookingFormHeading,
    BookingFormSubHeading,
} from "../../mui/BookingFormPackages";

const Index = ({ plate, setPlate, error, loading }) => {
    const { theme } = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:600px)");

    return (
        <Box>
            <BookingFormHeading>Liscense Plate</BookingFormHeading>

            <BookingFormSubHeading
                sx={{
                    display: isSmallScreen ? "none" : "block",
                }}
            >
                Enter your license plate*
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
                <BookingFormSubHeading
                    sx={{
                        display: isSmallScreen ? "block" : "none",
                        marginTop: "1rem",
                    }}
                >
                    Enter your license plate*
                </BookingFormSubHeading>

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
