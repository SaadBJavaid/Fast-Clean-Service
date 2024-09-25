import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SatisfactionBox = ({ text }) => {
    return (
        <Box
            sx={{
                position: "absolute", // Absolute positioning for placement
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#FFFFFF", // White background
                borderRadius: "1.2rem", // Border radius for the rounded corners
                padding: "1rem 2rem", // Padding for some spacing inside the box
                boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)", // Shadow effect
                maxWidth: "250px", // Adjust as per your need
                width: "100%",
                height: "4.5rem",
                zIndex: 10, // Ensures it stays above other elements
                transition: "all 0.3s ease", // Smooth hover effect
                "&:hover": {
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                },
            }}
        >
            <Typography
                sx={{
                    fontSize: "1.4rem",
                    fontWeight: 500,
                    color: "#000000", // Text color
                }}
            >
                {text}
            </Typography>

            <ArrowForwardIcon sx={{ fontSize: "1.8rem", color: "#000000" }} />
        </Box>
    );
};

export default SatisfactionBox;
