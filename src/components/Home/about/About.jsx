"use client";
import React, { useState } from "react";
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

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { theme } = useTheme();

  const handleMouseEnter = (index) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleNext = () => {};

  const handlePrev = () => {};

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
    {
      imgSrc: "/car1.jpg",
      name: "Two Wheeler",
      text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    },
    {
      imgSrc: "/camper3.jpg",
      name: "Two Wheeler",
      text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
    },
  ];

  return (
    <HomePkgsBox sx={{ backgroundColor: "transparent" }}>
      <HomePkgsInBox sx={{ justifyContent: "center", position: "relative" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "5rem !important",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "2rem",
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

        <div className={styles.imageWrapper}>
          <Image
            className={styles.image}
            src="/owner.png"
            alt="car_image"
            width={900}
            height={900}
          />
        </div>

        <CardContainer className={styles.cardContainer}>
          <Cards>
            {cardData.map((card, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    "--url": `url(${card.imgSrc})`,
                  }}
                >
                  <div>
                    <CardName>{card.name}</CardName>
                    <CardDesc>{card.text}</CardDesc>
                    <CardBtn></CardBtn>
                  </div>
                </Card>
              );
            })}
          </Cards>
          <CardControls>
            <CardBtnNav>&lt;</CardBtnNav>
            <CardBtnNav>&gt;</CardBtnNav>
          </CardControls>
        </CardContainer>

        <div className={styles.textContainer}>
          {/* Text will be added here later */}
        </div>
      </HomePkgsInBox>
    </HomePkgsBox>
  );
}
