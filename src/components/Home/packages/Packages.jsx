import React from "react";
import { Typography, Box } from "@mui/material";
// import styles from "./Packages.module.css";
import { PackagesSection, HomePkgsInBox } from "../../mui/HomePkgs";
import Slider3D from "./Slider3D";

export default function Packages() {
  return (
    <PackagesSection sx={{ flexDirection: "column", alignItems: "center" }}>
      <HomePkgsInBox sx={{ flexDirection: "column", maxWidth: "100%" }}>
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: "6rem !important",
              alignItems: "center",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Our Packages
          </Typography>
        </Box>

        <Slider3D />
      </HomePkgsInBox>
    </PackagesSection>
  );
}
