import React from "react";
import { Typography } from "@mui/material";
import SingleWork from "./SingleWork";
import styles from "../howitwork/HowItWork.module.css";
import { Laptop } from "@mui/icons-material";

const works = [
  {
    id: 1,
    icon: "/howitworkicons/laptop.gif",
    title: "Choose your package",
    description:
      "Choose from one of our packs. This way we know exactly what we can do for you",
  },
  {
    id: 2,
    icon: "/howitworkicons/appointment.gif",
    title: "Make an appointment",
    description:
      "Fill in your details so that our retailers know exactly where they can make the car shine.",
  },
  {
    id: 3,
    icon: "/howitworkicons/mail.gif",
    title: "Confirmation",
    description:
      "After your reservation has been completed, you will receive a confirmation email.",
  },
  {
    id: 4,
    icon: "/howitworkicons/location.gif",
    title: "Cleaning",
    description:
      "The detailer is on the way with our great workbus to make your car shine!",
  },
];

export default function HowItWork() {
  return (
    <div className={styles.container}>
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
          How it works
        </Typography>
      </div>
      <div className={styles.grid}>
        {works.map((work) => (
          <SingleWork
            key={work.id}
            icon={work.icon}
            title={work.title}
            description={work.description}
          />
        ))}
      </div>
    </div>
  );
}
