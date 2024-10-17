"use client";
import React, {useEffect, useRef, useState} from "react";
import {useTheme} from "../../contexts/themeContext";
import {HomePkgsBox, HomePkgsInBox} from "../../components/mui/HomePkgs";
import {
    AutoTab,
    AutoTabContainer,
    AutoTabList,
    Card,
    CardButton,
    CardContainer,
    CardDetails,
    CardHeader,
    CardInfo,
} from "../../components/mui/AutoCarePkgs";
import {Box, ListItem, Typography} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faClose,} from "@fortawesome/free-solid-svg-icons";
import {cleanPkgs} from "../../lib/data/Autocare";

const ModdedCard = ({ card, color }) => {
    const { theme } = useTheme();

    return (
        <Card
            color={color}
            sx={{
                width: "100%",
                minWidth: "250px",
                flex: "1 1 30%",
                maxWidth: "calc(33% - 1rem)",
                minHeight: "500px",
                backgroundColor: card?.options ? "" : "#cbcbcb80",
                '@media (max-width: 900px)': {
                    flex: '1 1 45%',
                    maxWidth: "calc(50% - 1rem)",
                },
                '@media (max-width: 600px)': {
                    flex: '1 1 90%',
                    maxWidth: "calc(100% - 1rem)",
                }
            }}
        >
            <div className="style style--2" />
            <CardHeader color={color}>
                <Typography
                    className="sub-heading"
                    sx={{ color: color, fontSize: "2rem !important" }}
                >
                    {card?.name}
                </Typography>
                <Typography
                    className="heading"
                    sx={{
                        color: card?.options
                            ? `${theme.palette.primary.contrastText} !important`
                            : "#858585 !important",
                    }}
                >
                    {card?.type}
                </Typography>
            </CardHeader>
            <CardDetails sx={{ height: "100%" }}>
                {card?.options?.map((option, index) => {
                    return (
                        <ListItem
                            key={index}
                            sx={{
                                "&:not(:last-of-type)": {
                                    borderBottom: `1px solid ${theme.palette.primary.lightContrast}`,
                                },
                            }}
                        >
                            <FontAwesomeIcon
                                icon={faCheckCircle}
                                style={{
                                    color: color,
                                    transform: "translateY(2px)",
                                    marginRight: "1rem",
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            />
                            <Box
                                sx={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <Typography>{option.name}</Typography>
                                <Typography>{option.price}</Typography>
                            </Box>
                        </ListItem>
                    );
                })}
            </CardDetails>
            {!card?.options && (
                <Box
                    sx={{
                        width: "100%",
                        height: "100%",
                        color: "#858585",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexGrow: 1,
                        "& svg": {
                            fontSize: "25rem",
                        },
                    }}
                >
                    <FontAwesomeIcon icon={faClose} />
                </Box>
            )}
        </Card>
    );
};

const AutoCare = () => {
    const { theme } = useTheme();
    const [selectedTab, setSelectedTab] = useState("Standard");
    const [subCat, setSubCat] = useState("");
    const headerRef = useRef(null);
    const sectionRef = useRef(null);
    const containerRef = useRef(null);
    const color =
        selectedTab === "Standard"
            ? "#7ed56f"
            : selectedTab === "Deluxe"
                ? "#2998ff"
                : "#ff7730";

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    containerRef.current.classList.remove("animate__out");
                    containerRef.current.classList.add("animate");
                } else {
                    if (Array.from(containerRef.current.classList).includes("animate")) {
                        containerRef.current.classList.remove("animate");
                        containerRef.current.classList.add("animate__out");
                    }
                }
            },
            {
                threshold: 0.5,
            }
        );

        const curRef = sectionRef.current;

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (curRef) {
                observer.unobserve(curRef);
            }
        };
    }, []);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
        setSubCat("");
        const height = headerRef.current.clientHeight - 100;
        setTimeout(() => {
            window.scrollBy({
                top: height,
                behavior: "smooth",
            });
        }, 800);
    };

    const handleSubCatChange = (subCat) => {
        setSubCat(subCat);
    };

    return (
        <Box
            sx={{
                position: "relative",
                backgroundColor: "primary.main",
                backgroundImage: theme.palette.mode === "light" ? "url(/bg3.jpg)" : "url(/bg-dark2.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            {theme.palette.mode === "dark" && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "90%",
                        height: "100%",
                        background: "linear-gradient(to bottom, #141414 1%,rgba(0,0,0,0.7), #141414 99%)",
                        zIndex: 0,
                    }}
                />
            )}
            <HomePkgsBox
                ref={headerRef}
                sx={{
                    position: "relative",
                    padding: "15rem 5rem 5rem",
                }}
            >
                <AutoTabContainer
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        justifyContent: 'center',
                        '@media (max-width: 800px)': {
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    <AutoTab
                        className={selectedTab === "Standard" ? "selected" : ""}
                        onClick={() => handleTabChange("Standard")}
                        sx={{ flex: '1 1 30%', maxWidth: 'calc(33% - 16px)',
                            '@media (max-width: 800px)': {
                                maxWidth: 'calc(90% - 16px)',
                            },
                    }}
                    >
                        <div className="tab__side tab__side--front">
                            <div className="tab__picture tab__picture--1"></div>
                            <Typography className="heading">
                                <span className="heading--span heading--span-1">Standard</span>
                            </Typography>
                            <AutoTabList>
                                <ListItem>Min: 74,95</ListItem>
                                <ListItem>Duration: 45 min</ListItem>
                                <ListItem>Economy</ListItem>
                            </AutoTabList>
                        </div>
                        <div className="tab__side tab__side--back tab__side--back-1">
                            <div className="tab__cta">
                                <Typography className="tab__value">Standard</Typography>
                            </div>
                        </div>
                    </AutoTab>
                    <AutoTab
                        className={selectedTab === "Deluxe" ? "selected" : ""}
                        onClick={() => handleTabChange("Deluxe")}
                        sx={{ flex: '1 1 30%', maxWidth: 'calc(33% - 16px)',
                            '@media (max-width: 800px)': {
                                maxWidth: 'calc(90% - 16px)',
                            },
                        }}
                    >
                        <div className="tab__side tab__side--front">
                            <div className="tab__picture tab__picture--2"></div>
                            <Typography className="heading">
                                <span className="heading--span heading--span-2">Deluxe</span>
                            </Typography>
                            <AutoTabList>
                                <ListItem>Min: 89,95</ListItem>
                                <ListItem>Duration: 60 min</ListItem>
                                <ListItem>Peoples Choice</ListItem>
                            </AutoTabList>
                        </div>
                        <div className="tab__side tab__side--back tab__side--back-2">
                            <div className="tab__cta">
                                <Typography className="tab__value">Deluxe</Typography>
                            </div>
                        </div>
                    </AutoTab>
                    <AutoTab
                        className={selectedTab === "Premium" ? "selected" : ""}
                        onClick={() => handleTabChange("Premium")}
                        sx={{ flex: '1 1 30%', maxWidth: 'calc(33% - 16px)',
                            '@media (max-width: 800px)': {
                                maxWidth: 'calc(90% - 16px)',
                            },
                        }}
                    >
                        <div className="tab__side tab__side--front">
                            <div className="tab__picture tab__picture--3"></div>
                            <Typography className="heading">
                                <span className="heading--span heading--span-3">Premium</span>
                            </Typography>
                            <AutoTabList>
                                <ListItem>Min: 180</ListItem>
                                <ListItem>Duration: 180 min</ListItem>
                                <ListItem>Bespoke</ListItem>
                            </AutoTabList>
                        </div>
                        <div className="tab__side tab__side--back tab__side--back-3">
                            <div className="tab__cta">
                                <Typography className="tab__value">Premium</Typography>
                            </div>
                        </div>
                    </AutoTab>
                </AutoTabContainer>
            </HomePkgsBox>
            <HomePkgsBox>
                <HomePkgsInBox sx={{ justifyContent: "center", position: "relative" }} ref={sectionRef}>
                    <CardContainer ref={containerRef}>
                        {cleanPkgs[selectedTab]?.types.map((pkg) => {
                            return (
                                <Card key={pkg?.type} color={color}>
                                    <div className="style style--1" />
                                    <CardHeader color={color}>
                                        <Typography className="heading">{pkg?.type}</Typography>
                                        <Typography className="tagline">For personal use and exploration of AI technology</Typography>
                                    </CardHeader>
                                    <CardInfo color={color}>
                                        <Typography className="price">{pkg.price.one}</Typography>
                                    </CardInfo>
                                    <CardDetails>
                                        {pkg?.pros.map((pro, index) => {
                                            return (
                                                <ListItem key={index}>
                                                    <FontAwesomeIcon
                                                        icon={faCheckCircle}
                                                        style={{
                                                            color: color,
                                                            transform: "translateY(2px)",
                                                            marginRight: "1rem",
                                                        }}
                                                    />
                                                    {pro}
                                                </ListItem>
                                            );
                                        })}
                                    </CardDetails>
                                    <CardButton
                                        onClick={() => handleSubCatChange(pkg?.type)}
                                        sx={{
                                            backgroundColor: subCat === pkg.type ? color : "",
                                            color: "black !important",
                                            justifyContent: "center",
                                            "&:hover": {
                                                backgroundColor: `${color} !important`,
                                                color: "primary.main !important",
                                            },
                                        }}
                                    >
                                        Add Ons
                                    </CardButton>
                                </Card>
                            );
                        })}
                    </CardContainer>
                </HomePkgsInBox>
            </HomePkgsBox>
            <HomePkgsBox
                sx={{
                    padding: "15rem 5rem 5rem",
                    flexDirection: "column",
                }}
            >
                <HomePkgsInBox sx={{ justifyContent: "center", alignSelf: "center" }}>
                    <CardContainer
                        sx={{
                            gap: "2rem",
                            opacity: subCat ? 1 : 0,
                            flexWrap: 'wrap',
                            '@media (max-width: 900px)': {
                                flexDirection: 'column',
                                alignItems: 'center',
                            },
                        }}
                    >
                        <ModdedCard
                            card={{
                                name: selectedTab,
                                type: "Exterior",
                                options: cleanPkgs[selectedTab]?.types.find((item) => item.type === subCat)?.extras?.exterior || null,
                            }}
                            color={color}
                        />
                        <ModdedCard
                            card={{
                                name: selectedTab,
                                type: "Interior",
                                options: cleanPkgs[selectedTab]?.types.find((item) => item.type === subCat)?.extras?.interior || null,
                            }}
                            color={color}
                        />
                        <ModdedCard
                            card={{
                                name: selectedTab,
                                type: "Detailing",
                                options: cleanPkgs[selectedTab]?.types.find((item) => item.type === subCat)?.extras?.detailing || null,
                            }}
                            color={color}
                        />
                    </CardContainer>
                </HomePkgsInBox>
            </HomePkgsBox>
        </Box>
    );
};

export default AutoCare;
