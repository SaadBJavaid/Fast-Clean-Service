import React from "react";
import Image from "next/image";
import {
  Container,
  Grid,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import {
  HomePkgsBox,
  HomePkgsInBox,
  ServicesImgContainer,
  HomeServicesBox,
  ServiceSubheading,
} from "../../mui/HomePkgs";
import styles from "./CarService.module.css";

export default function CarService() {
  return (
    <HomeServicesBox sx={{ justifyContent: "space-between", padding: "0" }}>
      <Box
        className={styles.textContainer}
        sx={{ flexShrink: 1, padding: "4rem 0 0" }}
      >
        <ServiceSubheading variant="h2">FleetCare Pro</ServiceSubheading>
        <Typography className={styles.text}>
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
      </Box>
      <ServicesImgContainer>
        <div className="content">
          <Image
            width={500}
            height={500}
            src="/g1.jpg"
            alt="Description"
            className={styles.image}
          />
          {/* <svg
            width="100%"
            height="100%"
            viewBox="0 0 15 100"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="" />
          </svg> */}
        </div>
      </ServicesImgContainer>
    </HomeServicesBox>
  );
}
