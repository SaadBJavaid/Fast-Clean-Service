"use client";
import { Box, Grid, MenuItem } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import { CustomFormTextField, FormContainer } from "../../../components/mui/NewFormPkgs";
import { useState, useEffect } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { useValidation } from "../../../contexts/ValidationContext";
import { useSession } from "next-auth/react";

const cities = [
    { name: "Rotterdam", distance: 80 },
    { name: "The Hague", distance: 65 },
    { name: "Utrecht", distance: 45 },
    { name: "Eindhoven", distance: 125 },
    { name: "Tilburg", distance: 110 },
    { name: "Groningen", distance: 180 },
    { name: "Almere", distance: 30 },
    { name: "Breda", distance: 105 },
    { name: "Nijmegen", distance: 120 },
    { name: "Enschede", distance: 160 },
    { name: "Apeldoorn", distance: 90 },
    { name: "Haarlem", distance: 20 },
    { name: "Arnhem", distance: 100 },
    { name: "Amersfoort", distance: 50 },
    { name: "Zaanstad", distance: 15 },
    { name: "Den Bosch", distance: 90 },
    { name: "Haarlemmermeer", distance: 20 },
    { name: "Zwolle", distance: 110 },
    { name: "Maastricht", distance: 210 },
    { name: "Leiden", distance: 45 },
];

const Index = () => {
    const [city, setCity] = useState("");
    const form = useMultiStepForm();
    const { updateValidation } = useValidation();
    const { data: session } = useSession();

    useEffect(() => {
        if (session?.user?.city) {
            const matchedCity = cities.find((c) => c.name.toLowerCase() === session.user.city.toLowerCase());
            if (matchedCity) {
                setCity(matchedCity.name);
                form.updateFormData({
                    city: matchedCity.name,
                    travelDistance: matchedCity.distance,
                });
                updateValidation(true);
            } else {
                updateValidation(false);
            }
        } else {
            updateValidation(false);
        }
    }, [session, form, updateValidation]);

    useEffect(() => {
        // Update validation status only if a city is selected
        updateValidation(city !== "");
    }, [city, updateValidation]);

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setCity(selectedCity);

        const cityData = cities.find((c) => c.name === selectedCity);
        if (cityData) {
            form.updateFormData({
                city: selectedCity,
                travelDistance: cityData.distance,
            });
        }
    };

    return (
        <Box>
            <BookingFormHeading>City Selection</BookingFormHeading>
            <BookingFormSubHeading>
                Please select your city
                <br />
                Just give us your location and we'll come to you!
            </BookingFormSubHeading>
            <Box
                sx={{
                    padding: "2rem 1rem",
                    maxWidth: "800px",
                    margin: "auto",
                    "@media (max-width: 600px)": {
                        position: "relative",
                        top: "-3rem",
                    },
                }}
            >
                <FormContainer
                    component="form"
                    sx={{ backgroundColor: "transparent", boxShadow: "none" }}
                >
                    <Grid item xs={12} md={6}>
                        <CustomFormTextField
                            label="City"
                            name="city"
                            value={city}
                            onChange={handleCityChange}
                            select
                            fullWidth
                            sx={{
                                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                                borderRadius: "8px",
                                marginTop: "1.5rem",
                            }}
                            SelectProps={{
                                MenuProps: {
                                    PaperProps: {
                                        sx: {
                                            maxHeight: "50vh",
                                            zIndex: 1000,
                                        },
                                    },
                                },
                            }}
                        >
                            {cities.map((city) => (
                                <MenuItem key={city.name} value={city.name}>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "100%",
                                        }}
                                    >
                                        <span>{city.name}</span>
                                        <span>{city.distance} km from Amsterdam</span>
                                    </div>
                                </MenuItem>
                            ))}
                        </CustomFormTextField>
                    </Grid>
                </FormContainer>
            </Box>
        </Box>
    );
};

export default Index;
