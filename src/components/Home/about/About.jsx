"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../app/contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation"; // Import for heading lines

export default function About() {
    const sectionRef = useRef(null);
    const { theme } = useTheme();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const currentSection = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    observer.unobserve(currentSection);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1,
            }
        );

        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, [hasAnimated]);

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.mode === "light" ? "#f9f9f9" : "#1F1F1F",
                padding: "4rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "5rem", // Added top margin
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    maxWidth: "1200px",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ flex: 1, position: "relative" }}>
                    {/* Small top-left image cut off from left */}
                    <Box
                        sx={{
                            position: "absolute",
                            left: "-20%", // Adjusted for a more cut-off effect
                            top: "-50px",
                            width: "80%",
                            maxWidth: "350px",
                            marginBottom: { xs: "2rem", md: "0" },
                            zIndex: 2,
                        }}
                    >
                        <Image
                            src="/g1.jpg"
                            alt="Small car image"
                            width={350}
                            height={250}
                            style={{
                                borderRadius: "12px",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    <Box sx={{ marginTop: "230px", paddingLeft: { md: "6rem" }, zIndex: 1 }}>
                        <Box sx={{ textAlign: "left", marginBottom: "1.5rem" }}>
                            <HeadingLinesAnimation text="About" />
                        </Box>

                        <Typography
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "1.6rem",
                                lineHeight: 1.7,
                                maxWidth: "500px",
                            }}
                        >
                            We bring professional car cleaning to your location, any time. Our advanced steam cleaning technology ensures a deep clean for all vehicle types. With fully-equipped mobile units and expert technicians, we deliver efficient, high-quality service that fits your schedule. Choose FAST CLEAN SERVICE for convenient, thorough car cleaning on your terms.
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "4rem",
                        position: "relative",
                        marginRight: { xs: "0", md: "1rem", lg: "-4rem" },
                    }}
                >
                    <Image
                        src="/owner.png"
                        alt="Big car image"
                        width={400}
                        height={500}
                        style={{ borderRadius: "12px", objectFit: "cover" }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
