import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import styles from "./CardComponent.module.css";

const CardComponent = ({ icon: Icon, title, description }) => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Icon />
        <Typography
          sx={{ marginTop: "7px" }}
          variant="h4"
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography
          sx={{ marginTop: "7px" }}
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
