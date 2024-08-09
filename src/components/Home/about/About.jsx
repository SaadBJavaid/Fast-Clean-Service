"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  HomePkgsBox,
  HomePkgsInBox,
  HomeWrapper,
  CardContainer,
  Cards,
  Card,
  CardName,
  CardDesc,
  CardBtn,
  CardControls,
  CardBtnNav,
} from "../../mui/HomePkgs";
import {
  Typography,
  // Card,
  CardMedia,
  // CardContent,
  List,
  Box,
  ListItem,
  ListItemText,
} from "@mui/material";
import styles from "./About.module.css";
import Image from "next/image";
import { useTheme } from "../../../app/contexts/themeContext";

function getTransitionStyles(index, curIndex, len) {
  return index === curIndex
    ? {
        left: 0,
        top: 0,
        transform: "translate(0, 0)",
        borderRadius: 0,
        width: "100%",
        height: "100%",
        boxShadow: "none",

        "& div": {
          display: "block",
          zIndex: 5,
        },
      }
    : index > curIndex
    ? {
        left: `calc(50% + ${220 * (index - curIndex - 1)}px)`,
        zIndex: index + 10,
      }
    : {
        left: `calc(50% + ${220 * (len - 2) - (curIndex - index - 1) * 220}px)`,
        zIndex: index + 10,
      };
}

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

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
        threshold: 0.2,
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

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const cardData = [
    {
      imgSrc: "/car1.jpg",
      name: "Cars",
      text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    },
    {
      imgSrc: "/camper3.jpg",
      name: "Big Vehicle",
      text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    },
    {
      imgSrc: "/bike.jpg",
      name: "Two Wheeler",
      text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    },
    // {
    //   imgSrc: "/car1.jpg",
    //   name: "Two Wheeler",
    //   text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    // },
    // {
    //   imgSrc: "/camper3.jpg",
    //   name: "Cars",
    //   text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    // },
  ];

  return (
    <>
      <HomePkgsBox
        sx={{
          backgroundColor: "transparent",
          position: "relative",
          // minHeight: "700px",
          padding: hasAnimated ? "30rem" : "",
        }}
      >
        <HomePkgsInBox sx={{ justifyContent: "center" }}>
          <Box>
            <Typography
              sx={{
                fontSize: "5rem !important",
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "2rem",
                fontFamily: "BDSansBold",
              }}
            >
              About us
            </Typography>

            <Typography
              sx={{
                fontSize: "4rem !important",
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
          </Box>

          <div
            className={`${styles.imageWrapper} ${
              hasAnimated ? styles.isVisible : ""
            }`}
            ref={sectionRef}
          >
            <Image
              className={styles.image}
              src="/owner.png"
              alt="car_image"
              width={900}
              height={900}
            />
          </div>

          <div className={styles.textContainer}>
            {/* Text will be added here later */}
          </div>
        </HomePkgsInBox>
      </HomePkgsBox>

      <HomePkgsBox
        sx={{
          backgroundColor: theme.palette.mode === "light" ? "#f7f7f7" : "#333",
          padding: "25rem 0 15rem",
        }}
      >
        <HomePkgsInBox>
          <CardContainer className={styles.cardContainer}>
            <Cards>
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    sx={{
                      "--url": `url(${card.imgSrc})`,
                      ...getTransitionStyles(
                        index,
                        currentIndex,
                        cardData.length
                      ),
                    }}
                  >
                    <div>
                      <CardName>{card.name}</CardName>
                      <CardDesc>{card.text}</CardDesc>
                      <CardBtn>Learn More</CardBtn>
                    </div>
                  </Card>
                );
              })}
            </Cards>
            <CardControls>
              <CardBtnNav onClick={handlePrev}>&lt;</CardBtnNav>
              <CardBtnNav onClick={handleNext}>&gt;</CardBtnNav>
            </CardControls>
          </CardContainer>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}
