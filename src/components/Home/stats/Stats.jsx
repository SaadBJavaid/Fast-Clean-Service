"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { StatsContainer } from "../../mui/HomePkgs";
import Star from "../../AnimatedSvgs/Star";
import Bars from "../../AnimatedSvgs/Bars";
import Customer from "../../AnimatedSvgs/Customer";
import { useTheme } from "@mui/material";

export default function Stats() {
    const theme = useTheme();

    const getStatIcon = (iconComponent) => {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                    color: "white",
                    marginBottom: "1rem",
                }}
            >
                {React.createElement(iconComponent, {
                    sx: {
                        width: "100%",
                        height: "100%",
                        fill: "white",
                    },
                })}
            </Box>
        );
    };

    return (
        <Box sx={{ textAlign: "center", padding: "6rem 1rem", width: "80%", margin: "0 auto", backgroundColor: "transparent" }}>
            <Box
                sx={{
                    width: "80%",
                    maxWidth: "1300px",
                    marginBottom: "1rem",
                    textAlign: "left",
                    position: "relative",
                    left: "0",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        fontFamily: "Unbounded",
                        color: theme.palette.mode === "light" ? "#939393" : "white",
                    }}
                >
                    Our Numbers
                </Typography>

                <Box
                    component="img"
                    src="/Group.png"
                    alt="Decorative Arrow"
                    sx={{
                        height: "60px",
                        margin: "2rem auto",
                        right: "-15rem",
                    }}
                />
            </Box>

            <StatsContainer
                sx={{
                    textAlign: "center",
                    padding: "6rem 1rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#1C79CC",
                    borderRadius: "4rem",
                    width: "80%",
                    height: "auto",
                    margin: "0 auto",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "0 0.5rem",
                        height: "auto"
                    }}
                >
                    {/* First Stat */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1rem 1.5rem",
                            marginLeft: "15.5rem"
                        }}
                    >
                        {getStatIcon(Star)}
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: "3.5rem",
                                color: "white",
                                marginBottom: "0.5rem",
                            }}
                        >
                            4.8
                            <Typography component="span" sx={{ fontSize: "2rem", marginLeft: "4px", fontFamily: "Unbounded" }}>
                                /5
                            </Typography>
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: 500,
                                color: "white",
                            }}
                        >
                            Stars on Trustpilot
                        </Typography>
                    </Box>

                    {/* Divider Image INSIDE BLUE BOX */}
                    <Box
                        component="img"
                        src="/Line14.png"
                        alt="Divider"
                        sx={{
                            height: "10rem",
                            margin: "0 3rem",
                        }}
                    />

                    {/* Second Stat */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1rem 1.5rem",
                        }}
                    >
                        {getStatIcon(Bars)}
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: "3.5rem",
                                color: "white",
                                marginBottom: "0.5rem",
                            }}
                        >
                            4+
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: 500,
                                color: "white",
                            }}
                        >
                            Years of Experience
                        </Typography>
                    </Box>

                    {/* Divider Image INSIDE BLUE BOX */}
                    <Box
                        component="img"
                        src="/Line14.png"
                        alt="Divider"
                        sx={{
                            height: "10rem",
                            margin: "0 3rem",
                        }}
                    />

                    {/* Third Stat */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            textAlign: "center",
                            padding: "1rem 1.5rem",
                            marginRight: "15.5rem"
                        }}
                    >
                        {getStatIcon(Customer)}
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 700,
                                fontSize: "3.5rem",
                                color: "white",
                                marginBottom: "0.5rem",
                            }}
                        >
                            1500+
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "1.6rem",
                                fontWeight: 500,
                                color: "white",
                            }}
                        >
                            Happy Clients
                        </Typography>
                    </Box>
                </Box>
            </StatsContainer>
        </Box>
    );
}
