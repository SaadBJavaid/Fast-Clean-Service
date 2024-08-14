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
} from "../../components/mui/AutoCarePkgs";
import { ListItem, Typography, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { cleanPkgs } from "../../lib/data/Autocare";

const AutoCare = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState("Standard");
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const color = selectedTab === "Standard" ? "#7ed56f" : selectedTab === "Deluxe" ? "#2998ff" : "#ff7730";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          containerRef.current.classList.remove("animate__out");
          containerRef.current.classList.add("animate");
        } else {
          containerRef.current.classList.remove("animate");
          containerRef.current.classList.add("animate__out");
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    const height = headerRef.current.clientHeight - 100;
    setTimeout(() => {
      window.scrollBy({
        top: height,
        behavior: "smooth",
      });
    }, 800);
  };

  return (
    <>
      <HomePkgsBox
        ref={headerRef}
        sx={{
          position: "relative",
          backgroundColor: "#f7f7f7",
          // backgroundImage:
          //   "linear-gradient(to right bottom, #2998ff 50%, #5643fa 50%),url(5.jpg)",
          //   height: "700px",
          padding: "15rem 5rem 5rem",
        }}
      >
        <AutoTabContainer>
          <AutoTab className={selectedTab === "Standard" ? "selected" : ""} onClick={() => handleTabChange("Standard")}>
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
          <AutoTab className={selectedTab === "Deluxe" ? "selected" : ""} onClick={() => handleTabChange("Deluxe")}>
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
          <AutoTab className={selectedTab === "Premium" ? "selected" : ""} onClick={() => handleTabChange("Premium")}>
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
      <HomePkgsBox>
        <HomePkgsInBox sx={{ justifyContent: "center" }} ref={sectionRef}>
          <CardContainer ref={containerRef}>
            {cleanPkgs[selectedTab]?.types.map((pkg) => {
              return (
                <Card color={color}>
                  <div className="style" />
                  <CardHeader color={color}>
                    <Typography className="heading">{pkg.type}</Typography>
                    <Typography className="tagline">For personal use and exploration of AI technology</Typography>
                  </CardHeader>
                  <CardInfo color={color}>
                    <Typography className="price">{pkg.price.one}</Typography>
                  </CardInfo>
                  <CardDetails sx={{}}>
                    {pkg?.pros.map((pro) => {
                      return (
                        <ListItem sx={{}}>
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
                </Card>
              );
            })}
            {/* <Card color={color}>
              <div className="style" />
              <CardHeader color={color}>
                <Typography className="heading">Basic</Typography>
                <Typography className="tagline">
                  For personal use and exploration of AI technology
                </Typography>
              </CardHeader>
              <CardInfo color={color}>
                <Typography className="price">0</Typography>
                <Button>Get Started</Button>
              </CardInfo>
              <CardDetails>
                <ListItem>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      color: color,
                      transform: "translateY(2px)",
                      marginRight: "1rem",
                    }}
                  />
                  100 reqs per day
                </ListItem>
                <ListItem>Free trials</ListItem>
                <ListItem>API access</ListItem>
              </CardDetails>
            </Card>

            <Card color={color}>
              <div className="style" />
              <CardHeader color={color}>
                <Typography className="heading">Basic</Typography>
                <Typography className="tagline">
                  For personal use and exploration of AI technology
                </Typography>
              </CardHeader>
              <CardInfo color={color}>
                <Typography className="price">0</Typography>
                <Button>Get Started</Button>
              </CardInfo>
              <CardDetails>
                <ListItem>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      color: color,
                      transform: "translateY(2px)",
                      marginRight: "1rem",
                    }}
                  />
                  100 reqs per day
                </ListItem>
                <ListItem>Free trials</ListItem>
                <ListItem>API access</ListItem>
              </CardDetails>
            </Card> */}
          </CardContainer>
        </HomePkgsInBox>
      </HomePkgsBox>
    </>
  );
};

export default AutoCare;
