"use client";
import styles from "./CTA.module.css";
import { useTheme } from "../../../app/contexts/themeContext";

const CTA = ({ scrolled }) => {
  const { theme } = useTheme();

  return (
    <div className={styles.ctaContainer}>
      <div
        className={styles.ctaButton}
        style={{
          backgroundColor: theme.palette.primary.accent,
          bottom: scrolled ? "120px" : "160px",
          right: scrolled ? "10px" : "62px",
        }}
      ></div>
      <p
        className={styles.name}
        style={{
          bottom: scrolled ? "40px" : "60px",
          right: scrolled ? "10px" : "40px",
        }}
      >
        BOOK NOW
      </p>
    </div>
  );
};

export default CTA;
