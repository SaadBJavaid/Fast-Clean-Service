"use client";
import React, { useState } from "react";
import { styled, Box, Typography, Button, ListItem } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";

export const ServicesItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#0c7fcf",
  //   lineHeight: 1,
  marginBottom: "1.5rem",
}));
