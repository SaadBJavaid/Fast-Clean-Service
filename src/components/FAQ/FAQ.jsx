import React from "react";
import {
  ContainerWrapper,
  LeftSection,
  RightSection,
  ServicesItemHeading,
} from "../mui/AboutUsPage";

import Image from "next/image"; // Import Image from next/image
import Questions from "./Questions";

export default function FAQ() {
  return (
    <ContainerWrapper>
      <LeftSection>
        <Questions />
      </LeftSection>
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
