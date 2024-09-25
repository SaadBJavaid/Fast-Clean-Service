"use client";
import React, {useState} from "react";
import {Typography} from "@mui/material";
import {FormContainer} from "../../components/mui/FleetPkgs";
import {ServiceSubheading} from "../../components/mui/HomePkgs";
import {CustomFormButton, CustomFormTextField, CustomSelect} from "../../components/mui/FormPkgs";
import {CustomCard} from "../../components/mui/CardPackages";
import {darkTheme} from "../../contexts/themeContext";
import {deepmerge} from "@mui/utils";
import {ThemeProvider} from "@emotion/react";
import useSnackbar from "../../hooks/useSnackbar";
import axios from "axios";

const submitForm = async (formData) => {
  try {
    const response = await axios.post("/api/other-vehicles", formData, {
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
    name: "",
    address: "",
    email: "",
    vehicleType: "",
    phone: "",
    serviceType: "",
    location: "",
    numVehicles: "",
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
      await submitForm(formData);
      openSnackbar("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        address: "",
        email: "",
        vehicleType: "",
        phone: "",
        serviceType: "",
        location: "",
        numVehicles: "",
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
            <ServiceSubheading sx={{ fontSize: "3.5rem !important", textAlign: "center", margin: "0 !important" }}>
              Request a Quote
            </ServiceSubheading>
          </Typography>
          <CustomFormTextField label="Name" name="name" value={formData.name} onChange={handleChange} />
          <CustomFormTextField label="Email" name="email" value={formData.email} onChange={handleChange} />
          <CustomFormTextField label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />
          <CustomSelect
            label="Vehicle Type"
            name="vehicleType"
            options={[
              { value: "Bikes (all types)", label: "Bikes (all types)" },
              { value: "Trucks", label: "Trucks" },
              { value: "Campers", label: "Campers" },
              { value: "Boats", label: "Boats" },
            ]}
            value={formData.vehicleType}
            onChange={handleChange}
          />
          <CustomSelect
            label="Service Type"
            name="serviceType"
            options={[
              { value: "Anywhere AutoCare", label: "Anywhere AutoCare" },
              { value: "FleetCare Pro", label: "FleetCare Pro" },
            ]}
            value={formData.serviceType}
            onChange={handleChange}
          />
          <CustomSelect
            label="Location"
            name="location"
            options={[
              { value: "Onsite", label: "Our Showrooms" },
              { value: "Your Place", label: "Your Location" },
            ]}
            value={formData.location}
            onChange={handleChange}
          />

          {formData.location === "Your Place" && (
            <CustomFormTextField label="Address" name="address" value={formData.address} onChange={handleChange} fullWidth />
          )}

          <CustomFormTextField
            label="Number of Vehicles"
            name="numVehicles"
            value={formData.numVehicles}
            onChange={handleChange}
            fullWidth
          />
        </ThemeProvider>
        <CustomFormButton type="submit" sx={{ width: "max-content", margin: "0 auto" }}>
          Submit
        </CustomFormButton>
      </FormContainer>
    </CustomCard>
  );
}
