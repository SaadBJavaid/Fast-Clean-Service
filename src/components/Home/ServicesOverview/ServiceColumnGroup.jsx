"use client";
import Image from "next/image";
import { Box, Paper, styled, Typography } from "@mui/material";
import { useTheme } from "../../../contexts/themeContext";
import { HomePkgsBox, HomePkgsInBox } from "../../mui/HomePkgs";
import FadeIn from "../../Animations/FadeIn";

export const ServiceHeading = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "4rem !important",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: "bold",
  marginBottom: "0.9rem",
}));

export const ServiceDescription = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#000000",
  maxWidth: "600px",
}));

export const ServicesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  maxWidth: "80%",
  marginBottom: "3rem",
  gap: "9.7rem",
}));

export const ServiceItemContainer = styled(Box)(({ theme }) => ({
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: "1.7rem",
  padding: "1.5rem",
  borderRadius: "1rem",
  minHeight: "auto",
  boxShadow: "none",
  backgroundColor: "transparent !important",
}));

export const ServiceItemImageContainer = styled(Box)(({ theme }) => ({
  width: "8.4rem",
  height: "8.4rem",
  borderRadius: "50%",
  border: `1px solid ${theme.palette.mode === "dark" ? "transparent" : "#c4c4c4"}`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ServiceItemImage = styled(Image)(({ theme }) => ({
  filter:
    theme.palette.mode === "dark"
      ? "invert(41%) sepia(100%) saturate(493%) hue-rotate(170deg) brightness(92%) contrast(96%)"
      : "invert(20%) sepia(13%) saturate(227%) hue-rotate(204deg) brightness(93%) contrast(91%)",
}));

export const ServiceItemHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.6rem",
  color: theme.palette.mode === "dark" ? "#fff" : "#232E4A",
  fontWeight: 500,
}));

export const ServiceItemSubheading = styled(Typography)(({ theme }) => ({
  fontSize: "1.4rem",
  color: theme.palette.mode === "dark" ? "#C2C2C2" : "#535353",
}));

export default function ServiceColumnGroup() {
  const { theme } = useTheme();

  return (
    <HomePkgsInBox sx={{ flexDirection: "column", alignItems: "center", marginBottom: "12.3rem" }}>
      <FadeIn direction="up" distance={100} duration={0.5}>
        <ServiceHeading variant={"h3"}>Anywhere Auto-Care</ServiceHeading>
      </FadeIn>
      <ServiceDescription variant="p">
        Convenient mobile car cleaning delivered directly to you. Experience professional quality care—wherever you are.
      </ServiceDescription>

      <ServicesContainer>
        <ServiceItemContainer>
          <ServiceItemImageContainer>
            <ServiceItemImage src="/locS.png" alt="On-Site Service" width={48} height={48} />
          </ServiceItemImageContainer>
          <ServiceItemHeading variant="h5">On-Site Service</ServiceItemHeading>
          <ServiceItemSubheading variant="p">
            Enjoy our services at our dedicated location, where you can relax while we take care of your vehicle.
          </ServiceItemSubheading>
        </ServiceItemContainer>

        <ServiceItemContainer>
          <ServiceItemImageContainer>
            <ServiceItemImage src="/vanS.png" alt="Mobile Service" width={48} height={48} />
          </ServiceItemImageContainer>
          <ServiceItemHeading variant="h5">Mobile Service</ServiceItemHeading>
          <ServiceItemSubheading variant="p">
            Enjoy our services at your location, where you can relax while we take care of your vehicle.
          </ServiceItemSubheading>
        </ServiceItemContainer>
      </ServicesContainer>
    </HomePkgsInBox>
  );
}
