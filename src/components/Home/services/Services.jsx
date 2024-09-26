import React from "react";
import { Typography, Box, Divider, styled } from "@mui/material";
// import Location from "../../AnimatedSvgs/Location";
// import Clock from "../../AnimatedSvgs/Clock";
// import Tick from "../../AnimatedSvgs/Tick";
// import Safe from "../../AnimatedSvgs/Safe";
// import Appointment from "../../AnimatedSvgs/Appointment";
import HeadingLinesAnimation from "../HeadingLinesAnimation/HeadingLinesAnimation";
import { HomePkgBox } from "../../mui/HomePkgs";
import { useTheme } from "../../../contexts/themeContext";
import ThreeDComponent from "./ThreeDComponent";

import CalendarIcon from "../../../../public/decorative/Calendar-Time--Streamline-Tabler.svg";
import ClockIcon from "../../../../public/decorative/Clock-Hour-4--Streamline-Tabler.svg";
import GroupIcon from "../../../../public/decorative/Group 29.svg";
import UserIcon from "../../../../public/decorative/User-Edit--Streamline-Tabler.svg";
import MapIcon from "../../../../public/decorative/Map-Pin--Streamline-Tabler.svg";
import LeafIcon from "../../../../public/decorative/Leaf--Streamline-Tabler.svg";
import Image from "next/image";

export const ServicesDivider = styled(Divider)(({ theme }) => ({
  background: "linear-gradient(to top, transparent 0%, black 50%, transparent 100%)",
  height: "60px",
  margin: "2rem 3rem",
}));

export default function Services() {
  const { theme } = useTheme();

  return (
    <HomePkgBox sx={{ margin: "5rem auto 16.8rem", paddingBottom: "7.5rem", width: "100%" }}>
      <Box sx={{ width: "50%", margin: "0 auto" }}>
        <HeadingLinesAnimation text="WHY CHOOSE US" sx={{ width: "50%" }} />
      </Box>
      <Box sx={{ margin: "0 auto", zIndex: 10 }}>
        <ThreeDComponent modelUrl="/models/bmw_m5_cs/untitled5.gltf" />
      </Box>

      <Box
        sx={{
          backgroundColor: theme.palette.mode === "dark" ? "black" : "white",
          zIndex: "1",
          padding: "4rem",
          border: `1px solid ${theme.palette.mode === "dark" ? "#555" : "#ccc"}`,
          borderRadius: "32px",
          maxWidth: "100%",
          margin: "0 auto",
          backdropFilter: "blur(15px)",
          textAlign: "left", // Text is left-aligned
        }}
      >
        {/* First Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Create space between cards
            alignItems: "flex-start", // Align items to the top
            marginBottom: "6rem",
            padding: "0 10rem", // Add padding to left and right
            gap: "3rem", // Adjust gap between the dividers and cards
          }}
        >
          {/* On-Site Service */}
          <Box
            sx={{
              maxWidth: "270px",
              height: "145px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            <Image src={MapIcon} alt="Map Pin" width={40} height={40} sx={{ marginBottom: "1.5rem" }} />
            {/* <Location sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} /> */}
            <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>On-Site Service</Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
              Our experienced professionals come to you with our own material.
            </Typography>
          </Box>

          <ServicesDivider orientation="vertical" variant="middle" flexItem />

          {/* Time Efficiency */}
          <Box
            sx={{
              maxWidth: "270px",
              height: "145px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            {/* <Clock sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} /> */}
            <Image src={ClockIcon} alt="Map Pin" width={40} height={40} sx={{ marginBottom: "1.5rem" }} />

            <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Time Efficiency</Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
              Top-quality mobile steam cleaning that saves you time.
            </Typography>
          </Box>

          <ServicesDivider orientation="vertical" variant="middle" flexItem />

          {/* Open 7 Days */}
          <Box
            sx={{
              maxWidth: "270px",
              height: "145px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            {/* <Appointment sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} /> */}
            <Image src={CalendarIcon} alt="Map Pin" width={40} height={40} sx={{ marginBottom: "1.5rem" }} />
            <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Open 7 Days a Week</Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>Get in touch with us through various channels.</Typography>
          </Box>
        </Box>

        {/* Second Row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between", // Create space between cards
            alignItems: "flex-start", // Align items to the top
            padding: "0 10rem", // Add padding to left and right
            gap: "3rem", // Adjust gap between the dividers and cards
          }}
        >
          {/* Easy Booking */}
          <Box
            sx={{
              maxWidth: "270px",
              height: "145px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            {/* <Tick sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} /> */}
            <Image src={UserIcon} alt="Map Pin" width={40} height={40} sx={{ marginBottom: "1.5rem" }} />
            <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Easy Booking</Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>
              Just book the appointment online and leave the rest to us.
            </Typography>
          </Box>

          <ServicesDivider orientation="vertical" variant="middle" flexItem />

          {/* Eco-Friendly */}
          <Box
            sx={{
              maxWidth: "270px",
              height: "145px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            {/* <Safe sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} /> */}
            <Image src={LeafIcon} alt="Map Pin" width={40} height={40} sx={{ marginBottom: "1.5rem" }} />
            <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Eco-Friendly</Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>We use 3 liters per car for great results.</Typography>
          </Box>

          <ServicesDivider orientation="vertical" variant="middle" flexItem />

          {/* Interior Care */}
          <Box
            sx={{
              maxWidth: "270px",
              height: "145px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              textAlign: "left",
            }}
          >
            {/* <Clock sx={{ fontSize: "1rem", marginBottom: "2.5rem" }} /> */}
            <Image src={GroupIcon} alt="Map Pin" width={40} height={40} sx={{ marginBottom: "1.5rem" }} />
            <Typography sx={{ fontSize: "2.2rem", fontWeight: 400 }}>Interior Care</Typography>
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 300 }}>Find answers to frequently asked questions.</Typography>
          </Box>
        </Box>
      </Box>
    </HomePkgBox>
  );
}
