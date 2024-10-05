import * as React from "react";
import {
    ServiceItemBox,
    ServiceItemIconContainer,
    ServiceItemIcon,
    ServiceItemHeading,
    ServiceItemDescription,
    ContactCardContainer,
} from "../../components/Home/ServicesOverview/ServiceOverviewPckgs";
import { LocationCityOutlined, Mail, Phone, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ContactCard() {

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
                            width: "4.5rem !important",
                            height: "4.5rem !important",
                            marginBottom: "0 !important",
                        }}
                    >
                        <ServiceItemIcon
                            src="/howitworkicons/location.gif"
                            alt="Location Icon"
                            width={20}
                            height={20}
                            sx={{ width: "80% !important", height: "80% !important" }}
                        />
                    </ServiceItemIconContainer>

                    <ServiceItemHeading
                        sx={{
                            fontSize: "1.6rem !important",
                            marginTop: "1.25rem",
                            paddingBottom: "0.5rem",
                        }}
                    >
                        CONTACTGEGEVENS
                    </ServiceItemHeading>
                </Box>

                <ServiceItemDescription>
                    <span style={{ paddingRight: "10px" }}>
                        <Phone />
                    </span>
                    Bel nummer:{" "}
                    <a href="tel:+31202440994" style={{ color: "#2E75E8", textDecoration: "none" }}>
                        020 2440994
                    </a>
                </ServiceItemDescription>

                <ServiceItemDescription>
                    <span style={{ paddingRight: "10px" }}>
                        <WhatsApp />
                    </span>
                    Whatsapp:{" "}
                    <a href="https://wa.me/31202440994" style={{ color: "#2E75E8", textDecoration: "none" }}>
                        020 – 244 099 4
                    </a>
                </ServiceItemDescription>

                <ServiceItemDescription>
                    <span style={{ paddingRight: "10px" }}>
                        <Mail />
                    </span>
                    E-mail:{" "}
                    <a href="mailto:Info@fastcleanservice.nl" style={{ color: "#2E75E8", textDecoration: "none" }}>
                        Info@fastcleanservice.nl
                    </a>
                </ServiceItemDescription>

                <ServiceItemDescription sx={{ marginTop: "1.5rem !important" }}>
                    <span style={{ paddingRight: "10px" }}>
                        <LocationCityOutlined />
                    </span>
                    {"(Post adres):"} Omweg 38
                </ServiceItemDescription>

                <ServiceItemDescription>1566 HP Assendelft</ServiceItemDescription>
                <ServiceItemDescription>KVK nummer: 70208085</ServiceItemDescription>
                <ServiceItemDescription>BTW nummer: NL002346426B12</ServiceItemDescription>
            </ServiceItemBox>
        </ContactCardContainer>
    );
}