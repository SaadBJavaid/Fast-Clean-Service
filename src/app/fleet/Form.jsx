"use client";
import React from "react";
import { TextField, Button, Typography } from "@mui/material";
import { FormContainer } from "../../components/mui/FleetPkgs";
import { useState } from "react";
import { ServiceSubheading } from "../../components/mui/HomePkgs";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";

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

      <Typography
        variant="h2"
        sx={{
          fontFamily: "BDSans",
        }}
      >
        <HeadingLinesAnimation text={"Contact Us"} />
      </Typography>
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
          bgcolor: "primary.accent",
          fontSize: "25px",
          padding: "10px",
          borderRadius: "50px",
          ":hover": {
            backgroundColor: "primary.accent2",
          },
        }}
        type="submit"
        fullWidth
      >
        Submit
      </Button>
    </FormContainer>
  );
}
