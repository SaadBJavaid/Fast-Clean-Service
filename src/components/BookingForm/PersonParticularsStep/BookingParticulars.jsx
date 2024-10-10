"use client";
import { Box, Grid } from "@mui/material";
import {
    CustomFormTextField,
    FormContainer,
} from "../../../components/mui/NewFormPkgs";
import {
    TermsContainer,
    StyledCheckbox,
    TermsLabel,
} from "../../../components/mui/BookingFormPackages";
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
    const { theme } = useTheme();
    const { updateValidation } = useValidation();

    // Initialize bookingForm with empty strings, except for makeModel from formData
    const [bookingForm, setBookingForm] = useState({
        firstName: "",
        surname: "",
        companyName: "",
        street: "",
        zipCode: "",
        city: "",
        email: "",
        phoneNumber: "",
        makeModel: form.formData.carType || "",
    });

    const [isChecked, setIsChecked] = useState(false); // State for the checkbox

    useEffect(() => {
        console.log(form.formData.makeModel)
        if (session?.user) {
            setBookingForm((prevForm) => ({
                ...prevForm,
                firstName: prevForm.firstName || session.user.firstName || "",
                surname: prevForm.surname || session.user.lastName || "",
                companyName: prevForm.companyName || session.user.companyName || "",
                street: prevForm.street || session.user.street || "",
                zipCode: prevForm.zipCode || session.user.zipCode || "",
                city: prevForm.city || session.user.city || "",
                email: prevForm.email || session.user.email || "",
                phoneNumber: prevForm.phoneNumber || session.user.phoneNumber || "",
            }));
        }
    }, [session?.user]);

    useEffect(() => {
        console.log(form.formData.makeModel)
        setBookingForm((prevForm) => ({
            ...prevForm,
            makeModel: form.formData.makeModel || "",
        }));
    }, [form.formData.makeModel]);

    useEffect(() => {
        const isValid =
            isChecked && Object.values(bookingForm).every((value) => value !== "");
        updateValidation(isValid);
    }, [bookingForm, isChecked, updateValidation]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingForm({
            ...bookingForm,
            [name]: value,
        });

        if (name === "makeModel") {
            form.updateFormData({ [name]: value });
        }
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
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
