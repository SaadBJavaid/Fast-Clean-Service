"use client";
import React from "react";
import { Box, Typography, Grid, useTheme, styled } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
    maxWidth: "98rem",
    margin: "0 auto",
    padding: "2rem",
}));

const ServiceCard = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5rem",
    borderRadius: "10px",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#141414",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(14.4px)",
    border: "0.3px solid rgba(0, 0, 0, 0.12)",
    width: "100%",
    height: "100%",
    transition: "all 0.3s ease",
    "&:hover": {
        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
    },
}));

const ServiceIcon = styled("img")({
    width: "90px",
    height: "90px",
    marginBottom: "1.5rem",
});

const services = [
    {
        icon: "/approved.svg",
        title: "Full Detailing",
        description: "Comprehensive cleaning and restoration",
    },
    {
        icon: "/sheild.svg",
        title: "Paint Sealant",
        description: "Long-lasting paint protection",
    },
    {
        icon: "/roller.svg",
        title: "Glass Coating",
        description: "Advanced hydrophobic treatment",
    },
    {
        icon: "/brush.svg",
        title: "Ceramic Coating",
        description: "Ultimate shine and protection",
    },
];

export default function CompServices() {
    const theme = useTheme();

    return (
        <Container>
            <Grid
                container
                spacing={4}
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "1fr 1fr",
                    },
                    gap: "2rem",
                }}
            >
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <ServiceCard>
                            <ServiceIcon src={service.icon} alt={service.title} />
                            <Typography
                                sx={{
                                    fontSize: "1.8rem",
                                    fontWeight: 400,
                                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                                    marginBottom: "1rem",
                                }}
                            >
                                {service.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: "1.4rem",
                                    fontWeight: 300,
                                    color: theme.palette.mode === "light" ? "#000" : "#fff",
                                    textAlign: "center",
                                }}
                            >
                                {service.description}
                            </Typography>
                        </ServiceCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
