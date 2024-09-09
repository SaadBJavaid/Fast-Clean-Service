"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../app/Home.module.css";
import { useTheme } from "../../../app/contexts/themeContext";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function SingleStat({ data }) {
    const { icon: Icon, header, tagLine, type } = data;
    const [count, setCount] = useState(0.0);
    const statRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);
    const { theme } = useTheme();

    // Media queries for responsiveness
    const isSmallScreen = useMediaQuery("(max-width: 600px)");
    const isMediumScreen = useMediaQuery("(min-width: 600px) and (max-width: 900px)");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Animation logic
                    const value = parseFloat(header, 10);
                    const duration = 2000; // Total animation duration in milliseconds
                    const stepTime = 100; // Time between updates
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
                        setCount(1.0); // Start from 1
                        animate();
                    } else if (type === "customer") {
                        setCount(1300); // Start from 1300
                        animate();
                    } else if (type === "rating") {
                        setCount(value); // Static value
                    }
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is in view
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
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
            ref={statRef}
        >
            <Card
                className={styles.card}
                sx={{
                    width: "100%",
                    borderRadius: "24px",
                    margin: "0 3rem",
                    backgroundColor:
                        theme.palette.mode === "light" ? "#eeedeb" : "#1F1F1F",
                    color: theme.palette.mode === "light" ? `#212121` : "#fff",
                    border: "1px solid #ffffff80",
                }}
            >
                <CardContent
                    sx={{
                        padding: "16px 24px !important",
                    }}
                    className={styles.cardContent}
                >
                    <div
                        className={styles.iconWrapper}
                        style={{
                            "--color-accent": theme.palette.primary.accent,
                            fontSize: isSmallScreen ? "40px" : isMediumScreen ? "50px" : "60px", // Responsive icon size
                        }}
                    >
                        <Icon style={{ fontSize: "inherit" }} />
                    </div>
                    <Typography
                        variant="h2"
                        component="div"
                        sx={{
                            margin: "16px 0 8px",
                            fontWeight: "700",
                            fontSize: isSmallScreen ? "24px" : isMediumScreen ? "32px" : "40px", // Responsive header font size
                            fontFamily: "JakartaSans",
                        }}
                        className={styles.header}
                    >
                        {count}
                        {type !== "rating" && "+"}
                        {type === "rating" && (
                            <>
                                <Typography
                                    sx={{
                                        display: "inline-block",
                                        margin: "0 6px",
                                        fontSize: isSmallScreen ? "1rem" : "1.5rem", // Responsive font size for "out of"
                                        color: "primary.text1",
                                    }}
                                >
                                    out of
                                </Typography>
                                5
                            </>
                        )}
                    </Typography>
                    <Typography
                        sx={{
                            wordSpacing: "1px",
                            fontFamily: "BDSansBold",
                            fontSize: isSmallScreen ? "14px" : isMediumScreen ? "16px" : "18px", // Responsive tagline font size
                        }}
                        variant="h4"
                        className={styles.tagLine}
                    >
                        {tagLine}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
