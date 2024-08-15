// src/components/Footer/Footer.jsx
"use client";
import React from "react";
import { Container, Typography, Box, Link, IconButton, styled } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import styles from "./Footer.module.css";
import SocialsDiv from "./SocialsDiv";
import { useTheme } from "../../../app/contexts/themeContext";
import { Badge } from "../../mui/HomePkgs";


export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer
      style={{
        "--color-accent": theme.palette.primary.accent,
        backgroundColor: theme.palette.mode === "light" ? "#eeedeb" : "#141414",
        color: theme.palette.mode === "light" ? `#212121` : "#fff",
      }}
      className={styles.footer}
    >
      <Container>
        <Box className={styles.row}>
          <Box className={styles.footerCol}>
            <Typography variant="h6" className={styles.heading}>
              Company
            </Typography>
            <Box component="ul" className={styles.list}>
              <Box component="li">
                <Link href="/" className={styles.link}>
                  Home
                </Link>
              </Box>
              <Box component="li">
                <Link href="/aboutus" className={styles.link}>
                  About Us
                </Link>
              </Box>
              <Box component="li">
                <Link href="/contact" className={styles.link}>
                  Contact Us
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className={styles.footerCol}>
            <Typography variant="h6" className={styles.heading}>
              Services
            </Typography>
            <Box component="ul" className={styles.list}>
              <Box component="li">
                <Link href="/fleet" className={styles.link}>
                  FleetCare Pro
                </Link>
              </Box>
              <Box component="li">
                <Link href="/autocare" className={styles.link}>
                  Anywhere AutoCare
                </Link>
              </Box>
              <Box component="li">
                <Link href="/subscribe" className={styles.link}>
                  Subscription Plans
                </Link>
              </Box>
              <Box component="li" sx={{ display: "flex", alignItems: "center", width: "auto" }}>
                <p disabled href="#" className={styles.disabled}>
                  Store
                </p>
                <Badge>Coming Soon!</Badge>
              </Box>
            </Box>
          </Box>
          <Box className={styles.footerCol}>
            <Typography variant="h6" className={styles.heading} sx={{ mb: 4 }}>
              Follow Us
            </Typography>
            <SocialsDiv />
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
