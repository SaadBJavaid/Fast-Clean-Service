"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "../howitwork/HowItWork.module.css";
import Image from "next/image";
import { ServicesDesc } from "../../mui/HomePkgs";

const SingleWork = ({ icon, title, description, sx = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation starts
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card sx={sx} ref={cardRef} className={`${styles.card} ${isVisible ? styles.visible : ""}`}>
      <CardContent className={styles.cardContent}>
        <Image width={500} height={500} src={icon} alt={title} className={styles.icon} />

        <ServicesDesc sx={{ marginBottom: "10px" }} variant="h4" component="div" className={styles.title}>
          {title}
        </ServicesDesc>
        <Typography variant="h5" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleWork;
