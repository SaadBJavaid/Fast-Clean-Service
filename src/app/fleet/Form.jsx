"use client";
import React from "react";
import { TextField, Button, Typography, Select } from "@mui/material";
import { FormContainer } from "../../components/mui/FleetPkgs";
import { useState } from "react";
import { ServiceSubheading } from "../../components/mui/HomePkgs";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { CustomFormButton, CustomFormTextField, CustomSelect } from "../../components/mui/FormPkgs";
import { CustomCard } from "../../components/mui/CardPackages";
import { darkTheme } from "../contexts/themeContext";
import { deepmerge } from "@mui/utils";
import { ThemeProvider } from "@emotion/react";

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    business: "",
    address: "",
    name: "",
    email: "",
    vehicleType: "",
    numVehicles: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
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
          <CustomFormTextField label="Business" name="Business" value={formData.business} onChange={handleChange} fullWidth />
          <CustomFormTextField label="Address" name="Address" value={formData.address} onChange={handleChange} fullWidth />
          <CustomFormTextField label="Name" name="Name" value={formData.name} onChange={handleChange} />
          <CustomFormTextField label="Email" name="Email" value={formData.email} onChange={handleChange} />
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
            name="numVehicles"
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
