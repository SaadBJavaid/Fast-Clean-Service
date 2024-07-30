import React from "react";
import { Typography } from "@mui/material";
import SingleWork from "./SingleWork";
import styles from "../howitwork/HowItWork.module.css";
import { Laptop } from "@mui/icons-material";

const works = [
  {
    id: 1,
    icon: Laptop,
    title: "First Work",
    description: "This is the first description of how it works",
  },
  {
    id: 2,
    icon: Laptop,
    title: "Second Work",
    description: "This is the second description of how it works",
  },
  {
    id: 3,
    icon: Laptop,
    title: "Third Work",
    description: "This is the third description of how it works",
  },
  {
    id: 4,
    icon: Laptop,
    title: "Fourth Work",
    description: "This is the fourth description of how it works",
  },
];

export default function HowItWork() {
  return (
    <div className={styles.container}>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "30px" }}
      >
        How It Works
      </Typography>
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
