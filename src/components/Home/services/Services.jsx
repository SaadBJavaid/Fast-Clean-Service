import React from "react";

import { Typography } from "@mui/material";
import styles from "../services/CardComponent.module.css";
import Image from "next/image";
import { Home, Info, ContactMail, Build } from "@mui/icons-material"; // Example icons
import CardComponent from "./CardComponent";

export default function Services() {
  return (
    <>
      <div className={styles.services}>
        <Typography
          variant="h2"
          sx={{ alignItems: "center", textAlign: "center", fontWeight: "bold" }}
        >
          Services
        </Typography>
      </div>

      <div className={styles.container}>
        <div className={styles.cardGroup}>
          <div className={styles.leftCards}>
            <CardComponent
              icon={Home}
              title="Home"
              description="Find out more about our services."
            />
            <CardComponent
              icon={Info}
              title="About Us"
              description="Learn more about our company and team."
            />
            <CardComponent
              icon={ContactMail}
              title="Contact"
              description="Get in touch with us through various channels."
            />
          </div>

          <div className={styles.centerImageWrapper}>
            <img
              src="/gwagon.png"
              alt="Center"
              className={styles.centerImage}
            />
          </div>

          <div className={styles.rightCards}>
            <CardComponent
              icon={Build}
              title="Services"
              description="Explore the range of services we offer."
            />
            <CardComponent
              icon={Home}
              title="Products"
              description="Browse through our product catalog."
            />
            <CardComponent
              icon={Info}
              title="FAQs"
              description="Find answers to frequently asked questions."
            />
          </div>
        </div>
      </div>
    </>
  );
}
