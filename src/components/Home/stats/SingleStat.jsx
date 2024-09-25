"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardContent, Typography, Box } from "@mui/material";
import { useTheme } from "../../../app/contexts/themeContext";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SingleStat({ data }) {
    const { icon: Icon, header, tagLine, type } = data;
    const [count, setCount] = useState(0.0);
    const statRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const value = parseFloat(header, 10);
                    const duration = 2000;
                    const stepTime = 100;
                    const steps = Math.ceil(duration / stepTime);
                    const increment = value / steps;

                    const animate = () => {
                        let start = 0;
                        const interval = setInterval(() => {
                            start += increment;
                            if (start >= value) {
                                setCount(value);
                                clearInterval(interval);
                            } else {
                                setCount(Math.ceil(start));
                            }
                        }, stepTime);
                    };

                    if (type === "ranking") {
                        setCount(1.0);
                        animate();
                    } else if (type === "customer") {
                        setCount(1300);
                        animate();
                    } else if (type === "rating") {
                        setCount(value);
                    }
                }
            },
            { threshold: 0.5 }
        );

        if (statRef.current) {
            observer.observe(statRef.current);
        }

        return () => {
            if (statRef.current) {
                observer.unobserve(statRef.current);
            }
        };
    }, [header, type, hasAnimated]);

    return (
        <Box ref={statRef} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
                sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "1rem 1rem", // Adjusted padding to reduce space between components
                }}
            >
                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center", // Ensure the SVG is centered
                            alignItems: "center",
                            fontSize: "50px",
                            color: "white",
                            height: "50px",
                            width: "50px",
                        }}
                    >
                        <Icon
                            sx={{
                                color: "white", // Fill the icon with white
                                fill: "white",
                                stroke: "white",
                                width: "100%",
                                height: "100%",
                            }}
                        />
                    </Box>

                    <Typography
                        variant="h2"
                        sx={{
                            margin: "8px 0",
                            fontWeight: 700,
                            fontSize: "3.5rem", // Slightly reduced font size
                            color: "white",
                        }}
                    >
                        {count}
                        {type !== "rating" && "+"}
                        {type === "rating" && (
                            <Typography component="span" sx={{ marginLeft: "4px", fontSize: "3.5rem", fontFamily: "Unbounded" }}>
                                /5
                            </Typography>
                        )}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "1.6rem",
                            fontWeight: 500,
                            color: "white",
                        }}
                    >
                        {tagLine}
                    </Typography>
                </CardContent>
            </Box>
        </Box>
    );
}
