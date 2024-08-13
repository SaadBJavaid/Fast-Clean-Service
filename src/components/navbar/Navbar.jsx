"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "../../app/contexts/themeContext";
import styles from "./Navbar.module.css";
import Image from "next/image";
import stylesLogo from "../../app/Logo.module.css";
import { Menu, MenuItem, IconButton, List, ListItem } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import CTA from "../../components/Home/CTA/CTA";

import UserMenu from "./Menu";

const Navbar = () => {
  const { data: session } = useSession();
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const anchorEl = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuToggle = (event) => {
    setMenuOpen((prev) => !prev);
  };

  const handleUserMenuToggle = (event) => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleUserMenuClose = () => {
    setUserMenuAnchor(null);
    setUserMenuOpen(false);
  };

  const handleClose = () => {
    setMenuAnchor(null);
    setMenuOpen(false);
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

  return (
    <>
      <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles["navbar-left"]}>
          <IconButton
            onClick={handleMenuToggle}
            sx={{ fontSize: "2rem", textTransform: "uppercase" }}
          >
            {menuOpen ? (
              ""
            ) : (
              <div className={styles.menuIcon}>
                <span
                  style={{
                    backgroundColor: theme.palette.primary.contrastText,
                  }}
                ></span>
                <span
                  style={{
                    backgroundColor: theme.palette.primary.contrastText,
                  }}
                ></span>
                <span
                  style={{
                    backgroundColor: theme.palette.primary.contrastText,
                  }}
                ></span>
              </div>
            )}
            {!menuOpen ? "Menu" : ""}
          </IconButton>
          <div className={styles["navbar-center"]}>
            <div className={stylesLogo.logoContainer}>
              <Image
                src="/logo.png"
                alt="logo"
                height={50}
                width={50}
                className={stylesLogo.logoImage}
              />
            </div>
          </div>
        </div>
        <div className={styles["navbar-right"]}>
          <IconButton onClick={handleUserMenuToggle} ref={anchorEl}>
            <AccountCircleIcon
              sx={{
                fontSize: "40px",
                position: "relative",
              }}
            />
            <Menu
              open={userMenuOpen}
              anchorEl={anchorEl.current}
              onClose={handleUserMenuToggle}
              className={styles.userMenu}
            >
              <MenuItem
                onClick={handleUserMenuClose}
                className={styles.menuItem}
              >
                <Link href="/login">Login</Link>
              </MenuItem>
              <MenuItem
                onClick={handleUserMenuClose}
                className={styles.menuItem}
              >
                <Link href="/register">Register</Link>
              </MenuItem>
            </Menu>
          </IconButton>
          <div>
            <CTA scrolled={scrolled} />
          </div>
        </div>
      </div>
      <UserMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
};

export default Navbar;
