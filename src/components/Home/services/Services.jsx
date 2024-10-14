"use client";
import React from "react";
import { Typography, Box } from "@mui/material";
import { ServicesDivider } from "./ServicesPckgs";

import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";
import ThreeDComponent from "./ThreeDComponent";

import CalendarIcon from "../../../../public/decorative/Calendar-Time--Streamline-Tabler.svg";
import ClockIcon from "../../../../public/decorative/Clock-Hour-4--Streamline-Tabler.svg";
import GroupIcon from "../../../../public/decorative/Group 29.svg";
import UserIcon from "../../../../public/decorative/User-Edit--Streamline-Tabler.svg";
import MapIcon from "../../../../public/decorative/Map-Pin--Streamline-Tabler.svg";
import LeafIcon from "../../../../public/decorative/Leaf--Streamline-Tabler.svg";
import Image from "next/image";

export default function Services() {
    const { theme } = useTheme();

    return (
        <HomePkgBox
            sx={{
                margin: "5rem auto 16.8rem",
                paddingBottom: "7.5rem",
                width: "100%",
            }}
        >
            <Box
                sx={{
                    width: "50%",
                    margin: "0 auto",
                    paddingLeft: "9rem",
                    "@media (max-width: 600px)": { paddingLeft: 0 },
                }}
            >
                <HeadingLinesAnimation text="WHY CHOOSE US" sx={{ width: "50%" }} />
            </Box>

            {/*<Box sx={{ margin: "0 auto", zIndex: 10, width: "100%", maxWidth: "1440px", minWidth: "1200px" }}>
                <ThreeDComponent modelUrl="/models/bmw_m5_cs/untitled5.gltf" />
            </Box>*/}

            <Box
                sx={{
                    zIndex: "1",
                    padding: "4rem",
                    borderRadius: "32px",
                    maxWidth: "100%",
                    width: "137rem",
                    margin: "0 auto",
                    textAlign: "left",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.32)" : "rgba(141,141,141,0.4)"}`,
                    "& img": {
                        filter:
                            theme.palette.mode === "dark"
                                ? "brightness(0) saturate(100%) invert(36%) sepia(79%) saturate(4576%) hue-rotate(181deg) brightness(98%) contrast(101%)"
                                : "none",
                    },
                    "@media (max-width: 600px)": {
                        padding: "2rem",
                    },
                }}
            >
                {/* First Row */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: "6rem",
                        padding: "0 10rem",
                        gap: "3rem",
                        "@media (max-width: 600px)": {
                            flexDirection: "column",
                            padding: 0,
                            alignItems: "center",
                            marginBottom: "2rem",
                        },
                    }}
                >
                    {/* On-Site Service */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                padding: "1.5rem 2rem",
                                textAlign: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Image
                            src={MapIcon}
                            alt="Map Pin"
                            width={40}
                            height={40}
                            sx={{
                                marginBottom: "1.5rem",
                                "@media (max-width: 600px)": { transform: "scale(0.6)" },
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            On-Site Service
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 300,
                                "@media (max-width: 600px)": {
                                    fontSize: "1rem",
                                },
                            }}
                        >
                            Our experienced professionals come to you with our own material.
                        </Typography>
                    </Box>

                    <ServicesDivider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                            "@media (max-width: 600px)": {
                                display: "none",
                            },
                        }}
                    />

                    {/* Time Efficiency */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                padding: "1.5rem 2rem",
                                textAlign: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Image
                            src={ClockIcon}
                            alt="Clock"
                            width={40}
                            height={40}
                            sx={{
                                marginBottom: "1.5rem",
                                "@media (max-width: 600px)": { transform: "scale(0.6)" },
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            Time Efficiency
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 300,
                                "@media (max-width: 600px)": {
                                    fontSize: "1rem",
                                },
                            }}
                        >
                            Top-quality mobile steam cleaning that saves you time.
                        </Typography>
                    </Box>

                    <ServicesDivider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                            "@media (max-width: 600px)": {
                                display: "none",
                            },
                        }}
                    />

                    {/* Open 7 Days */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left", // Center align text
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                padding: "1.5rem 2rem",
                                textAlign: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Image
                            src={CalendarIcon}
                            alt="Calendar"
                            width={40}
                            height={40}
                            sx={{
                                marginBottom: "1.5rem",
                                "@media (max-width: 600px)": { transform: "scale(0.6)" },
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            Open 7 Days a Week
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 300,
                                "@media (max-width: 600px)": {
                                    fontSize: "1rem",
                                },
                            }}
                        >
                            Get in touch with us through various channels.
                        </Typography>
                    </Box>
                </Box>

                {/* Second Row */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        padding: "0 10rem",
                        gap: "3rem",
                        "@media (max-width: 600px)": {
                            flexDirection: "column",
                            padding: 0,
                            alignItems: "center",
                        },
                    }}
                >
                    {/* Easy Booking */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                padding: "1.5rem 2rem",
                                textAlign: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Image
                            src={UserIcon}
                            alt="User"
                            width={40}
                            height={40}
                            sx={{
                                marginBottom: "1.5rem",
                                "@media (max-width: 600px)": { transform: "scale(0.6)" },
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            Easy Booking
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 300,
                                "@media (max-width: 600px)": {
                                    fontSize: "1rem",
                                },
                            }}
                        >
                            Just book the appointment online and leave the rest to us.
                        </Typography>
                    </Box>

                    <ServicesDivider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                            "@media (max-width: 600px)": {
                                display: "none",
                            },
                        }}
                    />

                    {/* Eco-Friendly */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                padding: "1.5rem 2rem",
                                textAlign: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Image
                            src={LeafIcon}
                            alt="Leaf"
                            width={40}
                            height={40}
                            sx={{
                                marginBottom: "1.5rem",
                                "@media (max-width: 600px)": { transform: "scale(0.6)" },
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            Eco-Friendly
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 300,
                                "@media (max-width: 600px)": {
                                    fontSize: "1rem",
                                },
                            }}
                        >
                            We use 3 liters per car for great results.
                        </Typography>
                    </Box>

                    <ServicesDivider
                        orientation="vertical"
                        variant="middle"
                        flexItem
                        sx={{
                            "@media (max-width: 600px)": {
                                display: "none",
                            },
                        }}
                    />

                    {/* Interior Care */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                            padding: "1rem",
                            "@media (max-width: 600px)": {
                                padding: "1.5rem 2rem",
                                textAlign: "center",
                                alignItems: "center",
                            },
                        }}
                    >
                        <Image
                            src={GroupIcon}
                            alt="Group"
                            width={40}
                            height={40}
                            sx={{
                                marginBottom: "1.5rem",
                                "@media (max-width: 600px)": { transform: "scale(0.6)" },
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "2.2rem",
                                fontWeight: 400,
                                "@media (max-width: 600px)": {
                                    fontSize: "1.2rem",
                                },
                            }}
                        >
                            Interior Care
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.4rem",
                                fontWeight: 300,
                                "@media (max-width: 600px)": {
                                    fontSize: "1rem",
                                },
                            }}
                        >
                            Find answers to frequently asked questions.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </HomePkgBox>
    );
}

