"use client";
import React, { useRef, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgsInBox } from "../../mui/HomePkgs";
import { DecorativeBackgroundImage } from "../../Decorative/Decorative.style";

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
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              flex: 1,
              position: "relative",
              left: "0",
              width: "49.5rem",
              height: "35.14rem",
              margin: "0",
                "@media (max-width: 600px)": {
                    width: "100%",
                    height: "auto",
                    paddingLeft: "4rem",
                    paddingRight: "4rem",
                    display: "flex",
                    justifyContent: "center",
                },
            }}
          >
            <Image
              src="/g1.jpg"
              alt="Small car image"
              width={489}
              height={350}
              style={{
                boxShadow: "0px 4px 7px 0 rgba(0, 0, 0, 0.25)",
                borderRadius: "0 12px 12px 0",
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
          </Box>

          <HomePkgsInBox sx={{
              margin: "0 auto",
              marginTop: "8rem",
              marginBottom: "4rem",
              "@media (max-width: 600px)": {
                  marginTop: "3rem",
              },
          }}>
            <Box
              sx={{
                width: "100%",
                margin: "0 auto",
                marginRight: "45%",
                marginLeft: "2rem",
                  "@media (max-width: 600px)": {
                      marginRight: "2rem",
                  },
              }}
            >
              <Box sx={{
                  textAlign: "left",
                  marginBottom: "1.5rem",
                  "@media (max-width: 600px)": {
                      textAlign: "center",
                  },
              }}>
                <HeadingLinesAnimation text="ABOUT" />
              </Box>

              <Typography
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "1.6rem",
                  lineHeight: 1.7,
                    "@media (max-width: 600px)": {
                      fontSize: "1rem",
                    },
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
            left: "60%",
            height: "auto",
            marginTop: "15rem",
              "@media (max-width: 600px)": {
                  display: "none",
              },
          }}
        >
          <Image
            src="/owner.png"
            alt="Big car image"
            width={976}
            height={702}
            style={{
              boxShadow: "0px 5px 28px 0 rgba(0, 0, 0, 0.25)",
              zIndex: 1,
              borderRadius: "12px",
              objectFit: "cover",
              width: "97.99rem",
              height: "70.48rem",
            }}
          />
        </Box>
      </Box>
      <DecorativeBackgroundImage right={"-32rem"} width="90rem" height="66rem" />
    </Box>
  );
}
