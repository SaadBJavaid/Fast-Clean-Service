"use client";
import { useState, useRef } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import {
  NavbarContainer,
  NavbarCTA,
  NavLinksContainer,
} from "../mui/navbarPkgs";
import { Badge } from "../mui/HomePkgs";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import MoonIcon from "../../../public/navbar/Moon.svg";
import UserIcon from "../../../public/navbar/User.svg";
import { useTheme } from "../../contexts/themeContext";
import SunIcon from "@mui/icons-material/WbSunny";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";
import LoginModal from "../Login/LoginModal";
import SignUpModal from "../SignUp/SignUpModal";

import Arrow_Right from "../../../public/navbar/Arrow-Right-To-Arc--Streamline-Tabler.svg";
import User_StreamLine from "../../../public/navbar/User--Streamline-Tabler.svg";
import User_Cog from "../../../public/navbar/User-Cog--Streamline-Tabler.svg";
import Users_Plus from "../../../public/navbar/Users-Plus--Streamline-Tabler.svg";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const anchorEl = useRef(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <Box
        sx={{
          maxWidth: "1600px",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            marginLeft: {
              xs: "2rem",
              sm: "3rem",
              md: "3rem",
              lg: "3rem",
              xl: "3rem",
            },
          }}
        >
          <Image src={Logo} alt="logo" width={99} height={61} style={{ objectFit: "contain" }} />
        </Box>

        <NavLinksContainer
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: { md: "400px", lg: "500px", xl: "600px" },
            width: "100%",
            zIndex: 10,
          }}
        >
          <Link href="/" passHref>
            <Button
              sx={{
                boxShadow: "none",
                color: "#FFF",
                textTransform: "none",
                fontFamily: "DMSans",
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              Home
            </Button>
          </Link>

          <Link href="/aboutus" passHref>
            <Button
              sx={{
                boxShadow: "none",
                color: "#FFF",
                textTransform: "none",
                fontFamily: "DMSans",
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              About
            </Button>
          </Link>

          <Box sx={{ position: "relative" }}>
            <Button
              onClick={handleServicesToggle}
              endIcon={<ArrowDropDownIcon sx={{ marginLeft: "0.5rem", color: "#FFF" }} />}
              sx={{
                boxShadow: "none",
                color: "#FFF",
                textTransform: "none",
                fontFamily: "DMSans",
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                zIndex: "10",
              }}
            >
              Services
            </Button>

            {isServicesOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                  left: { xs: "-2rem", sm: "-4rem", md: "-6rem" },
                  zIndex: 2,
                  backgroundColor: "rgba(35, 35, 35, 0.4)",
                  padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                  borderRadius: "4px",
                  backdropFilter: "blur(4px)",
                  border: "0.01px solid #fff",
                  width: {
                    xs: "15rem",
                    sm: "17rem",
                    md: "20.4rem",
                    xl: "23.4rem",
                  },
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                }}
              >
                <Typography
                  onClick={() => {
                    window.location.href = "/fleet";
                    setIsServicesOpen(false);
                  }}
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    color: "#D5D5D5",
                    cursor: "pointer",
                    marginTop: "4.5rem",
                    fontFamily: "DMSans",
                    fontWeight: "300",
                  }}
                >
                  FleetCare Pro
                </Typography>
                <Typography
                  onClick={() => {
                    window.location.href = "/autocare";
                    setIsServicesOpen(false);
                  }}
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    color: "#D5D5D5",
                    cursor: "pointer",
                    fontFamily: "DMSans",
                    fontWeight: "300",
                  }}
                >
                  Anywhere AutoCare
                </Typography>
                <Typography
                  onClick={() => {
                    window.location.href = "/subscribe";
                    setIsServicesOpen(false);
                  }}
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    color: "#D5D5D5",
                    cursor: "pointer",
                    fontFamily: "DMSans",
                    fontWeight: "300",
                  }}
                >
                  Subscription Plans
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                    color: "#D5D5D5",
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "not-allowed",
                    fontFamily: "DMSans",
                    fontWeight: "300",
                  }}
                >
                  Store <Badge>Coming Soon</Badge>
                </Typography>
              </Box>
            )}
          </Box>

          <Link href="/contact" passHref>
            <Button
              sx={{
                boxShadow: "none",
                color: "#FFF",
                textTransform: "none",
                fontFamily: "DMSans",
                fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              }}
            >
              Contact
            </Button>
          </Link>
        </NavLinksContainer>

        <NavLinksContainer>
          <Link href="/booking" passHref>
            <NavbarCTA
              sx={{
                "@media (max-width: 1368px)": {
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                  padding: {
                    xs: "0.4rem 1rem",
                    sm: "0.5rem 1.2rem",
                    md: "0.6rem 1.2rem",
                  },
                },
              }}
            >
              Book Now
            </NavbarCTA>
          </Link>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: "1rem", sm: "1rem", md: "1.5rem", xl: "4rem" },
              marginLeft: { xs: "1rem", sm: "1rem", md: "2.5rem", xl: "4rem" },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <IconButton
                onClick={handleUserMenuToggle}
                ref={anchorEl}
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                sx={{
                  zIndex: "10",
                }}
              >
                <Image src={UserIcon} alt="User Icon" width={15} height={15} style={{ objectFit: "contain" }} />
              </IconButton>

              {userMenuOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                    left: "-2rem",
                    zIndex: 2,
                    backgroundColor: "rgba(35, 35, 35, 0.4)",
                    padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                    borderRadius: "4px",
                    backdropFilter: "blur(4px)",
                    border: "0.01px solid #fff",
                    width: {
                      xs: "26rem",
                      sm: "28rem",
                      md: "35.8rem",
                      xl: "41.2rem",
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                  }}
                >
                  <Typography
                    onClick={() => {
                      window.location.href = "/admin";
                      setIsServicesOpen(false);
                    }}
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                      color: "#D5D5D5",
                      cursor: "pointer",
                      marginTop: "4.5rem",
                      fontFamily: "DMSans",
                      fontWeight: "300",
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={Users_Plus} alt="User Icon" width={20} height={20} />
                    Admin
                  </Typography>
                  <Typography
                    onClick={() => {
                      window.location.href = "/customer";
                      setIsServicesOpen(false);
                    }}
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                      color: "#D5D5D5",
                      cursor: "pointer",
                      fontFamily: "DMSans",
                      fontWeight: "300",
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={User_StreamLine} alt="User Icon" width={20} height={20} />
                    Customer
                  </Typography>
                  <Typography
                    onClick={() => {
                      setOpenLogin(true);
                      setIsUserOpen(false);
                    }}
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                      color: "#D5D5D5",
                      cursor: "pointer",
                      fontFamily: "DMSans",
                      fontWeight: "300",
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={Arrow_Right} alt="User Icon" width={20} height={20} />
                    Login
                  </Typography>
                  <Typography
                    onClick={() => {
                      setOpenSignup(true);
                      setIsUserOpen(false);
                    }}
                    sx={{
                      fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
                      color: "#D5D5D5",
                      cursor: "pointer",
                      fontFamily: "DMSans",
                      fontWeight: "300",
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={User_Cog} alt="User Icon" width={20} height={20} />
                    Signup
                  </Typography>
                </Box>
              )}
            </Box>
            <IconButton onClick={toggleTheme} sx={{ zIndex: 10 }}>
              {theme.palette.mode === "dark" ? (
                <SunIcon sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }} />
              ) : (
                <Image src={MoonIcon} alt="Moon Icon" width={21} height={21} style={{ objectFit: "contain" }} />
              )}
            </IconButton>
          </Box>
        </NavLinksContainer>
      </Box>
      {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
      {openSignup && <SignUpModal setOpenSignup={setOpenSignup} />}
    </NavbarContainer>
  );
};

export default Navbar;
