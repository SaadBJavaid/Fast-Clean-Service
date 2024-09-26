"use client";
import Footer from "../components/Home/footer/Footer";
import { HomeContainer, HomePkgsInBox } from "../components/mui/HomePkgs";
import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Testimonials from "../components/Home/testimonials/Testimonials";
import ServicesOverview from "../components/Home/ServicesOverview/ServicesOverview";
import About from "../components/Home/about/About";
import Services from "../components/Home/services/Services";
import { Box } from "@mui/material";
import HeadingLinesAnimation from "../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import React from "react";
import CallToActionBox from "../components/Home/actioncard/CallToActionBox";
import Navbar from "../components/navbar/Navbar";

import { DecorativeItemBoxes } from "../components/Decorative/ItemBoxes";
import RadialCircle from "../components/Decorative/RadialCircle";
import Cuts from "../../public/decorative/cuts.png";
import Image from "next/image";

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
              top: "20%",
              right: "-15rem",
              zIndex: 1,
              width: "900px",
              height: "650px",
              backgroundImage: "url('/Vector.svg')",
              backgroundSize: "contain",
              opacity: 0.7,
              transform: "rotate(90deg) scaleX(-1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "-30rem",
              zIndex: 1,
              width: "1000px",
              height: "700px",
              backgroundImage: "url('/Vector.svg')",
              backgroundSize: "contain",
              opacity: 0.7,
              transform: "rotate(-80deg) scaleX(-1)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              top: "70%",
              right: "-10rem",
              zIndex: 1,
              width: "1100px",
              height: "800px",
              backgroundImage: "url('/Vector.svg')",
              backgroundSize: "contain",
              opacity: 0.7,
              transform: "rotate(90deg) scaleX(-1)",
            }}
          />

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
          <HomePkgsInBox sx={{ margin: "0 auto" }}>
            <Services />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                marginBottom: "2rem",
                marginTop: "30rem",
              }}
            >
              <HeadingLinesAnimation
                sx={{
                  textAlign: "center",
                  width: "50%",
                }}
              >
                HAPPY CLIENTS
              </HeadingLinesAnimation>
            </Box>
            <Testimonials />
            <CallToActionBox />
          </HomePkgsInBox>
        </Box>
      </HomeContainer>

      <div style={{ zIndex: 10, position: "relative" }}>
        <Footer />
      </div>
    </>
  );
}

const DecorativeSpacer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "11.1rem 6.6rem 5rem",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <RadialCircle top={"-22rem"} right={"-22rem"} />
        <DecorativeItemBoxes
          text="Get Started"
          sx={{
            transform: "translateX(4.2rem)",
          }}
        />
        <DecorativeItemBoxes text="100% Satisfaction" />
      </Box>
      <Image src={Cuts} alt="Decorative Cuts" width={388} height={-1} />
    </Box>
  );
};

