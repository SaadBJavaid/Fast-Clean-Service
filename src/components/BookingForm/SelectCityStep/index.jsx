import { Box, Grid, MenuItem } from "@mui/material";
import { BookingFormHeading, BookingFormSubHeading } from "../../mui/BookingFormPackages";
import { CustomFormTextField, FormContainer, CustomFormSelect } from "../../../components/mui/NewFormPkgs";
import { useState } from "react";
import useMultiStepForm from "../../../hooks/useMultiStepForm";
import { formatMuiErrorMessage } from "@mui/utils";
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

  const handleCityChange = (e) => {
    setCity(e.target.value);

    form.updateFormData({ city: e.target.value, travelDistance: cities.find((c) => c.name === e.target.value).distance });
  };

  return (
    <Box>
      <BookingFormHeading>Booking Confirmation</BookingFormHeading>
      <BookingFormSubHeading>
        Please verify your details
        <br />
        Let’s make sure everything is perfect for your cleaning!
      </BookingFormSubHeading>
      <Box>
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
      </Box>
    </Box>
  );
};

export default Index;
