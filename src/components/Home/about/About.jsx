"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";

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
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding: "0",
                marginTop: "5rem",
                zIndex: "9",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    width: "100%",
                    maxWidth: "none",
                    justifyContent: "space-between",
                    padding: "0",
                    position: "relative",
                }}
            >
                <Box sx={{flexDirection: "column"}}>
                <Box
                    sx={{
                        flex: 1,
                        position: "relative",
                        left: "0",
                        width: "49.5rem",
                        height: "35.14rem",
                        margin: "0",
                    }}
                >
                    <Image
                        src="/g1.jpg"
                        alt="Small car image"
                        width={489}
                        height={350}
                        style={{
                            borderRadius: "12px",
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </Box>

                <Box sx={{ marginTop: "8rem", paddingLeft: "15rem", zIndex: 1 }}>
                    <Box sx={{ textAlign: "left", marginBottom: "1.5rem", width: "50%" }}>
                        <HeadingLinesAnimation text="ABOUT" />
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
                        justifyContent: "flex-end",
                        position: "relative",
                        right: "0",
                        width: "50%",
                        height: "auto",
                        marginTop: "15rem",
                        marginBottom: "4.2rem",
                    }}
                >
                    <Image
                        src="/owner.png"
                        alt="Big car image"
                        width={976}
                        height={702}
                        style={{
                            borderRadius: "12px",
                            objectFit: "cover",
                            width: "97.99rem",
                            height: "70.48rem",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
