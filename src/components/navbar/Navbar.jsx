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
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const userMenuRef = useRef(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isPackageTypeOpen, setIsPackageTypeOpen] = useState(false);
  const [selectedPackageType, setSelectedPackageType] = useState("");

  const handleService = () => {
    setIsServiceOpen(true);
    setIsPackageTypeOpen(false); // Reset package type view when opening services
    setSelectedPackageType(""); // Reset selection
  };

  const handlePackageType = (type) => {
    setSelectedPackageType(type);
    setIsPackageTypeOpen(true);
  };

  const handleBack = () => {
    if (isPackageTypeOpen) {
      setIsPackageTypeOpen(false); // Go back to service selection
      setSelectedPackageType("");
    } else if (isServiceOpen) {
      setIsServiceOpen(false); // Close services view
    }
  };

  const handleMenuToggle = (event) => {
    setMenuAnchor(event.currentTarget);
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      // Reset state when opening menu
      setIsServiceOpen(false);
      setIsPackageTypeOpen(false);
      setSelectedPackageType("");
    }
  };

  const handleUserMenuToggle = (event) => {
    if (userMenuOpen) {
      handleUserMenuClose(); // Close if already open
    } else {
      setUserMenuAnchor(event.currentTarget);
      setUserMenuOpen(true); // Open if not open
    }
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
    window.addEventListener("click", (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        handleUserMenuClose();
      }
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", handleUserMenuClose);
    };
  }, [userMenuOpen]);

  const packageOptions = {
    Standard: ["Standard Interior", "Standard Exterior", " Standard Colombi"],
    Deluxe: ["Deluxe Interior", "Deluxe Exterior", "Deluxe Colombi"],
    Premium: ["Premium Interior", "Premium Exterior", "Premium Colombi"],
  };

  return (
    <div className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles["navbar-left"]}>
        <IconButton onClick={handleMenuToggle} sx={{ fontSize: "2rem", textTransform: "uppercase" }}>
          {menuOpen ? (
            ""
          ) : (
            <div className={styles.menuIcon}>
              <span style={{ backgroundColor: theme.palette.primary.contrastText }}></span>
              <span style={{ backgroundColor: theme.palette.primary.contrastText }}></span>
              <span style={{ backgroundColor: theme.palette.primary.contrastText }}></span>
            </div>
          )}
          {!menuOpen ? "Menu" : ""}
        </IconButton>
        <div className={styles["navbar-center"]}>
          <div className={stylesLogo.logoContainer}>
            <Image src="/logo.png" alt="logo" height={50} width={50} className={stylesLogo.logoImage} />
          </div>
        </div>
      </div>
      <div className={styles["navbar-right"]}>
        <IconButton onClick={handleUserMenuToggle} ref={userMenuRef}>
          <AccountCircleIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <div style={{ marginTop: scrolled ? "20px" : "" }}>
          <CTA scrolled={scrolled} />
        </div>
      </div>

      <Menu anchorEl={userMenuAnchor} open={userMenuOpen} onClose={handleUserMenuClose} className={styles.userMenu}>
        <MenuItem onClick={handleUserMenuClose} className={styles.menuItem}>
          <Link href="/login">Login</Link>
        </MenuItem>
        <MenuItem onClick={handleUserMenuClose} className={styles.menuItem}>
          <Link href="/register">Register</Link>
        </MenuItem>
      </Menu>

      <UserMenu
        menuOpen={menuOpen}
        isServiceOpen={isServiceOpen}
        isPackageTypeOpen={isPackageTypeOpen}
        packageOptions={packageOptions}
        selectedPackageType={selectedPackageType}
        handleBack={handleBack}
        handleClose={handleClose}
        handlePackageType={handlePackageType}
        handleService={handleService}
        pathname={pathname}
        styles={styles}
      />
    </div>
  );
};

export default Navbar;




