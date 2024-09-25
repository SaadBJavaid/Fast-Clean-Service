"use client";
import React, { useState, useEffect } from "react";
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
} from "../../mui/HomePkgs";
import { Typography, Box } from "@mui/material";
import { useTheme } from "../../../app/contexts/themeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "../about/About.module.css";

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
        description:
            "Whether it's a casual ride or a high-performance machine, we’ve got your two-wheelers covered with professional cleaning and care services.",
    },
    {
        imgSrc: "/boat.png",
        name: "All Types of Vehicle",
        pkgs: [
            "We also cater to caravans, campers, boats, and trucks.",
            "The interior cleaning of a camper, caravan, boat, and truck is no problem for us.",
            "Steam cleaning is a very efficient environmentally friendly way to clean your vehicles.",
        ],
        description:
            "Long-term vehicle maintenance plans to ensure your car remains in peak condition with additional care options.",
    },
    {
        imgSrc: "/bike2.jpg",
        name: "Bikes",
        pkgs: [
            "These are exposed to harsh weather conditions and endure a lot.",
            "Our steam cleaner, reaching a temperature of 180 °C, can clean even the most difficult places.",
        ],
        description:
            "Whether it's a casual ride or a high-performance machine, we’ve got your two-wheelers covered with professional cleaning and care services.",
    },
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

export default function LongTermVehicleCare() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { theme } = useTheme();
    const isDarkTheme = theme.palette.mode === "dark";

    const headingColor1 = isDarkTheme ? "#FFFFFF" : "#232E4A";
    const smallTextColor1 = isDarkTheme ? "#FFFFFF" : "#000000";

    const headingColor = "#FFFFFF";
    const smallTextColor = "#FFFFFF";

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
        }, 10000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentIndex, cardData.length]);

    const handleIndexChange = (index) => {
        if (index !== currentIndex) setCurrentIndex(index);
    };

    return (
        <HomePkgsBox
            sx={{
                position: "relative",
                padding: "5rem 0",
                marginBottom: "20rem",
            }}
        >
            <HomePkgsInBox
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 10,
                    flexDirection: "column",
                    marginTop: "21rem",
                }}
            >
                <Typography
                    sx={{
                        marginBottom: "0.7rem !important",
                        fontSize: "4rem !important",
                        textAlign: "center",
                        color: headingColor1,
                        fontFamily: "Unbounded",
                        zIndex: 10,
                    }}
                >
                    Long-term Vehicle Care
                </Typography>

                <Typography
                    sx={{
                        fontSize: "1.2rem !important",
                        color: smallTextColor1,
                        textAlign: "center",
                        marginBottom: "4rem !important",
                        maxWidth: "80%",
                        fontFamily: "Unbounded",
                        fontWeight: "300 !important",
                        zIndex: 10,
                        marginTop: "-2rem"
                    }}
                >
                    Ensure your vehicles' longevity with our comprehensive maintenance
                    plans designed to keep your car in optimal condition for years to come.
                </Typography>

                <HomePkgsInBox
                    sx={{
                        width: "100%",
                        zIndex: 5,
                        height: "auto",
                        maxWidth: "1150px",
                    }}
                >
                    <CardContainer className={styles.cardContainer}>
                        <Cards>
                            {cardData.map((card, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        "--url": `url(${card.imgSrc})`,
                                        cursor: currentIndex !== index ? "pointer" : "",
                                        filter: currentIndex !== index ? "brightness(2)" : "",
                                        ...getTransitionStyles(index, currentIndex, cardData.length),
                                    }}
                                    onClick={() => handleIndexChange(index)}
                                >
                                    <div>
                                        <CardName
                                            sx={{
                                                color: headingColor,
                                                marginBottom: "3rem",
                                                fontSize: "2.6rem",
                                                fontWeight: "500",
                                            }}
                                        >
                                            {card.name}
                                        </CardName>

                                        {card.pkgs.map((pkg) => (
                                            <CardDesc
                                                key={pkg}
                                                sx={{
                                                    width: "40%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    padding: "2px 0",
                                                    color: smallTextColor,
                                                }}
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheckCircle}
                                                    style={{
                                                        color: "#90EE90",
                                                        marginRight: "1rem",
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        textAlign: "left",
                                                        color: smallTextColor,
                                                        fontSize: "1.6rem",
                                                        fontWeight: "300",
                                                    }}
                                                >
                                                    {pkg}
                                                </Typography>
                                            </CardDesc>
                                        ))}

                                        <Typography
                                            sx={{
                                                fontSize: "1.2rem",
                                                fontWeight: "300",
                                                color: "#FFFFFF",
                                                marginTop: "1.3rem",
                                                textAlign: "left",
                                                width: "40%",
                                            }}
                                        >
                                            {card.description}
                                        </Typography>

                                        <CardBtn>Learn More</CardBtn>
                                    </div>
                                </Card>
                            ))}
                        </Cards>
                    </CardContainer>
                </HomePkgsInBox>
            </HomePkgsInBox>
        </HomePkgsBox>
    );
}
