"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography, Button, useMediaQuery } from "@mui/material";
import {
    HomePkgsBox,
    HomePkgsInBox,
    HomeServicesBox,
    ServicesBtn,
} from "../../mui/HomePkgs";
import { useTheme } from "../../../app/contexts/themeContext";
import styles from "./CamperService.module.css";

export default function CamperService() {
    const { theme } = useTheme();
    const isBelow600px = useMediaQuery('(max-width: 600px)');
    const isDarkTheme = theme.palette.mode === "dark";

    const headingColor = isDarkTheme ? "#fff" : "#232E4A";
    const smallTextColor = isDarkTheme ? "#C2C2C2" : "#535353";
    const buttonBackgroundColor = "#1C79CC";

    return (
        <HomeServicesBox
            sx={{
                flexDirection: { xs: "column", sm: "row" },
                padding: "0",
                width: "70%",
                marginTop: "4rem",
                marginBottom: "4rem",
                gap: "10rem",
            }}
        >
            <Box
                sx={{
                    flexShrink: 1,
                    margin: "1.7rem 0 0",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: "4rem",
                            color: headingColor,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        FleetCare Pro
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            color: smallTextColor,
                            textAlign: "center",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Elevate your fleet’s appearance with our cutting-edge mobile cleaning service. FleetCare Pro brings professional-grade steam cleaning technology directly to your location, ensuring your vehicles are spotless and ready for the road - anywhere, anytime.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.4rem",
                            color: smallTextColor,
                            textAlign: "center",
                            marginBottom: "2.5rem",
                        }}
                    >
                        With FleetCare Pro, pristine vehicles are just a booking away.
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: buttonBackgroundColor,
                        color: "#fff",
                        fontSize: "1.4rem",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        textTransform: "none",
                        width: "18rem",
                        height: "5rem"
                    }}
                >
                    Book Now
                </Button>
            </Box>

            <Box
                sx={{
                    flexShrink: 1,
                    margin: "1.7rem 0 0",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <Typography
                        sx={{
                            fontSize: "4rem",
                            color: headingColor,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        Subscriptions
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            color: smallTextColor,
                            textAlign: "center",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Transform your vehicle maintenance routine with our flexible subscription plans. Experience premium care tailored to your schedule and preferences.
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.4rem",
                            color: smallTextColor,
                            textAlign: "center",
                            marginBottom: "2.5rem",
                        }}
                    >
                        Choose your plan and never worry about a dirty car again!
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "1.4rem",
                            color: "#2E75E8",
                            textAlign: "center",
                            marginBottom: "2.5rem",
                        }}
                    >
                        24 months | Yearly | Monthly plans
                    </Typography>
                </Box>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: buttonBackgroundColor,
                        color: "#fff",
                        fontSize: "1.4rem",
                        padding: "1rem 2rem",
                        borderRadius: "12px",
                        textTransform: "none",
                        width: "18rem",
                        height: "5rem"
                    }}
                >
                    Book Now
                </Button>
            </Box>
        </HomeServicesBox>
    );
}
