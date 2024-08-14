"use client";
import React, { useEffect, useRef, useState } from 'react'
import { Button, ListItem, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from "../../app/contexts/themeContext";
import {
  CardContainer,
  Card,
  CardHeader,
  CardInfo,
  CardDetails,
  AutoTabContainer,
  AutoTabList,
  AutoTab,
} from "../../components/mui/AutoCarePkgs";
import { HomePkgsBox, HomePkgsInBox } from '../../components/mui/HomePkgs';
import { packages } from './data';

const Page = () => {
  const { theme } = useTheme();
  const [selectedTab, setSelectedTab] = useState("Standard");
  const headerRef = useRef(null);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const color = theme.palette.primary?.accent || "#FFC107";

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


  return (
    <HomePkgsBox sx={{ marginTop: "12rem" }}>
      <HomePkgsInBox sx={{ justifyContent: "center" }} ref={sectionRef}>
        <AutoTabContainer>
          {packages.map((pkg) => (
            <>
              <AutoTab
                className={""}
                onClick={() => { }}
              >
                <div className="tab__side tab__side--front">
                  <div className="tab__picture tab__picture--1"></div>
                  <Typography className="heading">
                    <span className="heading--span heading--span-1">{pkg.name}</span>
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
            </>
          ))}
        </AutoTabContainer>
      </HomePkgsInBox>
    </HomePkgsBox >
  )
}

export default Page