"use client";
import React from "react";

import Image from "next/image";
import Form from "../../app/fleet/Form";
import {
  GrayBox,
  ImageWrapper,
  Container,
} from "../../components/mui/ContactPkgs";
import MapComponent from "../../components/Contact/MapComponent";
import ContactCard from "../../components/Contact/ContactCard";
import ContactCard2 from "../../components/Contact/ContactCard2";
import { Box } from "@mui/material";

export default function ContactMain() {
  const handleFormSubmit = (data) => {
    console.log("Form submitted with data:", data);
  };

  return (
    <Container>
      <GrayBox flex={1}>
        <ImageWrapper>
          <MapComponent />
        </ImageWrapper>
      </GrayBox>
      <GrayBox flex={1}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "4rem 0",
          }}
        >
          <Form onSubmit={handleFormSubmit} />

          <Box sx={{ display: "flex", gap: "2rem" }}>
            <ContactCard />
            <ContactCard2 />
          </Box>
        </Box>
      </GrayBox>
    </Container>
  );
}
