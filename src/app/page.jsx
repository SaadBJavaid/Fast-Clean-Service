"use client";
import Footer from "../components/Home/footer/Footer";
import { HomeContainer, HomePkgsInBox } from "../components/mui/HomePkgs";
import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Testimonials from "../components/Home/testimonials/Testimonials";
import ServicesOverview from "../components/Home/ServicesOverview/ServicesOverview";
import About from "../components/Home/about/About";
import Services from "../components/Home/services/Services";
import { Box, styled } from "@mui/material";
import HeadingLinesAnimation from "../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import React from "react";
import CallToActionBox from "../components/Home/actioncard/CallToActionBox";
import Navbar from "../components/navbar/Navbar";

import { DecorativeBackgroundImage, DecorativeItemBoxes } from "../components/Decorative/ItemBoxes";
import RadialCircle from "../components/Decorative/RadialCircle";
import Cuts from "../../public/decorative/cuts.png";
import Image from "next/image";
import FadeIn from "../components/Animations/FadeIn";

export default function Home() {
  return (
    <>
      <Navbar />

      <HomeContainer
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            zIndex: 10,
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              left: "5%",
              zIndex: 1,
              width: "600px",
              height: "500px",
              backgroundImage: "url('/fogg.png')",
              backgroundSize: "contain",
              opacity: 0.1,
              transform: "rotate(-10deg)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "30%",
              right: "10%",
              zIndex: 1,
              width: "700px",
              height: "600px",
              backgroundImage: "url('/fogg.png')",
              backgroundSize: "contain",
              opacity: 0.1,
              transform: "rotate(5deg)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "15%",
              zIndex: 1,
              width: "800px",
              height: "600px",
              backgroundImage: "url('/fogg.png')",
              backgroundSize: "contain",
              opacity: 0.1,
              transform: "rotate(-15deg)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              right: "5%",
              zIndex: 1,
              width: "600px",
              height: "500px",
              backgroundImage: "url('/fogg.png')",
              backgroundSize: "contain",
              opacity: 0.1,
              transform: "rotate(0deg)",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: "85%",
              left: "5%",
              zIndex: 1,
              width: "800px",
              height: "600px",
              backgroundImage: "url('/fogg.png')",
              backgroundSize: "contain",
              opacity: 0.1,
              transform: "rotate(5deg)",
            }}
          />

          <AnimatedHomeContent />
          <About />
          <Stats />

          <DecorativeSpacer />

          <ServicesOverview />

          <DecorativeSpacer reversed />

          <HomePkgsInBox sx={{ margin: "0 auto" }}>
            <Services />
          </HomePkgsInBox>

          <DecorativeSpacer />

          <HomePkgsInBox sx={{ margin: "0 auto" }}>
            <Box
              sx={{
                margin: "0 auto",
                width: "50%",
              }}
            >
              <HeadingLinesAnimation
                sx={{
                  margin: "0 auto",
                  textAlign: "center",
                }}
              >
                HAPPY CLIENTS
              </HeadingLinesAnimation>
            </Box>

            <Testimonials />
            <DecorativeBackgroundImage top="-50rem" right="-40rem" width="92rem" height="68.2rem" />
            <DecorativeBackgroundImage top="80rem" left="-40rem" width="54rem" height="68rem" flip />
          </HomePkgsInBox>

          <CallToActionBox />
        </Box>
      </HomeContainer>

      <div style={{ zIndex: 10, position: "relative" }}>
        <Footer />
      </div>
    </>
  );
}

const DecorativeSpacer = ({ reversed }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: reversed ? "row-reverse" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "11.1rem 6.6rem 5rem",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <RadialCircle top={"-22rem"} right={"-22rem"} />
        <FadeIn direction={reversed ? "right" : "left"} distance={500} duration={1}>
          <DecorativeItemBoxes
            text="Get Started"
            sx={{
              transform: reversed ? "translateX(-4.2rem)" : "translateX(4.2rem)",
            }}
            reversed={reversed}
          />
        </FadeIn>
        <FadeIn direction={reversed ? "right" : "left"} distance={100} duration={1} delay={0.5}>
          <DecorativeItemBoxes text="100% Satisfaction" reversed={reversed} />
        </FadeIn>
      </Box>
      <FadeIn direction={reversed ? "left" : "right"} distance={100} duration={1.5}>
        <Image
          src={Cuts}
          alt="Decorative Cuts"
          width={388}
          height={-1}
          style={{
            transform: reversed ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </FadeIn>
    </Box>
  );
};

