"use client";
import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../../../app/contexts/themeContext";
import { HomePkgsInBox } from "../../mui/HomePkgs";

export default function ServiceColumnGroup() {
    const { theme } = useTheme();
    const isDarkTheme = theme.palette.mode === "dark";

    const headingColor = isDarkTheme ? "#fff" : "#232E4A";
    const smallTextColor = isDarkTheme ? "#C2C2C2" : "#535353";
    const subheadingColor = isDarkTheme ? "#fff" : "#232E4A";

    return (
        <HomePkgsInBox sx={{ flexDirection: "column", alignItems: "center",  marginTop: "5.8rem", marginBottom: "7.9rem" }}>
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "4rem !important",
                    color: headingColor,
                    fontWeight: "bold",
                    marginBottom: "0.9rem",
                }}
            >
                Anywhere Auto-Care
            </Typography>

            {/* The first line below the heading */}
            <Typography
                sx={{
                    textAlign: "center",
                    fontSize: "1.4rem",
                    color: smallTextColor,
                    maxWidth: "600px",
                }}
            >
                Convenient mobile car cleaning delivered directly to you. Experience professional quality care—wherever you are.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    maxWidth: "80%",
                    marginBottom: "3rem",
                    gap: "9.7rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "1.7rem",
                        padding: "1.5rem",
                        borderRadius: "1rem",
                        minHeight: "auto",
                    }}
                >
                    <Box
                        sx={{
                            width: "8.4rem",
                            height: "8.4rem",
                            borderRadius: "50%",
                            border: `2px solid ${isDarkTheme ? "transparent" : "#c4c4c4"}`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/locS.png"
                            alt="On-Site Service"
                            width={48}
                            height={48}
                            style={{
                                filter: isDarkTheme
                                    ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
                                    : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "1.6rem",
                            color: subheadingColor,
                            fontWeight: 400,
                        }}
                    >
                        On-Site Service
                    </Typography>
                    <Typography
                        sx={{ fontSize: "1.4rem", color: smallTextColor, maxWidth: "300px" }}
                    >
                        Enjoy our services at our dedicated location, where you can relax while we take care of your vehicle.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "1.7rem",
                        padding: "1.5rem",
                        borderRadius: "1rem",
                        minHeight: "auto",
                    }}
                >
                    <Box
                        sx={{
                            width: "8.4rem", // Container size: 84px to rem
                            height: "8.4rem",
                            borderRadius: "50%",
                            border: `2px solid ${isDarkTheme ? "transparent" : "#c4c4c4"}`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            src="/vanS.png"
                            alt="Mobile Service"
                            width={48}
                            height={48}
                            style={{
                                filter: isDarkTheme
                                    ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
                                    : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
                            }}
                        />
                    </Box>
                    <Typography
                        sx={{
                            fontSize: "1.6rem",
                            color: subheadingColor,
                            fontWeight: 400,
                        }}
                    >
                        Mobile Service
                    </Typography>
                    <Typography
                        sx={{ fontSize: "1.4rem", color: smallTextColor, maxWidth: "300px" }}
                    >
                        Enjoy our services at your location, where you can relax while we take care of your vehicle.
                    </Typography>
                </Box>
            </Box>
        </HomePkgsInBox>
    );
}
