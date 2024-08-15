import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SvgIcon } from "@mui/material";
import styles from "./CardComponent.module.css";

const CardComponent = ({ icon: Icon, title, description, sx }) => {
  return (
    <Card className={styles.card} sx={sx}>
      <CardContent className={styles.cardContent}>
        <div className={styles.iconWrapper}>
          <Icon />
        </div>
        <Typography
          sx={{
            margin: "16px 0 8px",
            fontWeight: "700",
            fontSize: "2.5rem",
            fontFamily: "JakartaSans",
          }}
          variant="h4"
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography sx={{ wordSpacing: "1px", fontFamily: "BDSansBold" }} variant="h5" className={styles.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
