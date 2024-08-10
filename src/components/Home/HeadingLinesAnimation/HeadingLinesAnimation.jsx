import React from "react";
import styles from "./HeadingLinesAnimation.module.css";

export default function HeadingLinesAnimation({ text }) {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.lineAbove}></div>
      <h2 className={styles.heading}>{text}</h2>
      <div className={styles.lineBelow}></div>
    </div>
  );
}
