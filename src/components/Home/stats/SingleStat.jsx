"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../app/Home.module.css";
import { useTheme } from "../../../app/contexts/themeContext";

export default function SingleStat({ data }) {
  const { icon: Icon, header, tagLine, type } = data; // Destructure 'icon' here
  const [count, setCount] = useState(0);
  const statRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animation logic
          const value = parseInt(header, 10); // Convert header to number
          const duration = 2000; // Total animation duration in milliseconds
          const stepTime = 100; // Time between updates
          const steps = Math.ceil(duration / stepTime);
          const increment = value / steps;

          const animate = () => {
            let start = 0;
            const interval = setInterval(() => {
              start += increment;
              if (start >= value) {
                setCount(value);
                clearInterval(interval);
              } else {
                setCount(Math.ceil(start));
              }
            }, stepTime);
          };

          if (type === "ranking") {
            setCount(1); // Start from 1
            animate();
          } else if (type === "customer") {
            setCount(1300); // Start from 1300
            animate();
          } else if (type === "rating") {
            setCount(value); // Static value
            // No animation needed
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [header, type, hasAnimated]);

  return (
    <div ref={statRef}>
      <Card
        className={styles.card}
        sx={{
          background:
            theme.palette.mode === "light"
              ? `linear-gradient(135deg, #fefefe, #fdfdff)`
              : `linear-gradient(135deg, ${theme.palette.secondary.main2}, ${theme.palette.secondary.main2})`,
          color: theme.palette.mode === "light" ? `#212121` : "#fff",
          boxShadow: `0px 0px 30px 1px ${
            theme.palette.mode === "light"
              ? "rgba(115, 115, 115, 0.2)"
              : "transparent"
          }`,
          border: "1px solid #ffffff80",
        }}
      >
        <CardContent className={styles.cardContent}>
          {/* Display GIF above header */}
          <div className={styles.iconWrapper}>
            <Icon />
          </div>
          <Typography variant="h3" component="div" className={styles.header}>
            {count}
            {type !== "rating" && "+"}
            {type === "rating" && "/5"}
          </Typography>
          <Typography variant="h4" className={styles.tagLine}>
            {tagLine}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
