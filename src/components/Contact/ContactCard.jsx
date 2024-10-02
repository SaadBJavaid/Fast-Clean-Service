import * as React from "react";
import {
    ServiceItemContainer,
    ServiceItemBox,
    ServiceItemIconContainer,
    ServiceItemIcon,
    ServiceItemHeading,
    ServiceItemDescription,
} from "../../components/Home/ServicesOverview/ServiceOverviewPckgs";
import { LocationCityOutlined, Mail, Phone, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ContactCard() {
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
                        gap: "1.5rem !important",
                    }}
                >
                    <ServiceItemIconContainer
                        sx={{
                            width: "5.5rem !important",
                            height: "5.5rem !important",
                            marginBottom: "0 !important",
                        }}
                    >
                        <ServiceItemIcon
                            src="/howitworkicons/location.gif"
                            alt="Location Icon"
                            width={25} // Increased icon size
                            height={25}
                            sx={{ width: "80% !important", height: "80% !important" }}
                        />
                    </ServiceItemIconContainer>

                    <ServiceItemHeading sx={{ fontSize: "1.6rem !important", marginTop: "0" }}>
                        CONTACTGEGEVENS
                    </ServiceItemHeading>
                </Box>

                {/* Phone */}
                <ServiceItemDescription>
          <span style={{ paddingRight: "10px" }}>
            <Phone />
          </span>
                    Bel nummer:{" "}
                    <a href="tel:+31202440994" style={{ color: "#2E75E8", textDecoration: "none" }}>
                        020 2440994
                    </a>
                </ServiceItemDescription>

                {/* WhatsApp */}
                <ServiceItemDescription>
          <span style={{ paddingRight: "10px" }}>
            <WhatsApp />
          </span>
                    Whatsapp:{" "}
                    <a href="https://wa.me/31202440994" style={{ color: "#2E75E8", textDecoration: "none" }}>
                        020 – 244 099 4
                    </a>
                </ServiceItemDescription>

                {/* Email */}
                <ServiceItemDescription>
          <span style={{ paddingRight: "10px" }}>
            <Mail />
          </span>
                    E-mail:{" "}
                    <a href="mailto:Info@fastcleanservice.nl" style={{ color: "#2E75E8", textDecoration: "none" }}>
                        Info@fastcleanservice.nl
                    </a>
                </ServiceItemDescription>

                {/* Address */}
                <ServiceItemDescription sx={{ marginTop: "1.5rem !important" }}>
          <span style={{ paddingRight: "10px" }}>
            <LocationCityOutlined />
          </span>
                    {"(Post adres):"} Omweg 38
                </ServiceItemDescription>

                {/* City and other details */}
                <ServiceItemDescription>1566 HP Assendelft</ServiceItemDescription>
                <ServiceItemDescription>KVK nummer: 70208085</ServiceItemDescription>
                <ServiceItemDescription>BTW nummer: NL002346426B12</ServiceItemDescription>
            </ServiceItemBox>
        </ServiceItemContainer>
    );
}
