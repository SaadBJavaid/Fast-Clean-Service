import * as React from "react";
import { LockClock } from "@mui/icons-material";
import {
    ServiceItemContainer,
    ServiceItemBox,
    ServiceItemIconContainer,
    ServiceItemIcon,
    ServiceItemHeading,
    ServiceItemDescription,
} from "../../components/Home/ServicesOverview/ServiceOverviewPckgs"; // Import the same components as ContactCard
import { Box } from "@mui/material";

export default function ContactCard2() {
    return (
        <ServiceItemContainer
            sx={{
                textAlign: "left !important",
                padding: "1rem !important",
                marginTop: "0 !important", // Remove any top margin
            }}
        >
            <ServiceItemBox
                sx={{
                    alignItems: "flex-start !important",
                    gap: "0.5rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem !important",
                    }}
                >
                    <ServiceItemIconContainer
                        sx={{
                            width: "6rem !important",
                            height: "6rem !important",
                            marginBottom: "0 !important",
                        }}
                    >
                        <ServiceItemIcon
                            src="/howitworkicons/appointment.gif"
                            alt="Appointment Icon"
                            width={20}
                            height={20}
                            sx={{ width: "60% !important", height: "60% !important" }}
                        />
                    </ServiceItemIconContainer>

                    <ServiceItemHeading sx={{ fontSize: "1.6rem !important", marginTop: "0" }}>
                        WERKTIJDEN
                    </ServiceItemHeading>
                </Box>

                {/* Description */}
                <ServiceItemDescription>
                    Fast Clean Service is 7 dagen per week beschikbaar. Wij leveren de reinigingsservice voor uw vervoermiddel bij u aan
                    huis, uw bedrijf of andere gewenste locatie!
                </ServiceItemDescription>

                {/* Subheading */}
                <ServiceItemDescription sx={{ fontSize: "1rem !important", fontWeight: "bold" }}>
                    Maandag t/m zondag
                </ServiceItemDescription>

                {/* Time */}
                <ServiceItemDescription>
          <span style={{ paddingRight: "10px" }}>
            <LockClock />
          </span>
                    08.00 – 18.00 uur
                </ServiceItemDescription>
            </ServiceItemBox>
        </ServiceItemContainer>
    );
}
