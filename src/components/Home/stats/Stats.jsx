"use client";
import React from "react";
import styles from "../../../app/Home.module.css";
import SingleStat from "./SingleStat";
import {Box, Grid, useMediaQuery} from "@mui/material";
import {HomePkgsInBox, StatsContainer} from "../../mui/HomePkgs";
import Star from "../../AnimatedSvgs/Star";
import Bars from "../../AnimatedSvgs/Bars";
import Customer from "../../AnimatedSvgs/Customer";

const stats = [
    {
        id: 1,
        icon: Star, // Icon for rating
        header: "4.8",
        tagLine: "Stars on Trustpilot",
        type: "rating",
    },
    {
        id: 2,
        icon: Bars, // Icon for ranking
        header: "4",
        tagLine: "Years of Experience",
        type: "ranking",
    },
    {
        id: 3,
        icon: Customer, // Icon for customer count
        header: "1500",
        tagLine: "Happy Clients",
        type: "customer",
    },
];

export default function Stats() {
    //const isMediumScreen = useMediaQuery("(min-width: 600px) and (max-width: 900px)");
    const isSmallScreen = useMediaQuery("(max-width: 900px)");

    return (
        <StatsContainer className={styles.stats}>
            <HomePkgsInBox sx={{ margin: "0 auto", alignItems: "center" }}>
                {isSmallScreen ? (
                    // For screen sizes between 600px and 900px
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginBottom: "1rem" }}>
                            <Box sx={{ flex: 1, textAlign: "center", marginRight: "0.5rem" }}>
                                <SingleStat data={stats[0]} />
                            </Box>
                            <Box sx={{ flex: 1, textAlign: "center", marginLeft: "0.5rem" }}>
                                <SingleStat data={stats[1]} />
                            </Box>
                        </Box>
                        <Box sx={{ textAlign: "center", width: "100%" }}>
                            <SingleStat data={stats[2]} />
                        </Box>
                    </Box>
                ) : (
                    // Default layout for larger screens
                    <Grid container spacing={10} sx={{ marginTop: "4rem" }}>
                        {stats.map((stat) => (
                            <Grid item xs={12} sm={6} md={4} key={stat.id}>
                                <SingleStat data={stat} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </HomePkgsInBox>
        </StatsContainer>
    );
}
