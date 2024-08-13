"use client";
import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { FormContainer } from "../../components/mui/FleetPkgs";
import { useState } from "react";
import { ServiceSubheading } from "../../components/mui/HomePkgs";

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
    <FormContainer component="form" onSubmit={handleSubmit}>
      <ServiceSubheading
      special
        sx={{ fontFamily: "JakartaSans", fontWeight: "bold" }}
        variant="h2" // Adjusted to h4 for better size fitting
      >
        Contact Us
      </ServiceSubheading>
      <TextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
      <TextField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth required />
      <TextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        required
      />
      <Button
        sx={{
          bgcolor: "#00607a",
          fontSize: "25px",
          padding: "10px",
        }}
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </FormContainer>
  );
}
