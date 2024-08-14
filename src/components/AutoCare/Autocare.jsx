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

const cleanPkgs = {
  Standard: {
    types: [
      {
        type: "Exterieur",
        price: {
          one: "74,95",
          duur: "45",
        },
        pros: ["✔️Exterieur wassen", "✔️Ramen en spiegels reinigen", "✔️Spray wax aanbrengen", "✔️Velgen"],
        cons: [
          "❌ Banden zwarten",
          "❌ Dorpels en deurranden",
          "❌ Ramen ceramische bescherming aanbrengen",
          "❌ Kunststofdelen voeden",
          "❌ Tankklep reinigen",
        ],
        extras: {
          exterior: [
            "Motorkap reiniging  (Optie: + € 50,-)",
            "Polijsten koplampen  (Optie: + € 50,-)",
            "Polijsten chromendelen  (Optie: + € 90,-)",
          ],
          detailing: [
            "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
            "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
            "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
            "Lakverzegeling  (Optie: op aanvraag)",
            "Glascoating  (Optie: op aanvraag)",
          ],
        },
      },
      {
        type: "Interieur",
        price: {
          one: "89,95",
          duur: "45",
        },
        pros: [
          "✔️Dashboard en vakjes afnemen",
          "✔️Dorpels en deurranden",
          "✔️Matten uitstomen",
          "✔️Ramen en spiegels reinigen",
          "✔️Stoomreiniging interieur globaal",
        ],
        cons: [
          "❌ Detailing",
          "❌ Kunststofdelen poetsen",
          "❌ Leerbehandeling",
          "❌ Matten stripe",
          "❌ Stoomreiniging intensief interieur",
        ],
        extras: {
          interior: [
            "Leerbehandeling  (Optie: + € 50.-)",
            "Vlekken verwijderen bekleding / Diepte reiniging  (Optie: + € 80,-)",
            "Honden haren verwijderen (Optie; + €40,-)",
            "Ozonbehandeling (Optie: + € 95,-)",
            "Schimmel behandeling  (Optie: + € 105,-)",
            "Vlekken in het plafond  (Optie: + € 75,-)",
            "Geur behandeling  (Optie: + € 85,-)",
          ],
          exterior: [
            "Motorkap reiniging  (Optie: + € 50,-)",
            "Polijsten koplampen  (Optie: + € 50,-)",
            "Polijsten chromendelen  (Optie: + € 90,-)",
          ],
          detailing: [
            "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
            "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
            "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
            "Lakverzegeling  (Optie: op aanvraag)",
            "Glascoating  (Optie: op aanvraag)",
          ],
        },
      },
      {
        type: "Combi",
        price: {
          one: "139,95",
          duur: "90",
        },
        pros: [
          "✔️ In het ‘Standard Combi Pakket’ krijg je alle vinkjes van het ‘Standard Interieur en Exterieur Pakket’ gecombineerd in één pakket!",
        ],
        extras: {
          interior: [
            "Leerbehandeling (Optie: + € 50,-)",
            "Vlekken verwijderen bekleding / diepe reiniging (Optie: + € 80,-)",
            "Honden haren verwijderen (Optie; + €50,-)",
            "Ozonbehandeling (Optie: + € 95,-)",
            "Schimmel behandeling meerdere plekken (Optie: + € 105,-)",
            "Vlekken in het plafond (Optie: + € 75,-)",
            "Geurbehandeling (Optie: + € 85,-)",
          ],
          exterior: [
            "Motorkap reiniging  (Optie: + € 50,-)",
            "Polijsten koplampen (Optie: + € 50,-)",
            "Polijsten chromendelen (Optie: + € 90,-)",
          ],
          detailing: [
            "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
            "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
            "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
            "Lakverzegeling  (Optie: op aanvraag)",
            "Glascoating  (Optie: op aanvraag)",
            "Glascoating (Optie: op aanvraag)",
          ],
        },
      },
    ],
  },
  Deluxe: {
    types: [
      {
        type: "Exterieur",
        price: {
          one: "89,95",
          duur: "60",
        },
        pros: [
          "✔️Exterieur wassen",
          "✔️Ramen en spiegels reinigen",
          "✔️Spray wax aanbrengen",
          "✔️Velgen",

          "✔️Banden zwarten",
          "✔️Dorpels en deurranden",
          "✔️Ramen ceramische bescherming aanbrengen",
          "✔️Kunststofdelen voeden",
          "✔️Tankklep reinigen",
        ],
        extras: {
          exterior: [
            "Motorkap reiniging  (Optie: + € 50,-)",
            "Polijsten koplampen (Optie: + € 50,-)",
            "Polijsten chromendelen (Optie: + € 90,-)",
          ],
          detailing: [
            "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
            "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
            "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
            "Lakverzegeling  (Optie: op aanvraag)",
            "Glascoating  (Optie: op aanvraag)",
          ],
        },
      },
      {
        type: "Combi",
        price: {
          one: "189,95",
          duur: "90/150",
        },
        pros: [
          "✔️Dashboard en vakjes afnemen",
          "✔️Dorpels en deurranden",
          "✔️Matten uitstomen",
          "✔️Ramen en spiegels reinigen",
          "✔️Vlekken verwijderen / Dieptereiniging",
          "✔️Detailing",
          "✔️Kunststofdelen poetsen",
          "✔️Leerbehandeling",
          "✔️Matten stripe",
          "✔️Stoomreiniging intensief interieur",
        ],
        extras: {
          interior: [
            "Honden haren verwijderen (Optie; + €50,-)",
            "Ozonbehandeling (Optie: + € 95,-)",
            "Schimmel behandeling meerdere plekken (Optie: + € 105,-)",
            "Vlekken in het plafond (Optie: + € 75,-)",
            "Geurbehandeling (Optie: + € 85,-)",
          ],
          exterior: [
            "Motorkap reiniging  (Optie: + € 50,-)",
            "Polijsten koplampen (Optie: + € 50,-)",
            "Polijsten chromendelen (Optie: + € 90,-)",
          ],
          detailing: [
            "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
            "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
            "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
            "Lakverzegeling  (Optie: op aanvraag)",
            "Glascoating  (Optie: op aanvraag)",
          ],
        },
      },
      {
        type: "Interieur",
        price: {
          one: "149,95",
          duur: "90",
        },
        pros: [
          "✔️ In het ‘Deluxe Combi Pakket’ krijg je alle vinkjes van het ‘Deluxe Interieur en Exterieur Pakket’ gecombineerd in één pakket!",
        ],
        extras: {
          interior: [
            "Honden haren verwijderen (Optie; + €50,-)",
            "Ozonbehandeling (Optie: + € 95,-)",
            "Schimmel behandeling  (Optie: + € 105,-)",
            "Vlekken in het plafond  (Optie: + € 75,-)",
            "Geur behandeling  (Optie: + € 85,-)",
          ],
          exterior: [
            "Motorkap reiniging  (Optie: + € 50,-)",
            "Polijsten koplampen (Optie: + € 50,-)",
            "Polijsten chromendelen (Optie: + € 90,-)",
          ],
          detailing: [
            "Polijsten geheel voertuig in 1 stap – krassen verwijderen (50%) + swirls verwijderen (75%) (Optie: + € 180,-)",
            "Polijsten geheel voertuig in 2 stappen – krassen verwijderen (80%) + swirls verwijderen (85%) (Optie: + € 295,-)",
            "Polijsten geheel voertuig in 3 stappen – krassen verwijderen (95%) + swirls verwijderen (95%) (Optie: + € 425,-)",
            "Lakverzegeling  (Optie: op aanvraag)",
            "Glascoating  (Optie: op aanvraag)",
          ],
        },
      },
    ],
  },
};

const AutoCare = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState();
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const color = "#2998ff";

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
          <AutoTab className={""} onClick={() => handleTabChange("Standard")}>
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
                    {/* <Button>Get Started</Button> */}
                  </CardInfo>
                  <CardDetails>
                    {/* {pkg?.pros.map((pro) => {
                      return (
                        <ListItem>
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
                    })} */}
                    <ListItem>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: color,
                          transform: "translateY(2px)",
                          marginRight: "1rem",
                        }}
                      />
                      100 API request
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: color,
                          transform: "translateY(2px)",
                          marginRight: "1rem",
                        }}
                      />
                      100 API request
                    </ListItem>
                    <ListItem>
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{
                          color: color,
                          transform: "translateY(2px)",
                          marginRight: "1rem",
                        }}
                      />
                      100 API request
                    </ListItem>
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
