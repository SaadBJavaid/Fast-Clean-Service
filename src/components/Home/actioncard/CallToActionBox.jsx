import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";

const CallToActionBox = () => {
    const { theme } = useTheme();

    return (
        <Box
            sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "10.2rem",
                padding: "0 2rem",
                marginTop: "12.6rem",
            }}
        >
            {/* Flipped Image with cutS.png above the box */}
            <Box
                component="img"
                src="/cutS.png" // Ensure this path points to the correct image location
                alt="Decorative Image"
                sx={{
                    position: "absolute",
                    left: "12.8rem",
                    top: "-10.2rem", // Moves the image above the card
                    width: "38.8rem",
                    height: "4.1rem",
                    transform: "rotate(180deg)", // Flips the image
                    zIndex: 1, // Ensures it is above the card
                }}
            />

            {/* Main Content Box */}
            <Box
                sx={{
                    maxWidth: "135.5rem",
                    width: "100%",
                    backgroundColor: "#000000",
                    borderRadius: "4.2rem",
                    padding: "5rem",
                    boxShadow: "0px 5px 7.6px rgba(0, 0, 0, 0.22)",
                    textAlign: "center",
                    position: "relative", // Ensure the content remains below the image
                    zIndex: 2,
                }}
            >
                <Typography
                    sx={{
                        fontSize: "4rem",
                        fontWeight: 500,
                        marginBottom: "3rem",
                        color: "white",
                    }}
                >
                    Ready for a Sparkling Clean Ride?
                </Typography>

                <Typography
                    sx={{
                        fontSize: "1.6rem",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        marginBottom: "3rem",
                    }}
                >
                    Experience the best in professional car care today. Whether you’re at home, at work, or on the go, we’ll bring our expertise to you! Don’t wait – your car deserves the best.
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2rem",
                        flexDirection: { xs: "column", sm: "row" },
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            padding: "1.5rem 3rem",
                            fontSize: "1.6rem",
                            fontWeight: "bold",
                            backgroundColor: "#0085FF",
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
            </Box>
        </Box>
    );
};

export default CallToActionBox;
