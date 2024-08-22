// src/components/Stats.jsx
import React from "react";
import styles from "../../../app/Home.module.css";
import SingleStat from "./SingleStat";
import { Grid } from "@mui/material";

import { HomePkgsInBox, StatsContainer } from "../../mui/HomePkgs";
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
  return (
    <StatsContainer className={styles.stats}>
      <HomePkgsInBox sx={{ margin: "0 auto" }}>
        <Grid container spacing={10} sx={{ marginTop: "4rem" }}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={4} key={stat.id}>
              <SingleStat data={stat} />
            </Grid>
          ))}
        </Grid>
      </HomePkgsInBox>
    </StatsContainer>
  );
}
