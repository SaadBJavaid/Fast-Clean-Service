"use client";
import React, { useEffect, useRef, useState } from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../../../app/contexts/themeContext";
import { HomeHeroContainer } from "../../mui/HomePkgs"; // No need for HeroVideoContainer now
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const AnimatedHomeContent = () => {
    const { theme } = useTheme();

    useGSAP(() => {
        gsap.fromTo(".animate", { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 2, stagger: 0.2 });
    }, []);

    const typographyRef = useRef(null);
    const tlRef = useRef(null);
    const [currentText, setCurrentText] = useState("");

    const lines = [
        "Your clean card is our calling card!",
        "The number 1 in the field of specialist car cleaning!",
        "We come on location.",
    ];

    useEffect(() => {
        const container = typographyRef.current;

        tlRef.current = gsap.timeline({ repeat: -1 });

        lines.forEach((line, index) => {
            tlRef.current
                .to(container, {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.inOut",
                    onComplete: () => setCurrentText(line),
                })
                .to(container, {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.inOut",
                })
                .to({}, { duration: 3 });
        });

        setCurrentText(lines[0]);
        gsap.set(container, { opacity: 1 });

        return () => {
            if (tlRef.current) tlRef.current.kill();
        };
    }, []);

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

                <Box
                    sx={{
                        width: '2px',
                        height: '50px',
                        backgroundColor: 'white',
                        marginTop: '-3rem',
                    }}
                />
            </Box>

            <Typography
                className="animate"
                variant="h1"
                sx={{
                    letterSpacing: "8px",
                    fontWeight: 700,
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

            {/* Rotating Text */}
            <div ref={typographyRef}>
                <Typography
                    className="animate"
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
                    }}
                    variant="h2"
                >
                    {currentText}
                </Typography>
            </div>

            {/* Call to Action Button */}
            <Box sx={{ display: 'flex', gap: "2rem", flexDirection: { xs: 'column', sm: 'row' }, marginBottom: "2rem", marginTop: "2rem" }}>
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

            {/* Scroll Down Icon */}
            <IconButton
                sx={{
                    backgroundColor: "transparent",
                    color: "white",
                    padding: "1rem",
                    border: "1px solid white",
                }}
            >
                <KeyboardArrowDownIcon sx={{ fontSize: "2.5rem" }} />
            </IconButton>

        </HomeHeroContainer>
    );
};

export default AnimatedHomeContent;
