"use client";
import {Box, Divider, Typography} from "@mui/material";
import {useTheme} from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import {BookingStepHeading} from "../BookingPckgs";
import {useValidation} from '../../../contexts/ValidationContext';
import React, {useEffect} from "react";

const BookingDetail = ({ label, value }) => {
    const { theme } = useTheme();

    return (
        <Box
            sx={{
                padding: "0.75rem 2rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: `1px solid ${theme.palette.divider}`,
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? theme.palette.grey[700]
                        : theme.palette.grey[200],
                borderRadius: "8px",
            }}
        >
            <Typography
                sx={{
                    color: theme.palette.text.primary,
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                }}
            >
                {label}:
            </Typography>
            <Typography
                sx={{
                    color: theme.palette.text.primary,
                    fontSize: "1.5rem",
                }}
            >
                {value || "-"}
            </Typography>
        </Box>
    );
};

const BookingSummary = () => {
    const form = useMultiStepForm();
    const { theme } = useTheme();
    const { updateValidation } = useValidation();

    useEffect(() => {
        updateValidation(true);
    }, []);

    return (
        <Box
            sx={{
                maxWidth: "800px",
                margin: "2rem auto",
                padding: "2rem",
                backgroundColor: theme.palette.mode === "dark" ? theme.palette.grey[900] : theme.palette.background.paper, // Adjusted background for the main box
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
            }}
        >
            <BookingStepHeading>Details Confirmation</BookingStepHeading>

            <Box
                sx={{
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: theme.palette.text.primary,
                    }}
                >
                    Vehicle Information
                </Typography>
                <BookingDetail label={"Vehicle Number"} value={form.formData.vehicleDetails?.kenteken} />
            </Box>

            <Box
                sx={{
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: theme.palette.text.primary,
                    }}
                >
                    Package Information
                </Typography>
                <BookingDetail label={"Package Type"} value={form.formData.selectedPackageType} />
                <BookingDetail label={"Package Subtype"} value={form.formData.selectedPackage} />
            </Box>

            <Box
                sx={{
                    marginBottom: "1.5rem",
                    padding: "1rem",
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                    borderRadius: "8px",
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                        color: theme.palette.text.primary,
                    }}
                >
                    Additional Options
                </Typography>
                {form.formData.selectedAdditionalOptions && form.formData.selectedAdditionalOptions.length > 0 ? (
                    form.formData.selectedAdditionalOptions.map((addon, index) => {
                        return <BookingDetail label={addon} key={index} value={""} />;
                    })
                ) : (
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.primary,
                            fontSize: "1.2rem",
                            padding: "0.5rem 2rem",
                        }}
                    >
                        No additional options selected
                    </Typography>
                )}
            </Box>

            <Divider sx={{ marginY: "1rem" }} />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "1rem 2rem",
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? theme.palette.grey[800]
                            : theme.palette.grey[100],
                    borderRadius: "8px",
                    marginTop: "1rem",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.8rem",
                        fontWeight: "bold",
                        color: theme.palette.text.primary,
                    }}
                >
                    Total Price:
                </Typography>
                <Typography
                    sx={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: theme.palette.primary.accent,
                    }}
                >
                    €{form.formData.price || "0.00"}
                </Typography>
            </Box>
        </Box>
    );
};

export default BookingSummary;
