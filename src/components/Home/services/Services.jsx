import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import { Home, Info, ContactMail, Build } from "@mui/icons-material"; // Example icons
import CardComponent from "./CardComponent";
import styles from "./CardComponent.module.css"; // Adjust path as necessary

export default function Services() {
  return (
    <>
      <div className={styles.services}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "6rem !important",
            alignItems: "center",
            textAlign: "center",
            fontWeight: "bold",
            margin: "30px ", // Space above and below the title
          }}
        >
          Services
        </Typography>
      </div>

      <div className={styles.container}>
        <div className={styles.cardGroup}>
          <div className={styles.topCards}>
            <CardComponent
              icon="/servicesicons/location.gif"
              title="Home"
              description="Find out more about our services."
            />
            <CardComponent
              icon="/servicesicons/location.gif"
              title="About Us"
              description="Learn more about our company and team."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon="/servicesicons/appointment.gif"
              title="Contact"
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
              icon="/servicesicons/clock.gif"
              title="Services"
              description="Explore the range of services we offer."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon="/servicesicons/safe.gif"
              title="Products"
              description="Browse through our product catalog."
              className={styles.large} // Add the class here
            />
            <CardComponent
              icon="/servicesicons/safering.gif"
              title="FAQs"
              description="Find answers to frequently asked questions."
            />
          </div>
        </div>
      </div>
    </>
  );
}
