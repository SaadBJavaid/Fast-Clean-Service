"use client";
import { Box, styled, Typography } from "@mui/material";
import { FormContainer } from "../../../components/mui/FleetPkgs";
import { CustomFormButton, CustomFormTextField } from "../../../components/mui/FormPkgs";
import { ThemeProvider } from "@emotion/react";
import { deepmerge } from "@mui/utils";
import { useTheme } from "../../../contexts/themeContext";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import React, { useState } from "react";
import { BookingButton, BookingStepSubHeading } from "../BookingPckgs";

export const FormTwoColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "2rem",
  width: "100%",
  "@media (max-width: 600px)": {
    flexDirection: "column",
    gap: "1rem",
  },
}));

const BookingParticulars = () => {
  const form = useMultiStepForm();
  const { formData } = form;
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
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
              />
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
            </FormTwoColumn>
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
            <FormTwoColumn>
              <CustomFormTextField
                  label="City"
                  name="city"
                  value={bookingForm.city}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
              />
              <CustomFormTextField
                  label="Street"
                  name="street"
                  value={bookingForm.street}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
              />
            </FormTwoColumn>
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
            <FormTwoColumn>
              <CustomFormTextField
                  label="Phone Number"
                  name="phoneNumber"
                  value={bookingForm.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
              />
              <CustomFormTextField
                  label="Zip Code"
                  name="zipCode"
                  value={bookingForm.zipCode}
                  onChange={handleChange}
                  fullWidth
                  sx={{
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                  }}
              />
            </FormTwoColumn>
          </ThemeProvider>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "2rem",
                }}
            >
                <BookingButton sx={{ width: "50%" }}>
                    SUBMIT
                </BookingButton>
            </Box>
          </FormContainer>
      </Box>
  );
};

export default BookingParticulars;