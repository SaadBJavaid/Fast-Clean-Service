"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "../howitwork/HowItWork.module.css";

const SingleWork = ({ icon, title, description }) => {
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
    <Card
      ref={cardRef}
      className={`${styles.card} ${isVisible ? styles.visible : ""}`}
    >
      <CardContent className={styles.cardContent}>
        <img src={icon} alt={title} className={styles.icon} />

        <Typography
          sx={{ marginBottom: "10px" }}
          variant="h4"
          component="div"
          className={styles.title}
        >
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleWork;
