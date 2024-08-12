import React from "react";
import {
  ContainerWrapper,
  LeftSection,
  RightSection,
  ServicesItemHeading,
} from "../mui/AboutUsPage";

import Image from "next/image"; // Import Image from next/image
import Questions from "./Questions";
import { Box } from "@mui/material";

export default function FAQ() {
  return (
    <ContainerWrapper>
      <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <LeftSection>
          <Questions />
        </LeftSection>
      </Box>
      <RightSection>
        <Image
          src="/car.jpg" // Replace with the path to your image
          alt="Right Side Image"
          layout="fill" // Make the image fill the container
          objectFit="cover" // Ensure the image covers the container without distortion
        />
      </RightSection>
    </ContainerWrapper>
  );
}
