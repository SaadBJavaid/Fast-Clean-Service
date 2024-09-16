"use client";
import { Box, styled } from "@mui/material";
import { FormContainer } from "../../../components/mui/FleetPkgs";
import { CustomFormButton, CustomFormTextField } from "../../../components/mui/FormPkgs";
import { ThemeProvider } from "@emotion/react";
import { deepmerge } from "@mui/utils";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import React, { useState } from "react";

export const FormTwoColumn = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "2rem",
    width: "100%",
    "@media (max-width: 600px)": {
        flexDirection: "column",
        gap: "1rem",
    },
}));

const BookingParticulars = ({ onValidate }) => {
    const form = useMultiStepForm();
    const { theme } = useTheme();

    const [bookingForm, setBookingForm] = useState({
        firstName: "",
        surname: "",
        companyName: "",
        street: "",
        zipCode: "",
        city: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingForm({
            ...bookingForm,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        form.updateFormData({ ...bookingForm });
        form.nextStep();
        onValidate(true);
    };

    return (
        <Box sx={{ padding: "2rem 1rem", maxWidth: "800px", margin: "auto" }}>
            <FormContainer
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    padding: "2rem",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                }}
            >
                <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
                    <FormTwoColumn>
                        <CustomFormTextField
                            label="First Name"
                            name="firstName"
                            value={bookingForm.firstName}
                            onChange={handleChange}
                            fullWidth
                        />
                        <CustomFormTextField
                            label="Surname"
                            name="surname"
                            value={bookingForm.surname}
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormTwoColumn>
                    <CustomFormTextField
                        label="Company Name"
                        name="companyName"
                        value={bookingForm.companyName}
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "1.5rem" }}
                    />
                    <FormTwoColumn>
                        <CustomFormTextField
                            label="City"
                            name="city"
                            value={bookingForm.city}
                            onChange={handleChange}
                            fullWidth
                        />
                        <CustomFormTextField
                            label="Street"
                            name="street"
                            value={bookingForm.street}
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormTwoColumn>
                    <CustomFormTextField
                        label="Email"
                        name="email"
                        value={bookingForm.email}
                        onChange={handleChange}
                        fullWidth
                        sx={{ marginTop: "1.5rem" }}
                    />
                    <FormTwoColumn>
                        <CustomFormTextField
                            label="Phone Number"
                            name="phoneNumber"
                            value={bookingForm.phoneNumber}
                            onChange={handleChange}
                            fullWidth
                        />
                        <CustomFormTextField
                            label="Zip Code"
                            name="zipCode"
                            value={bookingForm.zipCode}
                            onChange={handleChange}
                            fullWidth
                        />
                    </FormTwoColumn>
                </ThemeProvider>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                    <CustomFormButton type="submit" sx={{ width: "50%" }}>
                        SUBMIT
                    </CustomFormButton>
                </Box>
            </FormContainer>
        </Box>
    );
};

export default BookingParticulars;
