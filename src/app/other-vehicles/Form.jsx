"use client";
import React, { useState } from "react";
import { Typography, Box, Grid } from "@mui/material";
import {
  CustomFormTextField,
  CustomFormButton,
  CustomFormSelect,
} from "../../components/mui/NewFormPkgs";
import { CustomCard } from "../../components/mui/CardPackages";
import { CustomSelect } from "../../components/mui/FormPkgs";
import { useTheme } from "../../contexts/themeContext";
import { deepmerge } from "@mui/utils";
import { ThemeProvider } from "@emotion/react";
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
  const { theme } = useTheme();

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
        <ThemeProvider theme={(outerTheme) => deepmerge(outerTheme, theme)}>
          <Box component="form" onSubmit={handleSubmit} sx={{ padding: "4rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Typography
                variant="h2"
                sx={{
                  fontFamily: "BDSans",
                  textAlign: "center",
                  fontSize: "3.5rem !important",
                  margin: "0 0 2rem",
                  paddingBottom: "2.5rem",
                  paddingTop: "2rem",
                    color: "white",
                }}
            >
              Request a Quote
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12}>
                <CustomFormTextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-input": {
                          color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                      },
                      "& label": {
                        color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)", // Same for both modes
                        boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                      },
                    }}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomFormTextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-input": {
                        color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                      },
                      "& label": {
                          color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)", // Same for both modes
                        boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                      },
                    }}
                />
              </Grid>

              <Grid item xs={12}>
                <CustomFormTextField
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-input": {
                        color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                      },
                      "& label": {
                          color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)", // Same for both modes
                        boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                      },
                    }}
                />
              </Grid>

                <Grid item xs={12}>
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
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-input": {
                                fontSize: "1.8rem",
                            },
                            "& .MuiInputLabel-root": {
                                fontSize: "1.8rem",
                                color: "white !important",
                            },
                            "& .MuiSelect-icon": {
                                color: theme.palette.primary.contrastText,
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: theme.palette.primary.contrastText,
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <CustomSelect
                        label="Service Type"
                        name="serviceType"
                        options={[
                            { value: "Anywhere AutoCare", label: "Anywhere AutoCare" },
                            { value: "FleetCare Pro", label: "FleetCare Pro" },
                        ]}
                        value={formData.serviceType}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-input": {
                                fontSize: "1.8rem",
                            },
                            "& .MuiInputLabel-root": {
                                fontSize: "1.8rem",
                                color: "white !important",
                            },
                            "& .MuiSelect-icon": {
                                color: theme.palette.primary.contrastText,
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: theme.palette.primary.contrastText,
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12} sx={{width: "100%"}}>
                    <CustomSelect
                        label="Location"
                        name="location"
                        options={[
                            { value: "Onsite", label: "Our Showrooms" },
                            { value: "Your Place", label: "Your Location" },
                        ]}
                        value={formData.location}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                            width: "100%",
                            "& .MuiOutlinedInput-input": {
                                fontSize: "1.8rem",
                            },
                            "& .MuiInputLabel-root": {
                                fontSize: "1.8rem",
                                color: "white !important",
                            },
                            "& .MuiSelect-icon": {
                                color: theme.palette.primary.contrastText,
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                borderColor: theme.palette.primary.contrastText,
                            },
                            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                borderColor: "white",
                            },
                        }}
                    />
                </Grid>

                {formData.location === "Your Place" && (
                  <Grid item xs={12}>
                    <CustomFormTextField
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        fullWidth
                        sx={{
                          "& .MuiInputBase-input": {
                            color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                          },
                          "& label": {
                              color: "white",
                          },
                          "& .MuiOutlinedInput-root": {
                            backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)", // Same for both modes
                            boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                          },
                        }}
                    />
                  </Grid>
              )}

              <Grid item xs={12}>
                <CustomFormTextField
                    label="Number of Vehicles"
                    name="numVehicles"
                    value={formData.numVehicles}
                    onChange={handleChange}
                    fullWidth
                    sx={{
                      "& .MuiInputBase-input": {
                        color: theme.palette.mode === "dark" ? "#fff" : "#050505",
                      },
                      "& label": {
                          color: "white",
                      },
                      "& .MuiOutlinedInput-root": {
                        backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.1)", // Same for both modes
                        boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                      },
                    }}
                />
              </Grid>
            </Grid>

            <CustomFormButton type="submit" sx={{ width: "max-content", margin: "2rem auto 0" }}>
              Submit
            </CustomFormButton>
          </Box>
        </ThemeProvider>
      </CustomCard>
  );
}
