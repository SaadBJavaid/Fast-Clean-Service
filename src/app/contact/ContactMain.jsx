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
import { Box, Typography } from "@mui/material";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTheme } from "../../contexts/themeContext";

export default function ContactMain() {
    const { theme } = useTheme();

    const handleFormSubmit = (data) => {
        console.log("Form submitted with data:", data);
    };

    return (
        <Container sx={{
            paddingLeft: "2rem !important",
        }}>
            <GrayBox
                flex={1}
            >
                <ImageWrapper>
                    <MapComponent />
                </ImageWrapper>
            </GrayBox>

            <GrayBox
                flex={1}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "100%",
                        padding: "2rem 0",
                    }}
                >
                    <Box sx={{ marginBottom: "2rem", textAlign: "left" }}>
                        <HeadingLinesAnimation text="CONTACT US" />
                    </Box>

                    <Form onSubmit={handleFormSubmit} />

                    <Box
                        sx={{
                            display: "flex",
                            gap: "2rem",
                            marginTop: "2rem",
                        }}
                    >
                        <ContactCard
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light"
                                        ? "0px 4px 7px rgba(0, 0, 0, 0.25)"
                                        : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                                transition: "box-shadow 0.3s ease",
                            }}
                        />
                        <ContactCard2
                            sx={{
                                boxShadow:
                                    theme.palette.mode === "light"
                                        ? "0px 4px 7px rgba(0, 0, 0, 0.25)"
                                        : "0px 4px 7px rgba(0, 0, 0, 0.5)",
                                transition: "box-shadow 0.3s ease",
                            }}
                        />
                    </Box>
                </Box>
            </GrayBox>
        </Container>
    );
}
