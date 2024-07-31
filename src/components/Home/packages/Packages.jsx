import React from "react";
import { Typography, Box } from "@mui/material";
// import styles from "./Packages.module.css";
import { HomePkgsBox, HomePkgsInBox } from "../../mui/HomePkgs";
import Slider3D from "./Slider3D";

export default function Packages() {
  return (
    <HomePkgsBox sx={{ flexDirection: "column", alignItems: "center" }}>
      <HomePkgsInBox sx={{ flexDirection: "column" }}>
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
    </HomePkgsBox>
  );
}
