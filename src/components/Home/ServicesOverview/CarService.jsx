"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/material";
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
import styles from "./CarService.module.css";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import ServiceDrawer from "../../ServiceDrawer/ServiceDrawer";
import { FormProvider } from "../../../contexts/MultiStepFormContext";

export default function CarService() {
  const { theme } = useTheme();
  const isBelow600px = useMediaQuery("(max-width: 600px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
      <>
        <HomeServicesBox
            sx={{ justifyContent: "space-between", padding: "0", width: "100%" }}
        >
          <Box
              className={styles.textContainer}
              sx={{ flexShrink: { xs: 0, md: 1 } }}
          >
            <ServiceSubheading variant="h2" special sx={{ marginTop: "3rem" }}>
              FleetCare Pro
            </ServiceSubheading>
            <ServicesTagline className="focus">
              Expert Fleet Cleaning Anywhere, Anytime.
            </ServicesTagline>
            <ServicesDesc>
            <span>
              We bring the latest steam cleaning technology to your location,
              ensuring your vehicles are professionally cleaned and ready to go!
            </span>
            </ServicesDesc>

            <ul
                style={{ "--color": theme.palette.primary.contrastText }}
                className={styles.list}
            >
              <li>Steam cleaning (washing)</li>
              <li>Wash windows</li>
              <li>Waxing</li>
              <li>Clean rims</li>
            </ul>

            <div className={styles.buttonContainer}>
              <ServicesBtn>Learn More</ServicesBtn>
              <ServicesBtn special onClick={handleDrawerToggle}>
                Book Now
              </ServicesBtn>
            </div>
          </Box>
          {!isBelow600px && (
              <ServicesImgContainer>
                <div className="content">
                  <Image
                      width={580}
                      height={580}
                      src="/g1.jpg"
                      alt="Description"
                      className={styles.image}
                  />
                </div>
              </ServicesImgContainer>
          )}
        </HomeServicesBox>

        <FormProvider>
          <ServiceDrawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} />
        </FormProvider>
      </>
  );
}
