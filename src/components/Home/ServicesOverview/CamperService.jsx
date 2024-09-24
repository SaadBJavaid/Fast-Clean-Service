"use client";
import React from "react";
import Image from "next/image";
import {Box, useMediaQuery,} from "@mui/material";
import {
    HomeServicesBox,
    ServicesBtn,
    ServicesDesc,
    ServicesImgContainer,
    ServicesTagline,
    ServiceSubheading,
} from "../../mui/HomePkgs";
import styles from "./CamperService.module.css";

export default function CamperService() {
  const isBelow600px = useMediaQuery('(max-width: 600px)');

  return (
    <HomeServicesBox
      sx={{
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row-reverse" },
        padding: "0",
        width: "100%",
      }}
    >
      <Box
        className={styles.textContainer}
        sx={{ flexShrink: 1, margin: "1.7rem 0 0" }}
      >
        <ServiceSubheading variant="h2" className={styles.heading} special>
          Subscriptions
        </ServiceSubheading>
        <ServicesTagline className="focus">
          Experience premium care with our flexible subscription plans - your
          choice, your schedule!
        </ServicesTagline>
        <ServicesDesc
          variant="h5"
          className={styles.text}
          sx={{ marginBottom: "8rem" }}
        >
          Choose your plan and never worry about a dirty car again!
        </ServicesDesc>

        <ul className={styles.list}>
          <li>24 months</li>
          <li>Yearly</li>
          <li>Monthly plans</li>
        </ul>

        <div className={styles.buttonContainer}>
          <ServicesBtn>Learn More</ServicesBtn>
          <ServicesBtn special>Book Now</ServicesBtn>
        </div>
      </Box>
      {!isBelow600px && (
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
            width={580}
            height={580}
            src="/g4.jpg"
            alt="Description"
            style={{ origin: "bottom" }}
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
      </ServicesImgContainer> )}
    </HomeServicesBox>
  );
}
