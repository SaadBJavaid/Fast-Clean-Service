"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useTheme } from "../../app/contexts/themeContext";
import Image from "next/image";
import { Menu, MenuItem, IconButton, Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import UserMenu from "./Menu";
import CTA from "../../components/Home/CTA/CTA";
import ServiceDrawer from "../../components/ServiceDrawer/ServiceDrawer";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

const Navbar = () => {
    const { data: session } = useSession();
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const anchorEl = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleUserMenuToggle = () => {
        setUserMenuOpen((prev) => !prev);
    };

    const handleUserMenuClose = () => {
        setUserMenuOpen(false);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    return (
      <>
        <Box
          sx={{
            padding: scrolled ? "0px 20px" : "20px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 100,
            boxSizing: "border-box",
            backdropFilter: scrolled ? "blur(7px)" : "none",
            transition: "padding 0.4s ease",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            <IconButton
              onClick={handleMenuToggle}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <MenuIcon fontSize="large" sx={{ color: theme.palette.primary.contrastText }} />
              <Typography
                sx={{
                  color: theme.palette.primary.contrastText,
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                }}
              >
                MENU
              </Typography>
            </IconButton>
          </Box>

          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Image src="/logo.png" alt="logo" height={50} width={50} />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
            <ThemeSwitcher />
            <IconButton
              onClick={handleUserMenuToggle}
              ref={anchorEl}
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{
                fontSize: "2.5rem",
              }}
            >
              <AccountCircleIcon fontSize="inherit" />
            </IconButton>
            <Menu
              open={userMenuOpen}
              anchorEl={anchorEl.current}
              onClose={handleUserMenuToggle}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleUserMenuClose} sx={{ fontSize: "18px", padding: "10px 20px" }}>
                <Link href="/login" passHref>
                  <Typography component="a" sx={{ color: "inherit" }}>
                    Login
                  </Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleUserMenuClose} sx={{ fontSize: "18px", padding: "10px 20px" }}>
                <Link href="/register" passHref>
                  <Typography component="a" sx={{ color: "inherit" }}>
                    Register
                  </Typography>
                </Link>
              </MenuItem>
            </Menu>
            <Button
              variant="contained"
              sx={{
                marginLeft: "20px",
                backgroundColor: theme.palette.primary.accent,
                borderRadius: "50px",
                borderWidth: 0,
                boxShadow: "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
                color: "#ffffff",
                cursor: "pointer",
                display: "inline-block",
                fontFamily: "Arial, sans-serif",
                fontSize: "1rem",
                fontWeight: "bold",
                // height: "50px",
                padding: "16px 24px",
                transition: "all 200ms",
                "&:hover": {
                  backgroundColor: theme.palette.primary.accent,
                  boxShadow: "0px 0px 10px 1px rgba(0, 0, 0, 1)",
                },
                whiteSpace: "no-wrap",
              }}
              // startIcon={<BookOnlineIcon />}
              onClick={handleDrawerToggle}
            >
              BOOK NOW
            </Button>
          </Box>
        </Box>
        <ServiceDrawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle} />
        <UserMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </>
    );
};

export default Navbar;
