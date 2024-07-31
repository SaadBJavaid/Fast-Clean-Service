import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import styles from "./CardComponent.module.css";

const CardComponent = ({ icon: Icon, title, description }) => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <SvgIcon component={Icon} className={styles.icon} />
        <Typography variant="h3" className={styles.title}>
          {title}
        </Typography>
        <Typography variant="h5" className={styles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;