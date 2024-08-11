import React from "react";
import styles from "./HeadingLinesAnimation.module.css";
import { Typography } from "@mui/material";
import { SectionHeading } from "../../mui/HomePkgs";

export default function HeadingLinesAnimation({ text }) {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.lineAbove}></div>
      <SectionHeading sx={{ animation: "none" }} className={styles.heading}>
        {text}
      </SectionHeading>
      <div className={styles.lineBelow}></div>
    </div>
  );
}
