"use client";
import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import styles from "./CardComponent.module.css";
import { useTheme } from "../../../app/contexts/themeContext";

const CardComponent = ({ icon: Icon, title, description, sx }) => {
  const { theme } = useTheme();
  return (
    <Card
      className={styles.card}
      sx={{
        "--border":
          theme.palette.mode === "dark"
            ? "1px solid rgba(255, 255, 255, 0.45)"
            : "1px solid rgba(123, 123, 123, 0.29)",
        margin: "0 3rem",
        maxWidth: "350px",
        width: "100%",
        borderRadius: "16px",
        border: "var(--border)",
        overflow: "hidden",
        backdropFilter: "blur(11px)",
        boxShadow: "0 0 6px 2px rgba(0, 0, 0, 0.1)",

        backgroundColor: "rgba(190, 190, 190, 0.3)",
      }}
    >
      <CardContent className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        <Typography
          sx={{
            margin: "1px 0 8px",
            fontWeight: "700",
            fontSize: "2.5rem",
            fontFamily: "JakartaSans",
          }}
          variant="h4"
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          sx={{ wordSpacing: "1px", fontFamily: "BDSansBold" }}
          variant="h5"
          className={styles.description}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
