"use client";
import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Container, LeftSection, RightSection } from "../mui/ReviewSection";
import TyreSvg from "./TyreSvg";
import ReviewSlider from "./ReviewSlider";
import { HomePkgsBox, HomePkgsInBox, SectionHeading } from "../mui/HomePkgs";

export default function Reviews() {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 900);
    };

    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize); // Listen for window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
      <HomePkgsBox>
        <HomePkgsInBox
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              flexDirection: isMobileView ? "column" : "row", // Switch to column on small screens
              alignItems: "center",
              width: "100%",
            }}
        >
          <LeftSection sx={{ marginBottom: isMobileView ? "20px" : "0" }}>
            <TyreSvg />
            <Box sx={{ position: "relative", zIndex: 1, display: "flex" }}>
              <SectionHeading
                  variant="h1"
                  sx={{ fontWeight: "bold", textAlign: "center"}}
              >
                DRIVING A DIRTY CAR IS A THING OF THE PAST
              </SectionHeading>
            </Box>
          </LeftSection>

          <RightSection
              sx={{
                width: isMobileView ? "80%" : "100%", // Limit the size for mobile view
              }}
          >
            <ReviewSlider />
          </RightSection>
        </HomePkgsInBox>
      </HomePkgsBox>
  );
}
