"use client";
import React from "react";

import Image from "next/image";
import Form from "./Form";
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
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "2rem",
                position: "relative",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    position: "relative",
                    '@media (min-width: 900px)': {
                        flexDirection: "column",
                    },
                }}
            >
                {/* Map Section with Form Below */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        position: "relative",
                        '@media (min-width: 900px)': {
                            flexDirection: "column",
                        },
                    }}
                >
                    {/* Map Component */}
                    <GrayBox
                        flex={1}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "1rem",
                            height: {
                                xs: "40vh", // Ensure there's height for the map
                                sm: "auto",
                            },
                            minHeight: {
                                xs: "200px", // Ensure a minimum height for visibility
                            },
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(10px)",
                            zIndex: 1, // Ensure map is visible above other elements
                        }}
                    >
                        <ImageWrapper>
                            <MapComponent />
                        </ImageWrapper>
                    </GrayBox>

                    {/* Form and Contact Cards Section */}
                    <GrayBox
                        flex={1}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            padding: "1rem",
                            position: "relative",
                            width: "100%",
                            '@media (min-width: 900px)': {
                                flexDirection: "column",
                                alignItems: "center",
                            },
                        }}
                    >
                        {/* Backdrop Container */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(255, 255, 255, 0.5)",
                                backdropFilter: "blur(5px)",
                                zIndex: -1,
                            }}
                        />

                        <Form onSubmit={handleFormSubmit} />
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                                width: "90%",
                                '@media (min-width: 600px)': {
                                    flexDirection: "row",
                                },
                            }}
                        >
                            <ContactCard />
                            <ContactCard2 />
                        </Box>
                    </GrayBox>
                </Box>
            </Box>
        </Container>
    );
}
