import React from "react";
import { Typography, Box } from "@mui/material";
import { Container, LeftSection, RightSection } from "../mui/ReviewSection";
import TyreSvg from "./TyreSvg";
import ReviewSlider from "./ReviewSlider";
import { SectionHeading } from "../mui/HomePkgs";
import { WidthFull } from "@mui/icons-material";

export default function Reviews() {
  return (
    <Container>
      <LeftSection>
        <TyreSvg />
        <Box sx={{ position: "relative", zIndex: 1, display: "flex" }}>
          <SectionHeading variant="h1" sx={{ fontWeight: "bold" }} align="center">
            DRIVING A DIRTY CAR IS A THING OF THE PAST
          </SectionHeading>
        </Box>
      </LeftSection>
      <RightSection>
        <ReviewSlider />
      </RightSection>
    </Container>
  );
}
