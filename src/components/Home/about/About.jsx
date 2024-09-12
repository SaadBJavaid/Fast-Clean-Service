"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  HomePkgsBox,
  HomePkgsInBox,
  CardContainer,
  Cards,
  Card,
  CardName,
  CardDesc,
  CardBtn,
    SectionHeadingCentered,
  SectionHeading,
} from "../../mui/HomePkgs";
import { Typography, Box } from "@mui/material";
import styles from "./About.module.css";
import Image from "next/image";
import { useTheme } from "../../../contexts/themeContext";
import { AutoTabList } from "../../mui/AutoCarePkgs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    imgSrc: "/car1.jpg",
    name: "Cars",
    pkgs: [
      "Car Exterior Cleaning",
      "Interior Steam Cleaning",
      "Paint Polishing & Sealing",
      "High quality glass coating",
      "Paint Sealant and WaxGuard",
    ],
  },
  {
    imgSrc: "/boat.png",
    name: "All Types of Vehicle",
    pkgs: [
      "We also cater to caravans, campers, boats and trucks.",
      "The interior cleaning of a camper, caravan, boat and truck is no problem for us.",
      "Steam cleaning is a very efficient environmentally friendly way to clean your vehicles.",
    ],
  },
  {
    imgSrc: "/bike2.jpg",
    name: "Bikes",
    pkgs: [
      "These are exposed to harsh weather conditions and endure a lot.",
      "Our steam cleaner, reaching a temperature of 180 °C, can clean even the the most difficult places.",
    ],
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 10000);

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
            theme.palette.mode === "light" ? "#eeedeb" : "#1F1F1F",
          // backgroundColor: "transparent",
          position: "relative",
          // minHeight: "700px",
          padding: hasAnimated ? "20rem 0 0" : "",
        }}
      >
        <HomePkgsInBox sx={{ justifyContent: "center" }}>
          <Box
            sx={{
              marginLeft: "2rem",
              marginRight: "auto",
              position: "relative",

              "& .triangle": {
                position: "absolute",
                top: "-3rem",
                left: "-10rem",
                height: "200px",
                width: "200px",
                clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                backgroundColor:
                  theme.palette.mode === "light"
                    ? theme.palette.primary.main
                    : "#aaa",
                zindex: 1,
                transform: "rotate(45deg)",
              },
            }}
          >
            <SectionHeadingCentered>About Fast Clean Service</SectionHeadingCentered>
            <div className="triangle"></div>
          </Box>

          <div className={styles.quoteWrapper}>
            <Typography
              variant="h2"
              className={styles.quoteText}
              sx={{
                position: "relative",
                zIndex: 2,
                  fontSize: {
                      xs: '1.5rem', // Extra small screens
                      sm: '1.8rem', // Small screens
                      md: '2rem',  // Medium screens
                      lg: '2.5rem', // Large screens
                  },
                lineHeight: "2",
                maxWidth: "1240px",
                width: "100%",
                color: "#999",
                margin: "8px auto",
              }}
            >
              We offer mobile car cleaning at your convenience, anytime and
              anywhere. Our steam cleaning technique ensures a deep, thorough
              clean, reaching even the toughest spots. Equipped with modern
              supplies in our vans, we provide efficient, professional service
              for all types of vehicles.
            </Typography>
          </div>

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
          padding: "0 0 10rem",
          // backgroundColor:
          //   theme.palette.mode === "light" ? "#f7f7f7" : "#1F1F1F",
          background: `linear-gradient(to bottom, ${
            theme.palette.mode === "light" ? "#eeedeb" : "#1F1F1F"
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
                      {card.pkgs.map((pkg, index) => (
                        <CardDesc
                          key={pkg}
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "",
                            padding: "2px 0",
                          }}
                        >
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            style={{
                              color: theme.palette.primary.accent,
                              marginRight: "1rem",
                              transform: "translateY(2px)",
                            }}
                          />
                          <Typography
                            sx={{
                              textAlign: "left !important",
                              fontSize: "2.2rem !important",
                              fontWeight: "600",
                            }}
                          >
                            {pkg}
                          </Typography>
                        </CardDesc>
                      ))}
                      <CardBtn>Learn More</CardBtn>
                    </div>
                  </Card>
                );
              })}
            </Cards>
          </CardContainer>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
}
