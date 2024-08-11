import React from "react";
import { Typography, Box } from "@mui/material";
import { Container, LeftSection, RightSection } from "../mui/ReviewSection";
import TyreSvg from "./TyreSvg";
import ReviewSlider from "./ReviewSlider";

export default function Reviews() {
  return (
    <Container>
      <LeftSection>
        <TyreSvg />
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography variant="h1" sx={{ fontWeight: "bold" }} align="center">
            Review of Customers
          </Typography>
        </Box>
      </LeftSection>
      <RightSection>
        <ReviewSlider />
      </RightSection>
    </Container>
  );
}
