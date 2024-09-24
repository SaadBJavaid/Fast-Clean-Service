"use client";
import {Box, Grid, styled} from "@mui/material";
import {CustomFormTextField} from "../../../components/mui/FormPkgs";
import {ThemeProvider} from "@emotion/react";
import {deepmerge} from "@mui/utils";
import {useTheme} from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import React, {useEffect, useState} from "react";
import {useValidation} from "../../../contexts/ValidationContext";

export const FormTwoColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  width: "100%",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "1rem",
  },
}));

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(204, 204, 204, 0.2)",
  backdropFilter: "blur(10px)",
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: theme.spacing(4),
  zIndex: 10,
}));

const BookingParticulars = () => {
  const form = useMultiStepForm();
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

  useEffect(() => {
    const isValid = true;
    updateValidation(isValid);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingForm({
      ...bookingForm,
      [name]: value,
    });

    form.updateFormData({ [name]: value });
  };

  return (
    <Box sx={{ padding: "2rem 1rem", maxWidth: "800px", margin: "auto" }}>
      <FormContainer component="form">
        <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
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
        </ThemeProvider>
      </FormContainer>
    </Box>
  );
};

export default BookingParticulars;
