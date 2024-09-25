import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import Location from "../../AnimatedSvgs/Location";
import Clock from "../../AnimatedSvgs/Clock";
import Tick from "../../AnimatedSvgs/Tick";
import Safe from "../../AnimatedSvgs/Safe";
import Appointment from "../../AnimatedSvgs/Appointment";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

export default function Services() {
    const { theme } = useTheme();
    const isDarkTheme = theme.palette.mode === "dark";

    const containerBgColor = isDarkTheme ? "rgba(133, 133, 133, 0.09)" : "transparent";

    return (
        <HomePkgBox sx={{ marginTop: "5rem", marginBottom: "8rem", textAlign: "center", backgroundColor: "transparent" }}>
            <Box sx={{ width: "50%", margin: "0 auto" }}>
                <HeadingLinesAnimation text="WHY CHOOSE US" sx={{ width: "70%" }} />
            </Box>

            <Box
                sx={{
                    backgroundColor: containerBgColor,
                    padding: "4rem",
                    border: `1px solid ${isDarkTheme ? "#555" : "#ccc"}`,
                    borderRadius: "32px",
                    maxWidth: "100%",
                    margin: "0 auto",
                    backdropFilter: "blur(15px)",
                    textAlign: "left", // Text is left-aligned
                }}
            >
                {/* First Row */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between", // Create space between cards
                        alignItems: "flex-start", // Align items to the top
                        marginBottom: "6rem",
                        padding: "0 10rem", // Add padding to left and right
                        gap: "3rem", // Adjust gap between the dividers and cards
                    }}
                >
                    {/* On-Site Service */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "145px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }}
                    >
                        <Location sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} />
                        <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>On-Site Service</Typography>
                        <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                            Our experienced professionals come to you with our own material.
                        </Typography>
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "#595959", height: "60px", margin: "2rem 3rem" }} />

                    {/* Time Efficiency */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "145px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }}
                    >
                        <Clock sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} />
                        <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Time Efficiency</Typography>
                        <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                            Top-quality mobile steam cleaning that saves you time.
                        </Typography>
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "#595959", height: "60px", margin: "2rem 3rem" }} />

                    {/* Open 7 Days */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "145px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }}
                    >
                        <Appointment sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} />
                        <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Open 7 Days a Week</Typography>
                        <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                            Get in touch with us through various channels.
                        </Typography>
                    </Box>
                </Box>

                {/* Second Row */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between", // Create space between cards
                        alignItems: "flex-start", // Align items to the top
                        padding: "0 10rem", // Add padding to left and right
                        gap: "3rem", // Adjust gap between the dividers and cards
                    }}
                >
                    {/* Easy Booking */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "145px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }}
                    >
                        <Tick sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} />
                        <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Easy Booking</Typography>
                        <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                            Just book the appointment online and leave the rest to us.
                        </Typography>
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "#595959", height: "60px", margin: "2rem 3rem" }} />

                    {/* Eco-Friendly */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "145px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }}
                    >
                        <Safe sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} />
                        <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Eco-Friendly</Typography>
                        <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                            We use 3 liters per car for great results.
                        </Typography>
                    </Box>

                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "#595959", height: "60px", margin: "2rem 3rem" }} />

                    {/* Interior Care */}
                    <Box
                        sx={{
                            maxWidth: "270px",
                            height: "145px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            textAlign: "left",
                        }}
                    >
                        <Clock sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} />
                        <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Interior Care</Typography>
                        <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
                            Find answers to frequently asked questions.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </HomePkgBox>
    );
}
