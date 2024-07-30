import React from "react";
import { Typography } from "@mui/material";
import styles from "./Packages.module.css";
import Slider3D from "./Slider3D";

export default function Packages() {
  return (
    <>
      <div className={styles.packages}>
        <Typography
          variant="h2"
          sx={{ alignItems: "center", textAlign: "center", fontWeight: "bold" }}
        >
          Our Packages
        </Typography>
      </div>

      <Slider3D />
    </>
  );
}
