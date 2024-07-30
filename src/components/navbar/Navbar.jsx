"use client";
import React, { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "../../app/contexts/themeContext";
import styles from "./Navbar.module.css"; // Import the CSS module
import Image from "next/image";
import stylesLogo from "../../app/Logo.module.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";

const Navbar = () => {
  const { data: session } = useSession();

  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
        <ul>
          {!session ? (
            <>
              <Button sx={{ bgcolor: "black" }}>
                <Link asChild href="/login">
                  Login
                </Link>
              </Button>
              <Button sx={{ bgcolor: "black" }}>
                <Link asChild href="/register">
                  Register
                </Link>
              </Button>
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
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div
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
      </div>
    </div>
  );
};

export default Navbar;
