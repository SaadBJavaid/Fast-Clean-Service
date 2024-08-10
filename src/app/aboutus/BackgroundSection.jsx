"use client";
import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, IconButton, Box } from "@mui/material";
import styles from "./BackgroundSection.module.css";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const textArray = [
  {
    heading: "Stunning result",
    description:
      "Steam cleaning for your car Fast Clean Service is the specialist in steam cleaning of cars.",
  },
  {
    heading: "Extra shine with waxing",
    description:
      "To maintain the shine of your car, we offer a package with extra wax layer.",
  },
  {
    heading: "Fresh fragrance with fragrance treatment",
    description:
      "After the steam cleaning and waxing, we can provide your car with a special odor treatment.",
  },
  // Add more text items as needed
];

const imageArray = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg"];

export default function BackgroundSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 7000); // Change text every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <Box className={styles.container}>
      <video autoPlay muted loop className={styles.backgroundVideo}>
        <source src="/fastclean.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box className={styles.overlay}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} className={styles.textContainer}>
              <Box className={styles.textSlider}>
                {textArray.map((text, index) => (
                  <Box
                    key={index}
                    className={`${styles.sliderItem} ${
                      currentTextIndex === index
                        ? styles.visible
                        : styles.hidden
                    }`}
                  >
                    <Typography variant="h4" className={styles.heading}>
                      {text.heading}
                    </Typography>
                    <Typography variant="h6" className={styles.description}>
                      {text.description}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid item xs={12} md={6} className={styles.imageContainer}>
              <img
                src={imageArray[currentImage]}
                alt="Main"
                className={styles.mainImage}
              />
              <Box className={styles.previewContainer}>
                {imageArray.map((imgSrc, index) => (
                  <IconButton
                    key={index}
                    onClick={() => handleImageChange(index)}
                    className={styles.previewButton}
                  >
                    <img
                      src={imgSrc}
                      alt={`Preview ${index}`}
                      className={styles.previewImage}
                    />
                  </IconButton>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
