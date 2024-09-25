import Footer from "../components/Home/footer/Footer";
import { HomeContainer } from "../components/mui/HomePkgs";
import Stats from "../components/Home/stats/Stats";
import AnimatedHomeContent from "../components/Home/AnimatedHomeContent/AnimatedHomeContent";
import Testimonials from "../components/Home/testimonials/Testimonials";
import ServicesOverview from "../components/Home/ServicesOverview/ServicesOverview";
import About from "../components/Home/about/About";
import Services from "../components/Home/services/Services";
import { Box } from "@mui/material";
import HeadingLinesAnimation from "../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import React from "react";

export default function Home() {
    return (
        <HomeContainer
            sx={{
                position: "relative",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "5%",
                    left: "10%",
                    zIndex: 1,
                    width: "200px",
                    height: "150px",
                    backgroundImage: "url('/zigzag.png')",
                    backgroundSize: "contain",
                    opacity: 0.6,
                    transform: "rotate(15deg)",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "20%",
                    left: "40%",
                    zIndex: 1,
                    width: "250px",
                    height: "180px",
                    backgroundImage: "url('/fogg.png')",
                    backgroundSize: "contain",
                    opacity: 0.5,
                    transform: "rotate(-10deg)",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "60%",
                    left: "20%",
                    zIndex: 1,
                    width: "300px",
                    height: "200px",
                    backgroundImage: "url('zigzag.png')",
                    backgroundSize: "contain",
                    opacity: 0.4,
                    transform: "rotate(25deg)",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    top: "70%",
                    right: "15%",
                    zIndex: 1,
                    width: "220px",
                    height: "170px",
                    backgroundImage: "url('fogg.png')",
                    backgroundSize: "contain",
                    opacity: 0.5,
                    transform: "rotate(-5deg)",
                }}
            />

            <Box
                sx={{
                    backgroundColor: "primary.main",
                    zIndex: 10,
                    position: "relative",
                }}
            >
                <AnimatedHomeContent />
                <About />
                <Stats />
                <ServicesOverview />
                <Services />
                <Box sx={{ alignItems: "center", justifyItems: "center", width: "50%" }}>
                <HeadingLinesAnimation sx={{ alignSelf: "center", marginLeft: "3rem" }}>HAPPY CLIENTS</HeadingLinesAnimation>
                </Box>
                    <Testimonials />
            </Box>
        </HomeContainer>
    );
}
