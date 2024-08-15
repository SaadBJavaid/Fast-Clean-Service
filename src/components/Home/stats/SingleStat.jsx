"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import styles from "../../../app/Home.module.css";
import { useTheme } from "../../../app/contexts/themeContext";

export default function SingleStat({ data }) {
  const { icon: Icon, header, tagLine, type } = data; // Destructure 'icon' here
  const [count, setCount] = useState(0.0);
  const statRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animation logic
          const value = parseFloat(header, 10); // Convert header to number
          const duration = 2000; // Total animation duration in milliseconds
          const stepTime = 100; // Time between updates
          const steps = Math.ceil(duration / stepTime);
          const increment = value / steps;
          console.log(value, increment);

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
            setCount(1.0); // Start from 1
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
    <div
      style={{
        width: "100%",
        display: "flex",
        // gap: "2rem",
        justifyContent: "center",
      }}
      ref={statRef}
    >
      <Card
        className={styles.card}
        sx={{
          width: "100%",
          borderRadius: "24px",
          margin: "0 3rem",
          backgroundColor: theme.palette.mode === "light" ? "#eeedeb" : "#141414",
          // background:
            // theme.palette.mode === "light"
            //   ? `linear-gradient(135deg, #fefefe, #fdfdff)`
            //   : `linear-gradient(135deg, ${theme.palette.secondary.main2}, ${theme.palette.secondary.main2})`,
          color: theme.palette.mode === "light" ? `#212121` : "#fff",
          // boxShadow: `0px 0px 30px 1px ${theme.palette.mode === "light" ? "rgba(115, 115, 115, 0.2)" : "transparent"}`,
          border: "1px solid #ffffff80",
        }}
      >
        <CardContent
          sx={{
            padding: "16px 24px !important",
          }}
          className={styles.cardContent}
        >
          {/* Display GIF above header */}
          <div
            className={styles.iconWrapper}
            style={{
              "--color-accent": theme.palette.primary.accent,
            }}
          >
            <Icon />
          </div>
          <Typography
            variant="h2"
            component="div"
            sx={{
              // color: theme.palette.primary.accent, // Correct usage
              margin: "16px 0 8px",
              fontWeight: "700",
              fontSize: "40px",
              fontFamily: "JakartaSans",
            }}
            className={styles.header}
          >
            {count}
            {type !== "rating" && "+"}
            {type === "rating" && (
              <>
                <Typography sx={{display: "inline-block", margin: "0 6px", fontSize: "1.5rem", color:  "primary.text1"}}>out of</Typography>5
              </>
            )}
          </Typography>
          <Typography sx={{ wordSpacing: "1px", fontFamily: "BDSansBold" }} variant="h4" className={styles.tagLine}>
            {tagLine}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
