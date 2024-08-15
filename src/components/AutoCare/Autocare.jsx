"use client";
import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../app/contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../components/mui/HomePkgs";
import {
  AutoCareBottomBar,
  AutoCareBottomBarInner,
  AutoCareBottomBarItem,
  AutoCareSection,
  AutoTabContainer,
  AutoTab,
  AutoTabList,
  CardContainer,
  Card,
  CardHeader,
  CardInfo,
  CardDetails,
  CardButton,
} from "../../components/mui/AutoCarePkgs";
import { ListItem, Typography, Button, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faClose,
  faCross,
} from "@fortawesome/free-solid-svg-icons";
import { cleanPkgs } from "../../lib/data/Autocare";

const ModdedCard = ({ card, color }) => {
  const { theme } = useTheme();

  return (
    <Card
      color={color}
      sx={{
        maxWidth: "none",
        minWidth: "350px",
        width: "calc(33% - 1rem)",
        minHeight: "500px",
        backgroundColor: card?.options ? "" : "#cbcbcb80",
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
                  // width: "100%",
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
        backgroundImage: "url(/bg3.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <HomePkgsBox
        ref={headerRef}
        sx={{
          position: "relative",
          // backgroundColor: "#f7f7f7",
          // backgroundImage:
          //   "linear-gradient(to right bottom, #2998ff 50%, #5643fa 50%),url(5.jpg)",
          //   height: "700px",
          padding: "15rem 5rem 5rem",
        }}
      >
        <AutoTabContainer>
          <AutoTab
            className={selectedTab === "Standard" ? "selected" : ""}
            onClick={() => handleTabChange("Standard")}
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
                {/* <Typography className="tab__price">Standard</Typography> */}
                <Typography className="tab__value">Standard</Typography>
              </div>
            </div>
          </AutoTab>
          <AutoTab
            className={selectedTab === "Deluxe" ? "selected" : ""}
            onClick={() => handleTabChange("Deluxe")}
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
                {/* <Typography className="tab__price">Standard</Typography> */}
                <Typography className="tab__value">Deluxe</Typography>
              </div>
            </div>
          </AutoTab>
          <AutoTab
            className={selectedTab === "Premium" ? "selected" : ""}
            onClick={() => handleTabChange("Premium")}
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
                {/* <Typography className="tab__price">Standard</Typography> */}
                <Typography className="tab__value">Premium</Typography>
              </div>
            </div>
          </AutoTab>
        </AutoTabContainer>
      </HomePkgsBox>
      <HomePkgsBox
      // sx={{
      //   // backgroundImage:
      //   //   "linear-gradient(to bottom right, red 50%, blue 50%)",

      // }}
      >
        <HomePkgsInBox sx={{ justifyContent: "center" }} ref={sectionRef}>
          <CardContainer ref={containerRef}>
            {cleanPkgs[selectedTab]?.types.map((pkg) => {
              return (
                <Card key={pkg?.type} color={color}>
                  <div className="style style--1" />
                  <CardHeader color={color}>
                    <Typography className="heading">{pkg?.type}</Typography>
                    <Typography className="tagline">
                      For personal use and exploration of AI technology
                    </Typography>
                  </CardHeader>
                  <CardInfo color={color}>
                    <Typography className="price">{pkg.price.one}</Typography>
                  </CardInfo>
                  <CardDetails>
                    {pkg?.pros.map((pro, index) => {
                      return (
                        <ListItem key={index} sx={{}}>
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
                    sx={{ backgroundColor: subCat === pkg.type ? color : "" }}
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
              transform: "translate(0, 0)",
              // opacity: 1,
              gap: "2rem",
              opacity: subCat ? 1 : 0,
            }}
          >
            <ModdedCard
              card={{
                name: selectedTab,
                type: "Exterior",
                options:
                  cleanPkgs[selectedTab].types.find(
                    (item) => item.type === subCat
                  )?.extras?.exterior || null,
              }}
              color={color}
            />
            <ModdedCard
              card={{
                name: selectedTab,
                type: "Interior",
                options:
                  cleanPkgs[selectedTab].types.find(
                    (item) => item.type === subCat
                  )?.extras?.interior || null,
              }}
              color={color}
            />
            <ModdedCard
              card={{
                name: selectedTab,
                type: "Detailing",
                options:
                  cleanPkgs[selectedTab].types.find(
                    (item) => item.type === subCat
                  )?.extras?.detailing || null,
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
