"use client";
import React, { useState } from "react";
import {Typography, Box, Grid, MenuItem, Select, FormControl, InputLabel, Button} from "@mui/material";
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
            console.error("Error submitting form:", error.response.data);
            throw new Error(error.response.data.error || error.response.data.message);
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
                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            id="vehicleType-label"
                            sx={{
                                fontSize: "1rem",
                                color: "white !important",
                                transform: "translate(0%, -30%) scale(1)",
                            }}
                        >
                            Vehicle Type
                        </InputLabel>
                        <Select
                            labelId="vehicleType-label"
                            id="vehicleType"
                            value={formData.vehicleType}
                            label="Vehicle Type"
                            onChange={(e) => {
                                e.target.name = "vehicleType";
                                handleChange(e);
                            }}
                            sx={{
                                "& .MuiOutlinedInput-input": {
                                    padding: "1rem 1.5rem",
                                    color: "white",
                                    fontSize: "1.2rem",
                                    fontWeight: "300",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                                },
                                "& .MuiSelect-icon": {
                                    color: "white",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white !important",
                                },
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Bikes">Bikes (all types)</MenuItem>
                            <MenuItem value="Trucks">Trucks</MenuItem>
                            <MenuItem value="Campers">Campers</MenuItem>
                            <MenuItem value="Boats">Boats</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            id="serviceType-label"
                            sx={{
                                fontSize: "1rem",
                                color: "white !important",
                                transform: "translate(0%, -30%) scale(1)",
                            }}
                        >
                            Service Type
                        </InputLabel>
                        <Select
                            labelId="serviceType-label"
                            id="serviceType"
                            value={formData.serviceType}
                            label="Service Type"
                            onChange={(e) => {
                                e.target.name = "serviceType";
                                handleChange(e);
                            }}
                            sx={{
                                "& .MuiOutlinedInput-input": {
                                    padding: "1rem 1.5rem",
                                    color: "white",
                                    fontSize: "1.2rem",
                                    fontWeight: "300",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                                },
                                "& .MuiSelect-icon": {
                                    color: "white",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white !important",
                                },
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Anywhere AutoCare">Anywhere AutoCare</MenuItem>
                            <MenuItem value="FleetCare Pro">FleetCare Pro</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel
                            id="location-label"
                            sx={{
                                fontSize: "1rem",
                                color: "white !important",
                                transform: "translate(0%, -30%) scale(1)",
                            }}
                        >
                            Location
                        </InputLabel>
                        <Select
                            labelId="location-label"
                            id="location"
                            value={formData.location}
                            label="Location"
                            onChange={(e) => {
                                e.target.name = "location";
                                handleChange(e);
                            }}
                            sx={{
                                "& .MuiOutlinedInput-input": {
                                    padding: "1rem 1.5rem",
                                    color: "white",
                                    fontSize: "1.2rem",
                                    fontWeight: "300",
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.25)",
                                },
                                "& .MuiSelect-icon": {
                                    color: "white",
                                },
                                "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "transparent",
                                },
                                "& .MuiInputLabel-root": {
                                    color: "white !important",
                                },
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Onsite">Onsite</MenuItem>
                            <MenuItem value="Your Place">Your Place</MenuItem>
                        </Select>
                    </FormControl>
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

              <Button
                  variant="contained"
                  type="submit"
                  sx={{
                      padding: "1.5rem 3rem",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      backgroundColor: "primary.accentDark",
                      color: "white",
                      fontFamily: "DMSans",
                      marginTop: "2rem",
                      "&:hover": {
                          backgroundColor: theme.palette.primary.accent,
                      },
                  }}
              >
                  Submit
              </Button>
          </Box>
        </ThemeProvider>
      </CustomCard>
  );
}
