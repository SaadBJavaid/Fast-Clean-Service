"use client";
import React, {useEffect, useState} from "react";
import {Box, Container, Grid, IconButton, Typography} from "@mui/material";
import styles from "./BackgroundSection.module.css";
import Image from "next/image";

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
];

const imageArray = ["/g1.jpg", "/g2.jpg", "/g3.jpg", "/g4.jpg", "/g5.jpg"];

export default function BackgroundSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle image changes
  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  // Track screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
    };

    // Set initial value and add event listener
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <Box className={styles.container}>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src="/fs.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Box className={styles.overlay}>
          <Container>
            {isMobileView ? (
                // Column layout for mobile view
                <Box className={styles.columnLayout}>
                  <Box className={styles.textContainer}>
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

                  <Box className={styles.imageContainer}>
                    <Image
                        width={500}
                        height={500}
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
                            <Image
                                width={500}
                                height={500}
                                src={imgSrc}
                                alt={`Preview ${index}`}
                                className={styles.previewImage}
                            />
                          </IconButton>
                      ))}
                    </Box>
                  </Box>
                </Box>
            ) : (
                // Grid layout for desktop view
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
                    <Image
                        width={500}
                        height={500}
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
                            <Image
                                width={500}
                                height={500}
                                src={imgSrc}
                                alt={`Preview ${index}`}
                                className={styles.previewImage}
                            />
                          </IconButton>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
            )}
          </Container>
        </Box>
      </Box>
  );
}
