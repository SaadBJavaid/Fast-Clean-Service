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
  ServicesTagline,
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
      <Box className={styles.textContainer} sx={{ flexShrink: 1, margin: "1.7rem 0 0" }}>
        <ServiceSubheading variant="h2" className={styles.heading} special>
          Subscriptions
        </ServiceSubheading>
        <ServicesTagline className="focus">
          Experience premium care with our flexible subscription plans - your choice, your schedule!
        </ServicesTagline>
        <ServicesDesc variant="h5" className={styles.text}>
          Professional cleaning services for campers, trucks, and boats. Our team provides top-notch service with attention to
          detail.
        </ServicesDesc>

        <ul className={styles.list}>
          <li>Interior Cleaning</li>
          <li>Exterior Cleaning</li>
          <li>Interior + Exterior</li>
        </ul>

        <div className={styles.buttonContainer}>
          <ServicesBtn>Learn More</ServicesBtn>
          <ServicesBtn special>Book Now</ServicesBtn>
        </div>
      </Box>
      <ServicesImgContainer
        sx={{
          "& .content": {
            clipPath: "polygon(95% 0, 95% 70%, 100% 50%, 95% 30%, 95% 100%, 0 100%, 0 0)",

            "& img": {
              objectFit: "contain",
            },
          },
        }}
      >
        <div className="content">
          <Image width={580} height={580} src="/camper4.jpg" alt="Description" className={styles.image} />
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
