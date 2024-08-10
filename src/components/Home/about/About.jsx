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
  SectionHeading,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../../app/contexts/themeContext";

const cardData = [
  {
    imgSrc: "/car1.jpg",
    name: "Cars",
    text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
  },
  {
    imgSrc: "/boat.png",
    name: "Big Vehicle",
    text: "Lorem Ipsum doler sit amet, Lorem Ipsum doler sit amet",
  },
  {
    imgSrc: "/bike2.jpg",
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
        left: `calc(26% + ${305 * (index - curIndex)}px)`,
        zIndex: index + 10,
      }
    : {
        left: `calc(26% + ${305 * (len - 2) - (curIndex - index - 2) * 305}px)`,
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
        threshold: 0.3,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, cardData.length]);

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

  const handleIndexChange = (index) => {
    if (index !== currentIndex) setCurrentIndex(index);
  };

  return (
    <>
      <HomePkgsBox
        sx={{
          backgroundColor:
            theme.palette.mode === "light" ? "#eeedeb" : "#141414",
          // backgroundColor: "transparent",
          position: "relative",
          // minHeight: "700px",
          padding: hasAnimated ? "20rem 0 0" : "",
        }}
      >
        <HomePkgsInBox sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              marginRight: "auto",
              position: "relative",

              "& .triangle": {
                position: "absolute",
                top: "-3rem",
                left: "-10rem",
                height: "200px",
                width: "200px",
                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                backgroundColor: theme.palette.primary.main,
                zindex: 1,
                transform: "rotate(45deg)",
              },
            }}
          >
            <SectionHeading>About Fast Clean Service</SectionHeading>
            <div className="triangle"></div>

            <div className={styles.quoteWrapper}>
              <Typography
                className={styles.quoteText}
                sx={{ position: "relative", zIndex: 2 }}
              >
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
          padding: "5rem 0 15rem",
          // backgroundColor:
          //   theme.palette.mode === "light" ? "#f7f7f7" : "#141414",
          background: `linear-gradient(to bottom, ${
            theme.palette.mode === "light" ? "#eeedeb" : "#141414"
          } 73%, transparent 73%)`,
        }}
      >
        <HomePkgsInBox sx={{ padding: "0 10rem" }}>
          <CardContainer className={styles.cardContainer}>
            <Cards>
              {cardData.map((card, index) => {
                return (
                  <Card
                    key={index}
                    sx={{
                      "--url": `url(${card.imgSrc})`,
                      cursor: currentIndex !== index ? "pointer" : "",
                      filter: currentIndex !== index ? "brightness(2)" : "",
                      ...getTransitionStyles(
                        index,
                        currentIndex,
                        cardData.length
                      ),
                    }}
                    onClick={() => handleIndexChange(index)}
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
            {/* <CardControls>
              <CardBtnNav onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </CardBtnNav>
              <CardBtnNav onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </CardBtnNav>
            </CardControls> */}
          </CardContainer>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}
