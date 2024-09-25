"use client";
import React, {useState} from "react";
import {Typography} from "@mui/material";
import {FormContainer} from "../../components/mui/FleetPkgs";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import {CustomFormButton, CustomFormTextField} from "../../components/mui/FormPkgs";
import useSnackbar from "../../hooks/useSnackbar";
import axios from "axios";

const submitFleetCareProForm = async (formData) => {
  try {
    const response = await axios.post("/api/contact", formData, {
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

export default function Form({}) {
  const { openSnackbar } = useSnackbar();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitFleetCareProForm(formData);
      openSnackbar("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      openSnackbar(`Error: ${error instanceof Error ? error.message : "An unexpected error occurred"}`);
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
      <CustomFormTextField label="Name" name="name" value={formData.name} onChange={handleChange} fullWidth required />
      <CustomFormTextField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <CustomFormTextField
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        fullWidth
        multiline
        rows={4}
        required
      />
      <CustomFormButton type="submit" fullWidth>
        Submit
      </CustomFormButton>
    </FormContainer>
  );
}
