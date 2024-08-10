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
              title="At your Loaction"
              description="Our experienced professionals come to you with our own material."
            />
            <CardComponent
              icon={Clock}
              title="TIME SAVING"
              description="Top-quality mobile steam cleaning that saves you time."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon={Appointment}
              title="Open 7 Days a Week"
              description="Get in touch with us through various channels."
            />
          </div>

          <div className={styles.centerImageWrapper}>
            <Image
              src="/gwagon.png"
              alt="Center"
              className={styles.centerImage}
              width={300}
              height={200} // Adjust dimensions if needed
            />
          </div>

          <div className={styles.bottomCards}>
            <CardComponent
              icon={Clock}
              title="Online Appointment"
              description="Just book the appoitment online and leave the rest to us."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon={Tick}
              title="ENVIRONMENTALLY FRIENDLY"
              description="We use just 3 liters per car for great results."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon={Safe}
              title="HYGIENE FOR THE INTERIOR"
              description="Find answers to frequently asked questions."
            />
          </div>
        </div>
      </div>
    </>
  );
}
