"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import styles from "./CardComponent.module.css";
import { useTheme } from "../../../contexts/themeContext";
import { useMediaQuery } from "@mui/material";

const CardComponent = ({ icon: Icon, title, description, sx }) => {
    const { theme } = useTheme();
    const isBelow900px = useMediaQuery("(max-width: 900px)");

    return (
        <Card
            className={styles.card}
            sx={{
                "--border":
                    theme.palette.mode === "dark"
                        ? "1px solid rgba(255, 255, 255, 0.45)"
                        : "1px solid rgba(123, 123, 123, 0.29)",
                margin: "0 2rem",  // Reduced space between cards
                maxWidth: "90%",  // Limit max width to 90%
                width: "100%",
                borderRadius: "16px",
                border: "var(--border)",
                overflow: "hidden",
                backdropFilter: "blur(11px)",
                boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(190, 190, 190, 0.3)",
                ...sx,
            }}
        >
            <CardContent className={styles.cardContent}>
                <div
                    className={styles.iconWrapper}
                    style={{
                        fontSize: isBelow900px ? "2rem" : "3rem",  // Adjust icon size
                    }}
                >
                    <Icon />
                </div>
                <Typography
                    sx={{
                        margin: "1px 0 8px",
                        fontWeight: "700",
                        fontSize: isBelow900px ? "2rem" : "2.5rem",  // Responsive font size
                        fontFamily: "JakartaSans",
                    }}
                    variant="h4"
                    className={styles.title}
                >
                    {title}
                </Typography>
                {!isBelow900px && ( // Hide description on small screens
                    <Typography
                        sx={{ wordSpacing: "1px", fontFamily: "BDSansBold" }}
                        variant="h5"
                        className={styles.description}
                    >
                        {description}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default CardComponent;
