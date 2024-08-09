// src/components/Stats.jsx
import React from "react";
import styles from "../../../app/Home.module.css";
import SingleStat from "./SingleStat";
import { Grid } from "@mui/material";
import { Star, TrendingUp, Group } from "@mui/icons-material"; // Import icons
import { StatsContainer } from "../../mui/HomePkgs";

const stats = [
  {
    id: 1,
    icon: "/star.gif", // Icon for rating
    header: "5",
    tagLine: "STARS ON TRUSTPILOT",
    type: "rating",
  },
  {
    id: 2,
    icon: "/bar.gif", // Icon for ranking
    header: "9",
    tagLine: "YEARS OF EXPERIENCE",
    type: "ranking",
  },
  {
    id: 3,
    icon: "/customer.gif", // Icon for customer count
    header: "2000",
    tagLine: "HAPPY CLIENTS",
    type: "customer",
  },
];

export default function Stats() {
  return (
    <StatsContainer className={styles.stats}>
      <Grid container spacing={2}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={4} key={stat.id}>
            <SingleStat data={stat} />
          </Grid>
        ))}
      </Grid>
    </StatsContainer>
  );
}
