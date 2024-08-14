// src/components/Footer/Footer.jsx
"use client";
import React from "react";
import { Container, Typography, Box, Link, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import styles from "./Footer.module.css";
import SocialsDiv from "./SocialsDiv";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <Box className={styles.row}>
          <Box className={styles.footerCol}>
            <Typography variant="h6" className={styles.heading}>
              Company
            </Typography>
            <Box component="ul" className={styles.list}>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  About Us
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Our Services
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Privacy Policy
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Affiliate Program
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className={styles.footerCol}>
            <Typography variant="h6" className={styles.heading}>
              Get Help
            </Typography>
            <Box component="ul" className={styles.list}>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  FAQ
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Shipping
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Returns
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Order Status
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Payment Options
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className={styles.footerCol}>
            <Typography variant="h6" className={styles.heading}>
              Online Shop
            </Typography>
            <Box component="ul" className={styles.list}>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Watch
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Bag
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Shoes
                </Link>
              </Box>
              <Box component="li">
                <Link href="#" className={styles.link}>
                  Dress
                </Link>
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
