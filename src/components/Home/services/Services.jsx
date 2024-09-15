"use client";
import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Home, Info, ContactMail, Build } from "@mui/icons-material";
import CardComponent from "./CardComponent";
import styles from "./CardComponent.module.css";
import Location from "../../AnimatedSvgs/Location";
import Clock from "../../AnimatedSvgs/Clock";
import Tick from "../../AnimatedSvgs/Tick";
import Safe from "../../AnimatedSvgs/Safe";
import Appointment from "../../AnimatedSvgs/Appointment";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import ThreeDComponent from "./ThreeDComponent";
import { HomePkgBox } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";

export default function Services() {
  const { theme } = useTheme();

  return (
    <HomePkgBox bg={"/Fast-clean-service-besel-wagens.webp"}>
      <div className={styles.services}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "5rem !important",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            margin: "50px ",
          }}
        >
          <HeadingLinesAnimation text="Why Choose Us" />
        </Typography>
      </div>
      <div className={styles.container}>
        <div className={styles.cardGroup}>
          <div className={styles.topCards}>
            <CardComponent
              icon={Location}
              title="At your Location"
              description="Our experienced professionals come to you with our own material."
              sx={{
                backgroundColor:
                  theme.palette.mode === "light" ? "#eeedeb" : "#141414",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
                transform: "translateY(40px)", // Moves the element 20px down
              }}
            />
            <CardComponent
              icon={Clock}
              title="Time Saving"
              description="Top-quality mobile steam cleaning that saves you time."
              className={styles.large} // Add the class here
              sx={{
                backgroundColor:
                  theme.palette.mode === "light" ? "#eeedeb" : "#141414",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
              }}
            />
            <CardComponent
              icon={Appointment}
              title="Open 7 Days a Week"
              description="Get in touch with us through various channels."
              sx={{
                transform: "translateY(40px)",
                backgroundColor:
                  theme.palette.mode === "light" ? "#eeedeb" : "#141414",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
              }}
            />
          </div>

            <div className={styles.centerImageWrapper}>
            <ThreeDComponent modelUrl="/models/bmw_m5_cs/untitled5.gltf" />
          </div>

          <div className={styles.bottomCards}>
            <CardComponent
              icon={Clock}
              title="Online Appointment"
              description="Just book the appoitment online and leave the rest to us."
              className={styles.large} // Add the class here
              sx={{
                transform: "translateY(-40px)", // Moves the element 20px down
                backgroundColor:
                  theme.palette.mode === "light" ? "#eeedeb" : "#141414",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
              }}
            />
            <CardComponent
              icon={Tick}
              title="Environmentally Friendly"
              description="We use just 3 liters per car for great results."
              className={styles.large} // Add the class here
              sx={{
                backgroundColor:
                  theme.palette.mode === "light" ? "#eeedeb" : "#141414",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
              }}
            />
            <CardComponent
              icon={Safe}
              title="Hygiene For the Interior"
              description="Find answers to frequently asked questions."
              sx={{
                transform: "translateY(-40px)", // Moves the element 20px down
                backgroundColor:
                  theme.palette.mode === "light" ? "#eeedeb" : "#141414",
                color: theme.palette.mode === "light" ? `#212121` : "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </HomePkgBox>
  );
}
