import { Box, Input, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const LiscencePlate = ({ plateNumber, setPlateNumber }) => {
  return (
    <Box>
      <Box
        sx={{
          height: "150px",
          width: "100%",
          maxWidth: "50%",
          margin: "auto auto",
          backgroundColor: "yellow",
          display: "grid",
          gridTemplateColumns: "20% 80%",
          borderRadius: "10px",
          boxShadow: "0 0 10px black inset",
          padding: "0.4rem",
          position: "relative",

          boxShadow: "0px 0px 50px #333333",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "calc(100% - 0.8rem)",
            height: "calc(100% - 0.8rem)",
            borderRadius: "10px",
            border: "3px solid black",
            margin: "0.4rem",
          }}
        ></Box>

        <Box
          sx={{
            backgroundColor: "#003599",
            width: "100%",
            height: "100%",
            borderRadius: "10px 0 0 10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            width={120}
            height={-1}
            alt="logo"
            src="/eu_flag.jpg"
            style={{
              width: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "auto 0",
            alignItems: "center",
            padding: "0 2rem",
            textDecoration: "uppercase",
          }}
        >
          <Input
            sx={{
              fontSize: "7rem",
              fontfamily: "BDSans, Roboto !important",
              fontWeight: "bold",
              color: "#000",
            }}
            placeholder="AA-1234"
            value={plateNumber}
            onChange={(e) => {
              console.log("e.target.value", e.target.value);

              setPlateNumber(e.target.value);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LiscencePlate;
