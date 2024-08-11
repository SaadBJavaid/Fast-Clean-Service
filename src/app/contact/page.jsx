import React from "react";
import ContactMain from "./ContactMain";
import { Typography } from "@mui/material";
import HeadingLinesAnimation from "../../components/Home/HeadingLinesAnimation/HeadingLinesAnimation";

export default function page() {
  return (
    <>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "BDSans",
          fontSize: "5rem !important",
          alignItems: "center",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "160px",
          marginBottom: "20px",
        }}
      >
        <HeadingLinesAnimation text="Contact Us" />
      </Typography>
      <ContactMain />
    </>
  );
}
