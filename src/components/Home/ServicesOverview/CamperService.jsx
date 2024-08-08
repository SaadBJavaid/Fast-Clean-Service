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
import styles from "./CamperService.module.css";

export default function CamperService() {
  return (
    <Container>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} className={styles.imageContainer}>
          <img src="/camper3.jpg" alt="Description" className={styles.image} />
        </Grid>
        <Grid item xs={12} md={6} className={styles.textContainer}>
          <Typography variant="h2" className={styles.heading}>
            Campers, Trucks, and Boats
          </Typography>
          <Typography variant="h5" className={styles.text}>
            Professional cleaning services for campers, trucks, and boats. Our
            team provides top-notch service with attention to detail.
          </Typography>

          <ul className={styles.list}>
            <li>Deep cleaning for campers</li>
            <li>Boat waxing</li>
            <li>Truck detailing</li>
            <li>Custom cleaning solutions</li>
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
      </Grid>
    </Container>
  );
}
