import React from "react";
import ContactMain from "./ContactMain";
import { Typography } from "@mui/material";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";
import MapComponent from "../../components/Contact/MapComponent";
import { HomePkgBox, HomePkgsBox, HomePkgsInBox } from "../../components/mui/HomePkgs";

export default function page() {
  return (
    <>
      <HomePkgBox
        sx={{
          paddingTop: "12rem",
        }}
      >
        <ContactMain />
      </HomePkgBox>
    </>
  );
}
