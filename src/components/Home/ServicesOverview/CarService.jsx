"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import {
    HomePkgsBox,
    HomePkgsInBox,
    ServicesItem,
} from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

export default function CarService() {
    const { theme } = useTheme();
    const isDarkTheme = theme.palette.mode === "dark";

    const servicesData = [
        {
            img: "/mapS.png",
            title: "Anywhere Auto-Care",
            description:
                "We bring the latest steam cleaning technology to your location, ensuring your vehicles are professionally cleaned and ready to go!",
        },
        {
            img: "/unionS.png",
            title: "FleetCare Pro",
            description:
                "Tailored cleaning solutions for businesses with multiple vehicles. We ensure your fleet stays spotless and road-ready.",
        },
        {
            img: "/medS.png",
            title: "Subscriptions",
            description:
                "Hassle-free car care with regular service packages. Enjoy consistent maintenance at discounted rates.",
        },
        {
            img: "/carS.png",
            title: "Long term Vehicle Care",
            description:
                "Long-term vehicle maintenance plans to ensure your car remains in peak condition with additional care options.",
        },
    ];

    return (
        <HomePkgsBox
            sx={{
                maxWidth: "70%",
                width: "100%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "17.6rem"
            }}
        >
            <HomePkgsInBox
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "nowrap",
                    gap: "1rem",
                    width: "100%",
                }}
            >
                {servicesData.map((service, index) => (
                    <ServicesItem
                        key={index}
                        sx={{
                            flex: "1 1 22%",
                            maxWidth: "25%",
                            minWidth: "250px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            borderRadius: "1rem",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            height: "30.1rem",
                            padding: "2.5rem",
                            backgroundColor: isDarkTheme ? "transparent" : "#fff",
                        }}
                    >
                        <Box
                            sx={{
                                width: "10.64rem",
                                height: "10.64rem",
                                backgroundColor: isDarkTheme ? "transparent" : "#2E75E8",
                                borderRadius: "50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "1.5rem",
                            }}
                        >
                            <Image
                                src={service.img}
                                alt={service.title}
                                width={40}
                                height={40}
                                style={{
                                    filter: isDarkTheme
                                        ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
                                        : "invert(1)",
                                }}
                            />
                        </Box>

                        <Typography
                            sx={{
                                fontSize: "1.8rem !important",
                                marginBottom: "1rem",
                                color: isDarkTheme ? "#fff" : "#232E4A",
                            }}
                        >
                            {service.title}
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "1.4rem !important",
                                fontWeight: "300",
                                color: isDarkTheme ? "#C2C2C2" : "#535353",
                            }}
                        >
                            {service.description}
                        </Typography>
                    </ServicesItem>
                ))}
            </HomePkgsInBox>
        </HomePkgsBox>
    );
}
