"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "../../app/contexts/themeContext";
import styles from "./Navbar.module.css"; // Import the CSS module
import Image from "next/image";
import stylesLogo from "../../app/Logo.module.css";
import { Typography, Menu, MenuItem, IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ThemeSwitcher from "../themeSwitcher/themeSwitcher";

const Navbar = () => {
  const { data: session } = useSession();
  const { theme } = useTheme();
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the dropdown menu
  const handleClick = (event) => {
    setMenuAnchor(event.currentTarget);
    setMenuOpen(!menuOpen);
  };

  // Close the dropdown menu
  const handleClose = () => {
    setMenuAnchor(null);
    setMenuOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles["navbar-left"]}>
        <div className={stylesLogo.logoContainer}>
          <Image
            src="/logo.png"
            alt="logo"
            height={45}
            width={45}
            className={stylesLogo.logoImage}
          />
        </div>
      </div>
      <div className={styles["navbar-center"]}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/aboutus">About</Link>
          </li>
          <li>
            <Link href="/bookus">Book now</Link>
          </li>
          <li>
            <Link href="/fleet">Fleet</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <IconButton onClick={handleClick}>
          <AccountCircleIcon sx={{ fontSize: "40px" }} />
        </IconButton>

        <Menu
          className={styles.menu}
          anchorEl={menuAnchor}
          open={menuOpen}
          onClose={handleClose}
        >
          {!session ? (
            <>
              <MenuItem sx={{ fontSize: "20px" }} onClick={handleClose}>
                <Link href="/login">Login</Link>
              </MenuItem>
              <MenuItem sx={{ fontSize: "20px" }} onClick={handleClose}>
                <Link href="/register">Register</Link>
              </MenuItem>
              <MenuItem>
                <ThemeSwitcher />
              </MenuItem>
              <MenuItem
                sx={{ fontSize: "20px" }}
                onClick={handleClose}
              ></MenuItem>
            </>
          ) : (
            <>
              <MenuItem disabled>{session.user?.email}</MenuItem>
              <MenuItem
                onClick={() => {
                  signOut();
                  handleClose();
                }}
                sx={{ fontSize: "20px" }}
              >
                Logout
              </MenuItem>
            </>
          )}
        </Menu>
      </div>
      {/* <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      {/* <div
        className={`${styles["navbar-menu"]} ${menuOpen ? styles.show : ""}`}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {!session ? (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>{session.user?.email}</li>
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
