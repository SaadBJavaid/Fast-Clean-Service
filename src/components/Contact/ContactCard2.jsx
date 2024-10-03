import * as React from "react";
import { LockClock } from "@mui/icons-material";
import {
    ServiceItemContainer,
    ServiceItemBox,
    ServiceItemIconContainer,
    ServiceItemIcon,
    ServiceItemHeading,
    ServiceItemDescription,
} from "../../components/Home/ServicesOverview/ServiceOverviewPckgs";
import { Box } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";

export default function ContactCard2() {
    const { theme } = useTheme();
    return (
        <Box
            sx={{
                textAlign: "left !important",
                padding: "1.5rem !important",
                marginTop: "0 !important",
                height: "auto !important",
                borderRadius: "1rem",
                width: "350px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: theme.palette.mode === "dark" ? "rgba(255,255,255,0.0001)" : "white",
                border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.12)" : "white"}`,
                backdropFilter: "blur(2.4px)",
            }}
        >
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
        </Box>
    );
}
