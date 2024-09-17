"use client";
import { Box, Typography } from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React, { useState, useEffect } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { Loader } from "../../mui/Loader";
import axios from "axios";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { BookingStepHeading, BookingStepSubHeading, BookingButton } from "../BookingPckgs";
import { useValidation } from '../../../contexts/ValidationContext';

const Index = ({ onNextStep }) => {
    const [plate, setPlate] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { theme } = useTheme();
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();

    async function fetchLicensePlateData(licensePlate) {
        const response = await axios.get(`/api/license-plate?licensePlate=${licensePlate}`);

        const data = response.data;

        if (response.data?.length === 0) {
            throw new Error(`No data found for ${licensePlate}`);
        }

        return data[0];
    }

    const validatePlate = async () => {
        setLoading(true);
        setError("");

        if (plate.length === 0) {
            setError("Please enter your license plate number");
            setLoading(false);
            updateValidation(false);
            return;
        }

        const dutchLicensePlateRegex =
            /^(([A-Z]{2}-?\d{2}-?\d{2})|([A-Z]{2}-?\d{2}-?[A-Z]{2})|(\d{2}-?[A-Z]{2}-?\d{2})|(\d{2}-?[A-Z]{3}-?\d{1})|(\d{1}-?[A-Z]{3}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{2})|([A-Z]{3}-?\d{2}-?[A-Z]{1})|(\d{1}-?[A-Z]{2}-?\d{3})|([A-Z]{2}-?\d{3}-?[A-Z]{1})|([A-Z]{1}-?\d{2}-?[A-Z]{3})|([A-Z]{3}-?\d{2}-?\d{1})|(\d{3}-?[A-Z]{2}-?\d{1})|([A-Z]{2}-?[A-Z]{2}-?\d{2})|([A-Z]{1}-?\d{3}-?[A-Z]{1})|([BHK]{1}[SDJFM]{1}-?[A-Z]{2}-?\d{2}))$/;

        if (!dutchLicensePlateRegex.test(plate)) {
            setError("Invalid license plate format");
            setLoading(false);
            updateValidation(false);
            return;
        }

        setTimeout(() => {
            setError("");
        }, 5000);

        try {
            const data = await fetchLicensePlateData(plate);

            form.updateFormData({ vehicleDetails: data });
            updateValidation(true);
            form.nextStep();
        } catch (err) {
            setError(err.message);
            console.error(err);
            updateValidation(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box>
            <BookingStepHeading>Liscence Plate</BookingStepHeading>
            <BookingStepSubHeading>Enter your liscence plate number</BookingStepSubHeading>

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

                <BookingButton
                    onClick={validatePlate}
                    sx={{
                        marginTop: "2rem",
                        "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                            boxShadow: "none",
                        },
                    }}
                >
                    {!loading ? "Validate" : <Loader />}
                </BookingButton>
            </Box>
        </Box>
    );
};

export default Index;
