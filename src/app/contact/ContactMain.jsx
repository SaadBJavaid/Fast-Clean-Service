"use client";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Form from "./Form";
import {
    GrayBox,
    ImageWrapper,
    Container,
} from "../../components/mui/ContactPkgs";
import MapComponent from "../../components/Contact/MapComponent";
import ContactCard from "../../components/Contact/ContactCard";
import ContactCard2 from "../../components/Contact/ContactCard2";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import { useTheme } from "../../contexts/themeContext";

export default function ContactMain() {
    const { theme } = useTheme();
    const [isScreenSmall, setIsScreenSmall] = useState(false);
    const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);

    // Track window width and adjust layout accordingly
    useEffect(() => {
        const handleResize = () => {
            setIsScreenSmall(window.innerWidth < 1368);
            setIsVerySmallScreen(window.innerWidth < 600);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleFormSubmit = (data) => {
        console.log("Form submitted with data:", data);
    };

    const largeScreenLayout = (
        <Container sx={{ paddingLeft: "2rem !important" }}>
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
                        padding: "2rem 0",
                    }}
                >
                    <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
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

    const smallScreenLayout = (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "2rem",
                position: "relative",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: isVerySmallScreen ? "column-reverse" : "row",
                    justifyContent: "space-between",
                    gap: "2rem",
                    width: "100%",
                }}
            >
                <GrayBox flex={1}>
                    <ImageWrapper>
                        <MapComponent />
                    </ImageWrapper>
                </GrayBox>

                <GrayBox
                    flex={1}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "1rem",
                        position: "relative",
                        width: "100%",
                        "@media (min-width: 900px)": {
                            alignItems: "center",
                        },
                    }}
                >
                    <Box sx={{ marginBottom: "2rem", textAlign: "center" }}>
                        <HeadingLinesAnimation text="CONTACT US" />
                    </Box>

                    <Form onSubmit={handleFormSubmit} />
                </GrayBox>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: isVerySmallScreen ? "column" : "row",
                    gap: "2rem",
                    justifyContent: "center",
                    marginTop: isVerySmallScreen ? "2rem" : "0",
                    width: "100%",
                    padding: isVerySmallScreen ? "0 3rem" : "0",
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
        </Container>
    );

    return isScreenSmall ? smallScreenLayout : largeScreenLayout;
}
