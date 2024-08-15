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
  ServicesTagline
} from "../../mui/HomePkgs";
import styles from "./CarService.module.css";


export default function CarService() {
  return (
    <HomeServicesBox sx={{ justifyContent: "space-between", padding: "0", width: "100%" }}>
      <Box className={styles.textContainer} sx={{ flexShrink: 1 }}>
        <ServiceSubheading variant="h2" special sx={{marginTop: "3rem"}}>
          FleetCare Pro
        </ServiceSubheading>
        <ServicesTagline className="focus">Expert Fleet Cleaning Anywhere, Anytime.</ServicesTagline>
        <ServicesDesc>
          <span>
            We bring the latest steam cleaning technology to your location, ensuring your vehicles are professionally cleaned and
            ready to go!
          </span>
        </ServicesDesc>

        <ul className={styles.list}>
          <li>Steam cleaning (washing)</li>
          <li>Wash windows</li>
          <li>Waxing</li>
          <li>Clean rims</li>
        </ul>

        <div className={styles.buttonContainer}>
          <ServicesBtn>Learn More</ServicesBtn>
          <ServicesBtn special>Book Now</ServicesBtn>
        </div>
      </Box>
      <ServicesImgContainer>
        <div className="content">
          <Image width={580} height={580} src="/g1.jpg" alt="Description" className={styles.image} />
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