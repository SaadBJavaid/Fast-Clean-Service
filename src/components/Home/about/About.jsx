"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgsInBox } from "../../mui/HomePkgs";

export default function About() {
  const sectionRef = useRef(null);
  const { theme } = useTheme();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(currentSection);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <Box
      sx={{
        marginTop: "5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              left: "0",
              width: "49.5rem",
              height: "35.14rem",
              margin: "0",
            }}
          >
            <Image
              src="/g1.jpg"
              alt="Small car image"
              width={489}
              height={350}
              style={{
                borderRadius: "12px",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

          <HomePkgsInBox sx={{ margin: "0 auto", marginTop: "8rem", marginBottom: "4rem" }}>
            <Box
              sx={{
                width: "100%",
                margin: "0 auto",
                marginRight: "45%",
                marginLeft: "15rem",
                // paddingLeft: "15rem",
                // paddingRight: "15%",
              }}
            >
              <Box sx={{ textAlign: "left", marginBottom: "1.5rem" }}>
                <HeadingLinesAnimation text="ABOUT" />
              </Box>

              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.6rem",
                  lineHeight: 1.7,
                }}
              >
                We bring professional car cleaning to your location, any time. Our advanced steam cleaning technology ensures a
                deep clean for all vehicle types. With fully-equipped mobile units and expert technicians, we deliver efficient,
                high-quality service that fits your schedule. Choose FAST CLEAN SERVICE for convenient, thorough car cleaning on
                your terms.
              </Typography>
            </Box>
          </HomePkgsInBox>
        </Box>
        <Box
          sx={{
            position: "absolute",
            left: "70%",
            height: "auto",
            marginTop: "15rem",
          }}
        >
          <Image
            src="/owner.png"
            alt="Big car image"
            width={976}
            height={702}
            style={{
              zIndex: 1,
              borderRadius: "12px",
              objectFit: "cover",
              width: "97.99rem",
              height: "70.48rem",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
