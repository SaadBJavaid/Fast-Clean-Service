"use client";
import { Box, Grid, Typography, IconButton, Collapse } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTheme } from "../../../contexts/themeContext";
import { useValidation } from "../../../contexts/ValidationContext";
import { styled } from "@mui/material";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";

const StyledImage = styled(Image)(({}) => ({
  width: "194.4px",
  height: "104.4px",
  objectFit: "cover",
  borderRadius: "7px",
  boxShadow: "0px 4px 9.6px rgba(0, 0, 0, 0.25)",

  "@media (max-width: 600px)": {
    padding: "0.6rem 0.6rem 0",
    width: "100%",
    objectFit: "cover",
    height: "auto",
    maxHeight: "9.3rem",
  },
}));

const packages = [
  {
    name: "On Location",
    image: "/g1.jpg",
    tagline: "We'll come to you, wherever you are.",
  },
  {
    name: "On Branch",
    image: "/g4.jpg",
    tagline: "Come and visit our branch, Samsonweg 1A, Wormerveer.",
  },
];

const LocationSelection = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [infoVisible, setInfoVisible] = useState({}); // Store info visibility for each option
  const { theme } = useTheme();
  const { updateValidation } = useValidation();

  useEffect(() => {
    updateValidation(!!selectedOption);
  }, [selectedOption, updateValidation]);

  const handlePackageSelect = (packageName) => {
    setSelectedOption(packageName);
  };

  const toggleInfo = (packageName) => {
    setInfoVisible((prev) => ({
      ...prev,
      [packageName]: !prev[packageName],
    }));
  };

  return (
      <Box
          sx={{
            maxWidth: "550px",
            margin: "auto",
            justifyContent: "center",
            mt: 2,
            "@media (max-width: 600px)": {
              width: "100%",
              padding: "0 2rem",
            },
          }}
      >
        <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
        >
          {packages.map((pkg) => (
              <Grid
                  item
                  xs={6}
                  key={pkg.name}
                  onClick={() => handlePackageSelect(pkg.name)}
              >
                <Box
                    sx={{
                      cursor: "pointer",
                      padding: "1rem",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      backgroundColor: theme.palette.primary.main,
                      border: `${
                          selectedOption === pkg.name ? "2px" : "1px"
                      } solid ${selectedOption === pkg.name ? "#1C79CC" : "#A5A5A5"}`,
                      boxSizing: "border-box",
                      transformOrigin: "center center",
                      boxShadow: "0px 4px 12.3px 0px #0000002B",
                      position: "relative",
                      width: "217px",

                      "@media (max-width: 600px)": {
                        borderRadius: "10px",
                        padding: 0,
                        marginTop: "-1.5rem",
                        marginBottom: "9.9rem",

                        "& img": {
                          width: "100%",
                        },
                      },
                    }}
                >
                  <StyledImage src={pkg.image} alt={pkg.name} width={194.4} height={104.4} />
                  <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                      }}
                  >
                    <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "Unbounded",
                          fontSize: "12px",
                          fontWeight: "light",
                          color:
                              theme.palette.mode === "dark" ? "#fff" : "#232E4A",
                          padding: "1rem 0",
                          textAlign: "center",

                          "@media (max-width: 600px)": {
                            fontSize: "8px",
                            fontWeight: "300",
                            lineHeight: "0.992rem",
                            padding: "0.8rem 0",
                          },
                        }}
                    >
                      {pkg.name}
                    </Typography>
                    <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleInfo(pkg.name);
                        }}
                        sx={{
                          position: "absolute",
                          right: 0,
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                    >
                      <InfoIcon sx={{ fontSize: "16px" }} />
                    </IconButton>
                  </Box>
                  <Collapse in={infoVisible[pkg.name]}>
                    <Typography
                        variant="body2"
                        sx={{
                          fontSize: "10px",
                          color: theme.palette.mode === "dark" ? "#FFFFFF" : "#232E4A",
                          padding: "0.5rem",
                          textAlign: "center",
                          backgroundColor: theme.palette.background.paper,
                          borderRadius: "5px",
                          boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
                          marginTop: "0.5rem",
                        }}
                    >
                      {pkg.tagline}
                    </Typography>
                  </Collapse>
                </Box>
              </Grid>
          ))}
        </Grid>
      </Box>
  );
};

export default LocationSelection;
