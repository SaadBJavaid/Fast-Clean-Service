"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useTheme } from "../../contexts/themeContext";
import Image from "next/image";
import { Menu, MenuItem, IconButton, Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import UserMenu from "./Menu";
import CTA from "../../components/Home/CTA/CTA";
// import ServiceDrawer from "../../components/ServiceDrawer/ServiceDrawer";
import LoginModal from "../../components/Login/LoginModal";
import SignUpModal from "../../components/SignUp/SignUpModal";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import { FormProvider } from "../../contexts/MultiStepFormContext";

const Navbar = () => {
    const { data: session } = useSession();
    const { theme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const anchorEl = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);

    console.log(session);

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

    const handleSignOut = () => {
        signOut();
    };

  return (
    <>
      <Box
        sx={{
            padding: scrolled
                ? { xs: "0px 10px", sm: "0px 20px" }
                : { xs: "10px 20px", sm: "20px 40px" },
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
          background: `linear-gradient(to bottom, ${
            theme.palette.mode === "light"
              ? "rgba(255, 255, 255, 0.59), rgba(255, 255, 255, 0)"
              : "rgba(47, 47, 47, 0.8), rgba(109, 109, 109, 0)"
          })`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <IconButton
            onClick={handleMenuToggle}
            sx={{
              display: "flex",
              alignItems: "center",
                gap: { xs: "5px", sm: "10px" },
                padding: { xs: "8px", sm: "12px" },
              "&:hover": { backgroundColor: "transparent" },
            }}
          >
            {!menuOpen && (
              <>
                <MenuIcon
                  fontSize="large"
                  sx={{ color: theme.palette.primary.contrastText, fontSize: { xs: "1.75rem", sm: "2rem" }}}
                />
                <Typography
                  sx={{
                    color: theme.palette.primary.contrastText,
                      fontSize: { xs: "1.5rem", sm: "2rem" },
                    fontWeight: "bold",
                    "&:hover": {
                      color: theme.palette.primary.accent,
                    },
                  }}
                >
                  MENU
                </Typography>
              </>
            )}
          </IconButton>
        </Box>

                <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
                    <Image src="/logo.png" alt="logo" height={60} width={100} />
                </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flex: 1,
          }}
        >
          <IconButton
            onClick={handleUserMenuToggle}
            ref={anchorEl}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            sx={{
                fontSize: { xs: "2.5rem", sm: "4rem" },

              "&:hover": {
                color: theme.palette.primary.accent,
              },
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
            sx={{
              transition: "transform 0.8s ease",
              transform: scrolled
                ? "translate(20px, 30px)"
                : "translate(0px, 50px)",
            }}
          >
            {!session ? (
              <>
                <MenuItem
                  onClick={handleUserMenuClose}
                  sx={{ fontSize: "18px !important", padding: "10px 20px" }}
                >
                  <Button onClick={() => setOpenLogin(true)}>
                    <Typography
                      component="a"
                      sx={{
                        color: "inherit",
                        fontSize: "18px !important",
                        fontFamily: "JakartaSans",
                      }}
                    >
                      Login
                    </Typography>
                  </Button>
                </MenuItem>
                <MenuItem
                  onClick={handleUserMenuClose}
                  sx={{ fontSize: "18px", padding: "10px 20px" }}
                >
                  <Button onClick={() => setOpenSignup(true)}>
                    <Typography
                      component="a"
                      sx={{
                        color: "inherit",
                        fontSize: "18px !important",
                        fontFamily: "JakartaSans",
                      }}
                    >
                      Register
                    </Typography>
                  </Button>
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem
                  onClick={handleUserMenuClose}
                  sx={{ fontSize: "18px", padding: "10px 20px" }}
                >
                  <Link href="/" passHref>
                    <Typography
                      component="a"
                      sx={{
                        color: "inherit",
                        fontSize: "18px !important",
                        fontFamily: "JakartaSans",
                      }}
                    >
                      {session?.user?.email}
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleUserMenuClose}
                  sx={{ fontSize: "18px", padding: 0 }}
                >
                  <Button
                    sx={{ display: "block", width: "100%" }}
                    onClick={handleSignOut}
                  >
                    <Typography
                      // component="a"
                      sx={{
                        color: "inherit",
                        fontSize: "18px !important",
                        fontFamily: "JakartaSans",
                        // backgroundColor: "red",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      Logout
                    </Typography>
                  </Button>
                </MenuItem>
              </>
            )}
            <MenuItem sx={{ fontSize: "18px", padding: "10px 20px" }}>
              <ThemeSwitcher />
            </MenuItem>
          </Menu>
          <Button
            variant="contained"
            sx={{
                marginLeft: { xs: "10px", sm: "20px" },
              backgroundColor: theme.palette.primary.accent,
              borderRadius: "50px",
              borderWidth: 0,
              boxShadow:
                "rgba(25, 25, 25, 0.04) 0 0 1px 0, rgba(0, 0, 0, 0.1) 0 3px 4px 0",
              color: "#ffffff",
              cursor: "pointer",
              display: "inline-block",
              // fontFamily: "Arial, sans-serif",
                padding: { xs: "12px 20px", sm: "16px 24px" },
                fontSize: { xs: "1.2rem", sm: "2rem" },
              fontWeight: "bold",
              // height: "50px",
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
      {/* <ServiceDrawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
      /> */}
      <UserMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
      {openSignup && <SignUpModal setOpenSignup={setOpenSignup} />}
    </>
  );
};

export default Navbar;
