"use client";
import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import { gsap } from "gsap";
import { useTheme } from "../../../contexts/themeContext";
import { HomeHeroContainer } from "../../mui/HomePkgs";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const AnimatedHomeContent = () => {
    const { theme } = useTheme();

    return (
        <HomeHeroContainer
            sx={{
                position: "relative",
                width: "100%",
                height: "100vh",
                backgroundImage: 'url("/homebg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                zIndex: "8",
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    left: '1rem',
                    bottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 1000,
                }}
            >
                <IconButton sx={{ color: 'white', fontSize: '12px' }}>
                    <FacebookIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{ color: 'white', fontSize: '12px' }}>
                    <InstagramIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{ color: 'white', fontSize: '12px' }}>
                    <TwitterIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{ color: 'white', fontSize: '12px' }}>
                    <YouTubeIcon fontSize="inherit" />
                </IconButton>

                <Box
                    sx={{
                        width: '2px',
                        height: '70px',
                        backgroundColor: 'white',
                    }}
                />
            </Box>

            <Typography
                className="animate"
                variant="h1"
                sx={{
                    marginTop: "-30rem",
                    letterSpacing: "8px",
                    fontWeight: 700,
                    marginBottom: "6rem",
                    fontFamily: "Unbounded",
                    fontSize: {
                        xs: "2rem",
                        sm: "3.5rem",
                        md: "4rem",
                        lg: "4.8rem",
                        xl: "4.8rem",
                    },
                    textAlign: "center",
                    color: "white",
                }}
            >
                FAST CLEAN SERVICE
            </Typography>

            <Typography
                sx={{
                    letterSpacing: "2px",
                    textAlign: "center",
                    fontFamily: "Unbounded",
                    fontSize: {
                        xs: "1.5rem",
                        sm: "2rem",
                        md: "3rem",
                        lg: "4rem",
                        xl: "4rem",
                    },
                    color: "white",
                    marginBottom: "3rem",
                }}
                variant="h2"
            >
                The number 1 in the field of specialist car cleaning!
            </Typography>

            <Box sx={{ display: 'flex', gap: "2rem", flexDirection: { xs: 'column', sm: 'row' }, marginBottom: "2rem" }}>
                <Button
                    variant="contained"
                    sx={{
                        padding: "1.5rem 3rem",
                        fontSize: "1.6rem",
                        fontWeight: "bold",
                        backgroundColor: theme.palette.primary.accent,
                        color: "white",
                        fontFamily: "DMSans",
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                        },
                    }}
                >
                    Book Now
                </Button>
            </Box>

            {/* Scroll Down Button */}
            <IconButton
                sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    padding: "1rem",
                    border: "1px solid white",
                    width: "40px",
                    height: "40px",
                }}
            >
                <ArrowDownwardIcon sx={{ fontSize: "2rem" }} />
            </IconButton>

        </HomeHeroContainer>
    );
};

export default AnimatedHomeContent;
