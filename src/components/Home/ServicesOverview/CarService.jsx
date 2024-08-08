import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "./CarService.module.css";

export default function CarService() {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} className={styles.textContainer}>
          <Typography variant="h2" className={styles.heading}>
            Auto Service
          </Typography>
          <Typography variant="h5" className={styles.text}>
            Looking for a professional car exterior cleaning? Fast Clean Service
            cleans your means of transport with steam and craftsmanship.
          </Typography>

          <ul className={styles.list}>
            <li>Steam cleaning (washing)</li>
            <li>Wash windows</li>
            <li>Waxing</li>
            <li>Clean rims</li>
          </ul>

          <div className={styles.buttonContainer}>
            <Button
              sx={{
                padding: "15px",
                backgroundColor: "#80AECE",
                fontSize: "1.5rem",
                color: "black",
                fontWeight: "bold",
                borderRadius: "20px",
              }}
            >
              Learn More
            </Button>
            <Button
              sx={{
                padding: "15px",
                backgroundColor: "#80AECE",
                fontSize: "1.5rem",
                color: "black",
                fontWeight: "bold",
                borderRadius: "20px",
              }}
            >
              Book Now
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={styles.imageContainer}>
          <img src="/g1.jpg" alt="Description" className={styles.image} />
        </Grid>
      </Grid>
    </Container>
  );
}
