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

import { DecorativeItemBoxes } from "../components/Decorative/ItemBoxes";
import RadialCircle from "../components/Decorative/RadialCircle";
import Cuts from "../../public/decorative/cuts.png";
import Image from "next/image";

const DecorativeBackgroundImage = styled(Box)(({ theme, top, left, right, bottom }) => ({
  position: "absolute",
  top: top || null,
  left: left || null,
  bottom: bottom || null,
  right: right || null,
  zIndex: 0,
  backgroundImage: "url('/Vector.svg')",
}));

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
            <DecorativeBackgroundImage bottom="120%" right="-80%" width="100%" height="80%" />
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
        <DecorativeItemBoxes
          text="Get Started"
          sx={{
            transform: reversed ? "translateX(-4.2rem)" : "translateX(4.2rem)",
          }}
        />
        <DecorativeItemBoxes text="100% Satisfaction" />
      </Box>
      <Image
        src={Cuts}
        alt="Decorative Cuts"
        width={388}
        height={-1}
        style={{
          transform: reversed ? "scaleX(-1)" : "scaleX(1)",
        }}
      />
    </Box>
  );
};

