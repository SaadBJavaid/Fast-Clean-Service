import { Box, Button, Typography } from "@mui/material";
import LiscencePlate from "./LiscencePlate";
import React, { useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { Loader } from "../../mui/Loader";
import axios from "axios";
import useMultiStepForm from "../../../hooks/useMultiStepForm";

const Index = ({ onNextStep }) => {
  const [plate, setPlate] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { theme } = useTheme();

  const form = useMultiStepForm();

  async function fetchLicensePlateData(licensePlate) {
    const response = await axios.get(`/api/license-plate?licensePlate=${licensePlate}`);

    const data = response.data;

    if (response.data?.length === 0) {
      throw new Error(`No data found for ${licensePlate}`);
    }

    return data[0];
  }

  const validatePlate = async () => {
    setLoading(true);

    if (plate.length === 0) {
      setError("Please enter your license plate number");
      return false;
    }
    setTimeout(() => {
      setError("");
    }, 5000);

    try {
      const data = await fetchLicensePlateData(plate);

      form.updateFormData(data);
      form.nextStep();
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      <LiscencePlate plateNumber={plate} setPlateNumber={setPlate} />

      <Box>
        <Typography
          style={{
            color: "red",
            fontSize: "12px",
            textAlign: "center",
            marginTop: "1rem",
          }}
        >
          {error}
        </Typography>
      </Box>

      <Box
        style={{
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={validatePlate}
          style={{
            color: "white",
            backgroundColor: theme.palette.primary.accent,
            fontSize: "2rem",
            borderRadius: "20rem",
            padding: "1rem 2rem",

            "&:hover": {
              boxShadow: "0 0 10px black",
            },
          }}
        >
          {!loading ? <>Validate</> : <Loader />}
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
