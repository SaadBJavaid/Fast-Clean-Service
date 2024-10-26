"use client";
import { Box, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import {
    CustomFormTextField,
    FormContainer,
    CustomFormSelect,
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

const cities = [
    { name: "Rotterdam", distance: 80 },
    { name: "The Hague", distance: 65 },
    { name: "Utrecht", distance: 45 },
    { name: "Eindhoven", distance: 125 },
    { name: "Tilburg", distance: 110 },
    { name: "Groningen", distance: 180 },
    { name: "Almere", distance: 30 },
    { name: "Breda", distance: 105 },
    { name: "Nijmegen", distance: 120 },
    { name: "Enschede", distance: 160 },
    { name: "Apeldoorn", distance: 90 },
    { name: "Haarlem", distance: 20 },
    { name: "Arnhem", distance: 100 },
    { name: "Amersfoort", distance: 50 },
    { name: "Zaanstad", distance: 15 },
    { name: "Den Bosch", distance: 90 },
    { name: "Haarlemmermeer", distance: 20 },
    { name: "Zwolle", distance: 110 },
    { name: "Maastricht", distance: 210 },
    { name: "Leiden", distance: 45 },
];

const BookingParticulars = () => {
    const form = useMultiStepForm();
    const { data: session, status } = useSession();
    const { theme } = useTheme();
    const { updateValidation } = useValidation();
    const { formData } = form;

    console.log("Session output: ", session);

    const [bookingForm, setBookingForm] = useState({
        firstName: "",
        surname: "",
        companyName: "",
        street: "",
        zipCode: "",
        email: "",
        phoneNumber: "",
        makeModel: "",
        city: "",
        travelDistance: 0,
    });

    const [isChecked, setIsChecked] = useState(false);

    const toTitleCase = (str) => {
        return str
            .toLowerCase()
            .split(" ")
            .map((word) => {
                word = word.replace(/^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$/g, "");
                return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");
    };

    useEffect(() => {
        if (session?.user) {
            setBookingForm((prevBookingForm) => ({
                ...prevBookingForm,
                email: session.user.email,
                firstName: session.user.firstName,
                surname: session.user.lastName,
                companyName: session.user.companyName,
                street: session.user.street,
                city: session.user.city,
                phoneNumber: session.user.phoneNumber,
            }));

            form.updateFormData((prevFormData) => ({
                ...prevFormData,
                email: session.user.email,
                firstName: session.user.firstName,
                surname: session.user.lastName,
                companyName: session.user.companyName,
                street: session.user.street,
                city: session.user.city,
                phoneNumber: session.user.phoneNumber,
            }));
        }
    }, [session?.user]);

    useEffect(() => {
        const vehicleDetails = form.formData.vehicleDetails || {};
        const merk = vehicleDetails.merk || "";
        const handelsbenaming = vehicleDetails.handelsbenaming || "";

        const combinedMakeModel = [merk, handelsbenaming].filter(Boolean).join(" ");

        const makeModel = toTitleCase(combinedMakeModel);

        setBookingForm((prevForm) => ({
            ...prevForm,
            makeModel: makeModel || prevForm.makeModel,
        }));

        form.updateFormData({ makeModel });
    }, [form.formData.vehicleDetails]);

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

        form.updateFormData({ [name]: value });
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        const cityData = cities.find((city) => city.name === selectedCity);

        setBookingForm((prevForm) => ({
            ...prevForm,
            city: selectedCity,
            travelDistance: cityData.distance,
        }));

        form.updateFormData({
            city: selectedCity,
            travelDistance: cityData.distance,
        });
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
                                    "@media (max-width: 600px)": {
                                        marginTop: "0.9rem",
                                    },
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
                                    "@media (max-width: 600px)": {
                                        marginTop: "0.9rem",
                                    },
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
                                    "@media (max-width: 600px)": {
                                        marginTop: "2rem",
                                    },
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
                                    "@media (max-width: 600px)": {
                                        marginTop: "0.9rem",
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <CustomFormTextField
                            label="City"
                            name="city"
                            value={bookingForm.city}
                            onChange={handleCityChange}
                            select
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                marginTop: "1.5rem",
                            }}
                            SelectProps={{
                                MenuProps: {
                                    PaperProps: {
                                        sx: {
                                            maxHeight: "50vh",
                                            zIndex: 1000,
                                        },
                                    },
                                },
                            }}
                        >
                            {cities.map((city) => (
                                <MenuItem key={city.name} value={city.name}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "100%",
                                        }}
                                    >
                                        <span>{city.name}</span>
                                        <span>{city.distance} km from Amsterdam</span>
                                    </div>
                                </MenuItem>
                            ))}
                        </CustomFormTextField>
                    </Grid>


                    <TermsContainer>
                        <StyledCheckbox
                            required
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <TermsLabel variant="body2">
                            I certify that I have read and agree to the{" "}
                            <span>
                                <a href="#">Terms and Conditions</a>
                            </span>
                        </TermsLabel>
                    </TermsContainer>
                </ThemeProvider>
            </FormContainer>
        </Box>
    );
};

export default BookingParticulars;
