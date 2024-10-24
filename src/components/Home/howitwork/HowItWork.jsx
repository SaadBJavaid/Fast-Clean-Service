"use client";
import React from "react";
import { Typography, Grid } from "@mui/material";
import SingleWork from "./SingleWork";
import { SectionHeadingCentered } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

const works = [
    {
        id: 1,
        icon: "/howitworkicons/laptop.gif",
        title: "Choose your package",
        description: "Choose from one of our packs. This way we know exactly what we can do for you",
    },
    {
        id: 2,
        icon: "/howitworkicons/appointment.gif",
        title: "Make an appointment",
        description: "Fill in your details so that our retailers know exactly where they can make the car shine.",
    },
    {
        id: 3,
        icon: "/howitworkicons/mail.gif",
        title: "Confirmation",
        description: "After your reservation has been completed, you will receive a confirmation email.",
    },
    {
        id: 4,
        icon: "/howitworkicons/location.gif",
        title: "Cleaning",
        description: "The detailer is on the way with our great workbus to make your car shine!",
    },
];

export default function HowItWork() {
    const { theme } = useTheme();

    return (
        <div>
            <div>
                <SectionHeadingCentered
                    sx={{
                        marginBottom: {
                            xs: "2rem", // Extra small screens
                            sm: "4rem", // Small screens
                            md: "6rem", // Medium screens
                            lg: "8rem", // Large screens
                            xl: "10rem", // Extra large screens
                        },
                    }}
                >
                    How it Works
                </SectionHeadingCentered>
            </div>
            <Grid
                container
                spacing={4}
                sx={{
                    width: "90%",
                    margin: "0 auto",
                    padding: "1rem",
                }}
            >
                {works.map((work, index) => (
                    <Grid
                        item
                        key={work.id}
                        xs={12}
                        sm={6}
                        lg={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <SingleWork
                            sx={{
                                width: "100%",
                                borderRadius: "24px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                backgroundColor: theme.palette.mode === "light" ? "#fefefe" : "#141414",
                                color: theme.palette.mode === "light" ? `#212121` : "#fff",
                                border: "1px solid #00000030",
                                flexGrow: 1,
                                opacity: 0,
                                animation: `slideInLTR 1s ease-in-out ${1.5 - 0.3 * index}s 1 forwards`,
                            }}
                            icon={work.icon}
                            title={work.title}
                            description={work.description}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
