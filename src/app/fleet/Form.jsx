"use client";
import React from "react";
import { TextField, Button, Typography, Select } from "@mui/material";
import { FormContainer } from "../../components/mui/FleetPkgs";
import { useState } from "react";
import { ServiceSubheading } from "../../components/mui/HomePkgs";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { CustomFormButton, CustomFormTextField, CustomSelect } from "../../components/mui/FormPkgs";
import { CustomCard } from "../../components/mui/CardPackages";
import { darkTheme } from "../../contexts/themeContext";
import { deepmerge } from "@mui/utils";
import { ThemeProvider } from "@emotion/react";
import useSnackbar from "../../hooks/useSnackbar";
import axios from "axios";

const submitFleetCareProForm = async (formData) => {
  try {
    const response = await axios.post("/api/fleetcare-pro", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.data.message);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Error submitting form:", error.response.data.error);
      throw new Error(error.response.data.error);
    } else {
      console.error("Error submitting form:", error);
      throw new Error("An unexpected error occurred");
    }
  }
};

export default function Form() {
  const { openSnackbar } = useSnackbar();

  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    name: "",
    email: "",
    vehicleType: "",
    fleetSize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFleetCareProForm(formData);
      openSnackbar("Form submitted successfully!");

      // Reset form
      setFormData({
        businessName: "",
        address: "",
        name: "",
        email: "",
        vehicleType: "",
        fleetSize: "",
      });
    } catch (error) {
      openSnackbar(`Error: ${error instanceof Error ? error.message : "An unexpected error occurred"}`);
    }
  };

  return (
    <CustomCard sx={{ backgroundColor: "#00000090 !important" }}>
      <FormContainer component="form" onSubmit={handleSubmit}>
        <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, darkTheme)}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "BDSans",
            }}
          >
            <ServiceSubheading sx={{ textAlign: "center", margin: "0 !important" }}>
              Request a Quote
            </ServiceSubheading>
          </Typography>
          <CustomFormTextField label="Business" name="businessName" value={formData.business} onChange={handleChange} fullWidth />
          <CustomFormTextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
          <CustomFormTextField label="Name" name="name" value={formData.name} onChange={handleChange} />
          <CustomFormTextField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <CustomSelect
            label="Vehicle Type"
            name="vehicleType"
            options={[
              { value: "Cars (all types)", label: "Cars (all types)" },
              { value: "SUVs", label: "SUVs" },
              { value: "Bikes (all types)", label: "Bikes (all types)" },
              { value: "Trucks", label: "Trucks" },
              { value: "Campers", label: "Campers" },
              { value: "Boats", label: "Boats" },
            ]}
            value={formData.vehicleType}
            onChange={handleChange}
          />
          <CustomSelect
            label="Fleet Size"
            name="fleetSize"
            options={[
              { value: "1-10", label: "1-10" },
              { value: "11-50", label: "11-50" },
              { value: "51-100", label: "51-100" },
              { value: "101-500", label: "101-500" },
              { value: "500+", label: "500+" },
            ]}
            value={formData.numVehicles}
            onChange={handleChange}
            required
          />
        </ThemeProvider>
        <CustomFormButton type="submit" sx={{ width: "max-content", margin: "0 auto" }}>
          Submit
        </CustomFormButton>
      </FormContainer>
    </CustomCard>
  );
}
