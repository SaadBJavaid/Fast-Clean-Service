"use client";
import { Box, Typography } from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React from "react";
import { useTheme } from "../../../contexts/themeContext";
import {
  BookingFormHeading,
  BookingFormSubHeading,
} from "../../mui/BookingFormPackages";

const Index = ({ plate, setPlate, error, loading }) => {
  const { theme } = useTheme();

  return (
    <Box>
      <BookingFormHeading
        sx={
          {
            // marginBottom: "5rem",
          }
        }
      >
        Liscense Plate
      </BookingFormHeading>
      <BookingFormSubHeading>Enter your license plate*</BookingFormSubHeading>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LiscencePlate />
        </Box>

        {error && (
          <Typography
            sx={{
              color: "red",
              fontSize: "12px",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            {error}
          </Typography>
        )}

        {loading && <Typography>Loading...</Typography>}
      </Box>
    </Box>
  );
};

export default Index;
