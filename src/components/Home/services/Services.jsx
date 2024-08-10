import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Home, Info, ContactMail, Build } from "@mui/icons-material"; // Example icons
import CardComponent from "./CardComponent";
import styles from "./CardComponent.module.css"; // Adjust path as necessary
import Location from "../../AnimatedSvgs/Location";
import Clock from "../../AnimatedSvgs/Clock";
import Tick from "../../AnimatedSvgs/Tick";
import Safe from "../../AnimatedSvgs/Safe";
import Appointment from "../../AnimatedSvgs/Appointment";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import ThreeDComponent from "./ThreeDComponent";

export default function Services() {
  return (
    <>
      <div className={styles.services}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "5rem !important",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            margin: "50px ", // Space above and below the title
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
                transform: "translateY(40px)", // Moves the element 20px down
              }}
            />
            <CardComponent
              icon={Clock}
              title="Time Saving"
              description="Top-quality mobile steam cleaning that saves you time."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon={Appointment}
              title="Open 7 Days a Week"
              description="Get in touch with us through various channels."
              sx={{
                transform: "translateY(40px)", // Moves the element 20px down
              }}
            />
          </div>

          <div className={styles.centerImageWrapper}>
            <ThreeDComponent modelUrl="/models/2024_mercedes-benz_eqs_580/scene.gltf" />
          </div>

          <div className={styles.bottomCards}>
            <CardComponent
              icon={Clock}
              title="Online Appointment"
              description="Just book the appoitment online and leave the rest to us."
              className={styles.large} // Add the class here
              sx={{
                transform: "translateY(-40px)", // Moves the element 20px down
              }}
            />
            <CardComponent
              icon={Tick}
              title="Environmentally Friendly"
              description="We use just 3 liters per car for great results."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon={Safe}
              title="Hygiene For the Interior"
              description="Find answers to frequently asked questions."
              sx={{
                transform: "translateY(-40px)", // Moves the element 20px down
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}




