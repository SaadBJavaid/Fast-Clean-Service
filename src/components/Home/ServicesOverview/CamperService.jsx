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
import styles from "./CamperService.module.css";

export default function CamperService() {
  return (
    <HomeServicesBox
      sx={{
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        padding: "0",
      }}
    >
      <Box
        className={styles.textContainer}
        sx={{ flexShrink: 1, padding: "4rem 0 0" }}
      >
        <ServiceSubheading variant="h2" className={styles.heading}>
          Campers, Trucks, and Boats
        </ServiceSubheading>
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
      </Box>
      <ServicesImgContainer
        sx={{
          "& .content": {
            clipPath:
              "polygon(95% 0, 95% 70%, 100% 50%, 95% 30%, 95% 100%, 0 100%, 0 0)",

            "& img": {
              objectFit: "contain",
            },
          },
        }}
      >
        <div className="content">
          <Image
            width={500}
            height={500}
            src="/camper4.jpg"
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
