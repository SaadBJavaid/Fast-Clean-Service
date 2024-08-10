// src/components/Stats.jsx
import React from "react";
import styles from "../../../app/Home.module.css";
import SingleStat from "./SingleStat";
import { Grid } from "@mui/material";

import { StatsContainer } from "../../mui/HomePkgs";
import Star from "../../AnimatedSvgs/Star";
import Bars from "../../AnimatedSvgs/Bars";
import Customer from "../../AnimatedSvgs/Customer";

const stats = [
  {
    id: 1,
    icon: Star, // Icon for rating
    header: "5",
    tagLine: "STARS ON TRUSTPILOT",
    type: "rating",
  },
  {
    id: 2,
    icon: Bars, // Icon for ranking
    header: "9",
    tagLine: "YEARS OF EXPERIENCE",
    type: "ranking",
  },
  {
    id: 3,
    icon: Customer, // Icon for customer count
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
