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
  ServicesDesc,
  ServicesBtn,
} from "../../mui/HomePkgs";
import styles from "./CamperService.module.css";

export default function CamperService() {
  return (
    <HomeServicesBox
      sx={{
        justifyContent: "space-between",
        flexDirection: "row-reverse",
        padding: "0",
        width: "100%",
      }}
    >
      <Box className={styles.textContainer} sx={{ flexShrink: 1 }}>
        <ServiceSubheading variant="h2" className={styles.heading}>
          Campers, Trucks, and Boats
        </ServiceSubheading>
        <ServicesDesc variant="h5" className={styles.text}>
          Professional cleaning services for campers, trucks, and boats. Our
          team provides top-notch service with attention to detail.
        </ServicesDesc>

        <ul className={styles.list}>
          <li>Deep cleaning for campers</li>
          <li>Boat waxing</li>
          <li>Truck detailing</li>
          <li>Custom cleaning solutions</li>
        </ul>

        <div className={styles.buttonContainer}>
          <ServicesBtn>Learn More</ServicesBtn>
          <ServicesBtn>Book Now</ServicesBtn>
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
