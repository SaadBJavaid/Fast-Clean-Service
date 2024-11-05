import React from "react";
import {LeftSection, RightSection,} from "../mui/AboutUsPage";
import {HomePkgsBox, HomePkgsInBox} from "../mui/HomePkgs";

import Image from "next/image"; // Import Image from next/image
import Questions from "./Questions";
import {Box} from "@mui/material";

export default function FAQ() {
  return (
    <HomePkgsBox sx={{ position: "relative", marginTop: "3rem", padding: "0 3rem" }}>
      <HomePkgsInBox sx={{
          display: "flex",
          '@media (max-width: 1150px)': {
              width: '100%',
          },
      }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
          <LeftSection>
            <Questions />
          </LeftSection>
        </Box>
      </HomePkgsInBox>
      <RightSection sx={{ height: "auto" }}>
        <Image
          src="/car.jpg"
          alt="Right Side Image"
          // width={900}
          // height={900}
          layout="fill"
          objectFit="cover"
        />
      </RightSection>
    </HomePkgsBox>
  );
}
