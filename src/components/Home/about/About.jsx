"use client";
import React, { useState } from "react";
import { HomeWrapper } from "../../mui/HomePkgs";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "./About.module.css";
import Image from "next/image";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const cardData = [
    { imgSrc: "/car1.jpg", text: "Cars" },
    { imgSrc: "/camper3.jpg", text: "Big Vehicle" },
    { imgSrc: "/bike.jpg", text: "Two Wheeler" },
  ];

  return (
    <HomeWrapper>
      <Typography
        sx={{
          fontSize: "5rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        About us
      </Typography>

      <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "2rem",
          wordSpacing: "1rem",
        }}
      >
        Fast Clean Service
      </Typography>

      <div className={styles.quoteWrapper}>
        <Typography className={styles.quoteText}>
          The number 1 in the field of specialist car cleaning
        </Typography>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src="/owner.png"
          alt="car_image"
          width={900}
          height={900}
        />
      </div>

      <div className={styles.cardContainer}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            className={`${styles.card} ${
              hoveredCard === index ? styles.cardHovered : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <CardMedia
              component="img"
              image={card.imgSrc}
              alt={`card_image_${index}`}
              className={styles.cardImage}
            />
            <CardContent className={styles.cardContent}>
              <Typography
                variant="h5"
                component="div"
                className={styles.cardText}
              >
                {card.text}
              </Typography>
              {hoveredCard === index && (
                <List className={styles.cardBullets}>
                  <ListItem>
                    <ListItemText primary="• Bullet 1" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Bullet 2" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="• Bullet 3" />
                  </ListItem>
                </List>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className={styles.textContainer}>
        {/* Text will be added here later */}
      </div>
    </HomeWrapper>
  );
}
