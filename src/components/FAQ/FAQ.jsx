import React from "react";
import {
  ContainerWrapper,
  LeftSection,
  RightSection,
  ServicesItemHeading,
} from "../mui/AboutUsPage";
import { HomePkgsBox, HomePkgsInBox } from "../mui/HomePkgs";

import Image from "next/image"; // Import Image from next/image
import Questions from "./Questions";
import { Box } from "@mui/material";

export default function FAQ() {
  return (
    <HomePkgsBox sx={{ position: "relative", marginTop: "3rem" }}>
      <HomePkgsInBox sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <LeftSection>
            <Questions />
          </LeftSection>
        </Box>
      </HomePkgsInBox>
      <RightSection>
        <Image
          src="/car.jpg" // Replace with the path to your image
          alt="Right Side Image"
          // width={900}
          // height={900}
          layout="fill" // Make the image fill the container
          objectFit="cover" // Ensure the image covers the container without distortion
        />
      </RightSection>
    </HomePkgsBox>
  );
}
