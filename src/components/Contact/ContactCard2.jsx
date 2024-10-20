"use client";
import React from "react";
import { LockClock } from "@mui/icons-material";
import {
  ServiceItemBox,
  ServiceItemIconContainer,
  ServiceItemIcon,
  ServiceItemHeading,
  ServiceItemDescription,
} from "../mui/ServiceOverviewPckgs";
import { Box } from "@mui/material";
import { ContactCardContainer } from "./Contact.style";

export default function ContactCard2() {
  return (
    <ContactCardContainer>
      <ServiceItemBox
        sx={{
          alignItems: "flex-start !important",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem !important",
            paddingBottom: "2rem",
          }}
        >
          <ServiceItemIconContainer
            sx={{
              width: "5rem !important",
              height: "5rem !important",
              marginBottom: "0 !important",
            }}
          >
            <ServiceItemIcon
              src="/howitworkicons/appointment.gif"
              alt="Appointment Icon"
              width={15}
              height={15}
              sx={{ width: "60% !important", height: "60% !important" }}
            />
          </ServiceItemIconContainer>

          <ServiceItemHeading
            sx={{
              fontSize: "1.6rem !important",
              marginTop: "1.25rem",
              paddingBottom: "0.5rem",
            }}
          >
            WERKTIJDEN
          </ServiceItemHeading>
        </Box>

        {/* Description */}
        <ServiceItemDescription>
          Fast Clean Service is 7 dagen per week beschikbaar. Wij leveren de reinigingsservice voor uw vervoermiddel bij u aan
          huis, uw bedrijf of andere gewenste locatie!
        </ServiceItemDescription>

        {/* Subheading */}
        <ServiceItemDescription
          sx={{
            fontSize: "1rem !important",
            fontWeight: "bold",
            paddingTop: "1rem",
          }}
        >
          Maandag t/m zondag
        </ServiceItemDescription>

        {/* Time */}
        <ServiceItemDescription sx={{ paddingTop: "1rem" }}>
          <span style={{ paddingRight: "10px" }}>
            <LockClock />
          </span>
          08.00 – 18.00 uur
        </ServiceItemDescription>
      </ServiceItemBox>
    </ContactCardContainer>
  );
}
