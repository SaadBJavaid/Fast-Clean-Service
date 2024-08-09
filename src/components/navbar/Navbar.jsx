"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTheme } from "../../app/contexts/themeContext";
import styles from "./Navbar.module.css";
import Image from "next/image";
import stylesLogo from "../../app/Logo.module.css";
import { Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";
import CTA from "../../components/Home/CTA/CTA";

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
        <IconButton onClick={handleMenuToggle} sx={{ fontSize: "1.75rem" }}>
          {menuOpen ? "" : <MenuIcon sx={{ fontSize: "1.75rem" }} />} {" Menu"}
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
        <IconButton onClick={handleUserMenuToggle} ref={userMenuRef}>
          <AccountCircleIcon sx={{ fontSize: "40px" }} />
        </IconButton>
        <div style={{ marginTop: scrolled ? "20px" : "" }}>
          <CTA scrolled={scrolled} />
        </div>
      </div>

      <Menu
        anchorEl={userMenuAnchor}
        open={userMenuOpen}
        onClose={handleUserMenuClose}
        className={styles.userMenu}
      >
        <MenuItem onClick={handleUserMenuClose} className={styles.menuItem}>
          <Link href="/login">Login</Link>
        </MenuItem>
        <MenuItem onClick={handleUserMenuClose} className={styles.menuItem}>
          <Link href="/register">Register</Link>
        </MenuItem>
      </Menu>

      <div
        className={`${styles["navbar-menu"]} ${menuOpen ? styles.open : ""}`}
      >
        <div className={styles.menuHeader}>
          {(isServiceOpen || isPackageTypeOpen) && (
            <div className={styles.backButton}>
              <IconButton onClick={handleBack} className={styles.backIcon}>
                <ArrowBackIcon sx={{ fontSize: "15px" }} />
              </IconButton>
              <span className={styles.backText}>Back</span>
            </div>
          )}
          <IconButton className={styles.closeButton} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <hr className={styles.menuSeparator} />

        <div className={styles.menuContent}>
          {isServiceOpen && isPackageTypeOpen && (
            <>
              <ul className={styles.navLinks}>
                {packageOptions[selectedPackageType].map((pkg) => (
                  <li key={pkg}>
                    <Link href="#" onClick={handleClose}>
                      {pkg}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          {isServiceOpen && !isPackageTypeOpen && (
            <>
              <ul className={styles.navLinks}>
                <li>
                  <Link href="#" onClick={() => handlePackageType("Standard")}>
                    Standard Packages <ArrowForwardIosIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => handlePackageType("Deluxe")}>
                    Deluxe Packages <ArrowForwardIosIcon />
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => handlePackageType("Premium")}>
                    Premium Packages <ArrowForwardIosIcon />
                  </Link>
                </li>
              </ul>
            </>
          )}

          {!isServiceOpen && !isPackageTypeOpen && (
            <ul className={styles.navLinks}>
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <Link
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li className={styles.navLinkWithArrow}>
                <Link
                  href="#"
                  className={pathname === "/" ? styles.active : ""}
                  onClick={handleService}
                >
                  Services
                </Link>
                <ArrowForwardIosIcon className={styles.arrowIcon} />
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className={pathname === "/aboutus" ? styles.active : ""}
                  onClick={handleClose}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/bookus"
                  className={pathname === "/bookus" ? styles.active : ""}
                  onClick={handleClose}
                >
                  Book now
                </Link>
              </li>
              <li>
                <Link
                  href="/fleet"
                  className={pathname === "/fleet" ? styles.active : ""}
                  onClick={handleClose}
                >
                  Fleet
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={pathname === "/contact" ? styles.active : ""}
                  onClick={handleClose}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
