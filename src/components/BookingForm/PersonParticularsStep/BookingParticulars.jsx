"use client";
import { Box, Grid, styled, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { CustomFormTextField, FormContainer } from "../../../components/mui/NewFormPkgs";
import { TermsContainer, StyledCheckbox, TermsLabel} from "../../../components/mui/BookingFormPackages";
import { ThemeProvider } from "@emotion/react";
import { deepmerge } from "@mui/utils";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import React, { useEffect, useState } from "react";
import { useValidation } from "../../../contexts/ValidationContext";
import { useSession } from "next-auth/react";

const BookingParticulars = () => {
    const form = useMultiStepForm();
    const { data: session, status } = useSession();
    const { formData } = form;
    const { theme } = useTheme();
    const { updateValidation } = useValidation();

    const [bookingForm, setBookingForm] = useState({
        firstName: "",
        surname: "",
        companyName: "",
        street: "",
        zipCode: "",
        city: "",
        email: "",
        phoneNumber: "",
        makeModel: "",
    });

    const [isChecked, setIsChecked] = useState(false); // State for the checkbox

    console.log(session);

    useEffect(() => {
        if (session?.user) {
            setBookingForm({
                ...bookingForm,
                email: session.user.email,
                firstName: session.user.firstName,
                surname: session.user.lastName,
                companyName: session.user.companyName,
                street: session.user.street,
                city: session.user.city,
                phoneNumber: session.user.phoneNumber,
            });
            form.updateFormData({
                ...bookingForm,
                email: session.user.email,
                firstName: session.user.firstName,
                surname: session.user.lastName,
                companyName: session.user.companyName,
                street: session.user.street,
                city: session.user.city,
                phoneNumber: session.user.phoneNumber,
            });
        }
    }, [session?.user, bookingForm, updateValidation, form]);

    useEffect(() => {
        const isValid = isChecked && Object.values(bookingForm).every(value => value !== ""); // Ensure all fields are filled and checkbox is checked
        updateValidation(isValid);
    }, [formData, isChecked, updateValidation, bookingForm]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingForm({
            ...bookingForm,
            [name]: value,
        });

        form.updateFormData({ [name]: value });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked); // Update checkbox state
    };

    return (
        <Box
            sx={{
                padding: "2rem 1rem",
                maxWidth: "800px",
                margin: "auto",
                "@media (max-width: 600px)": {
                    position: "relative",
                    top: "-3rem",
                },
            }}
        >
            <FormContainer
                component="form"
                sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
                <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
                    {/* Form Fields */}
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="First Name"
                                name="firstName"
                                value={bookingForm.firstName}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="Surname"
                                name="surname"
                                value={bookingForm.surname}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="Phone Number"
                                name="phoneNumber"
                                value={bookingForm.phoneNumber}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="Company Name"
                                name="companyName"
                                value={bookingForm.companyName}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="Street"
                                name="street"
                                value={bookingForm.street}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>

                        <Grid item xs={6} md={3}>
                            <CustomFormTextField
                                label="City"
                                name="city"
                                value={bookingForm.city}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <CustomFormTextField
                                label="Zip Code"
                                name="zipCode"
                                value={bookingForm.zipCode}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="Email"
                                name="email"
                                value={bookingForm.email}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CustomFormTextField
                                label="Make and Model of Vehicle"
                                name="makeModel"
                                value={bookingForm.makeModel}
                                onChange={handleChange}
                                fullWidth
                                sx={{
                                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "8px",
                                    marginTop: "1.5rem",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <TermsContainer>
                        <StyledCheckbox
                            required
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <TermsLabel variant="body2">
                            "I certify that I have read and agree to the{" "}
                            <span>
                                <a href="#">Terms and Conditions"</a>
                            </span>
                        </TermsLabel>
                    </TermsContainer>
                </ThemeProvider>
            </FormContainer>
        </Box>
    );
};

export default BookingParticulars;
