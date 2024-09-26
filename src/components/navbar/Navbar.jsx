"use client";
import { useState, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  NavbarContainer,
  NavbarCTA,
  NavLinksContainer,
} from "../mui/navbarPkgs";
import { Badge, HomePkgsInBox } from "../mui/HomePkgs";
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

const Navbar = () => {
  const { data: session, status } = useSession();
  const { theme, toggleTheme } = useTheme();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const anchorEl = useRef(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  console.log(session);

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleUserMenuClose = () => {
    setUserMenuOpen(false);
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <NavbarContainer>
      <Box
        sx={{
          //   backgroundColor: "red",
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
          <Image
            src={Logo}
            alt="logo"
            width={99}
            height={61}
            style={{ objectFit: "contain" }}
          />
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
            //   gap: { xs: "3rem", sm: "4rem", md: "6rem", lg: "7rem", xl: "9.3rem" },
            maxWidth: { md: "400px", lg: "500px", xl: "600px" },
            width: "100%",
            zIndex: 10,
            //   backgroundColor: "red",
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
              endIcon={
                <ArrowDropDownIcon
                  sx={{ marginLeft: "0.5rem", color: "#FFF" }}
                />
              }
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
                  //   backgroundColor: "red",
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
              //   marginRight: { xs: "1rem", sm: "1rem", md: "1rem", xl: "4rem" },
              //   position: "absolute",
              //   right: 0,
              //   top: 30,
            }}
          >
            <IconButton
              onClick={handleUserMenuToggle}
              ref={anchorEl}
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              <Image
                src={UserIcon}
                alt="User Icon"
                width={15}
                height={15}
                style={{ objectFit: "contain" }}
              />
            </IconButton>
            <Menu
              open={userMenuOpen}
              anchorEl={anchorEl.current}
              onClose={handleUserMenuToggle}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                // horizontal: "right",
              }}
              sx={{
                transition: "transform 0.8s ease",
                //   transform: scrolled
                //     ? "translate(20px, 30px)"
                //     : "translate(0px, 50px)",
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
                    <Button>
                      <Typography
                        component="a"
                        sx={{
                          color: "inherit",
                          fontSize: "18px !important",
                          fontFamily: "JakartaSans",
                        }}
                      >
                        Services
                      </Typography>
                    </Button>

                    {isServicesOpen && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: {
                            xs: "-4rem",
                            sm: "-8rem",
                            md: "-3.5rem",
                            xl: "-4rem",
                          },
                          left: { xs: "-2rem", sm: "-4rem", md: "-6rem" },
                          zIndex: 2,
                          backgroundColor: "rgba(35, 35, 35, 0.4)",
                          padding: {
                            xs: "2rem",
                            sm: "3rem",
                            md: "3rem",
                            xl: "4rem",
                          },
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
                          gap: {
                            xs: "1.5rem",
                            sm: "1.7rem",
                            md: "2rem",
                            xl: "2.7rem",
                          },
                        }}
                      >
                        <Typography
                          onClick={() => {
                            // TODO change to next router redirect //

                            setIsServicesOpen(false);
                          }}
                          sx={{
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.3rem",
                              md: "1.5rem",
                            },
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
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.3rem",
                              md: "1.5rem",
                            },
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
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.3rem",
                              md: "1.5rem",
                            },
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
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.3rem",
                              md: "1.5rem",
                            },
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
                  </MenuItem>

                  <MenuItem>
                    <Link href="/contact" passHref>
                      <Button
                        sx={{
                          boxShadow: "none",
                          color: "#FFF",
                          textTransform: "none",
                          fontFamily: "DMSans",
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.3rem",
                            md: "1.5rem",
                          },
                        }}
                      >
                        {session?.user?.email}
                      </Button>
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
                          fontFamily: "DMSans",
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
            </Menu>
            <IconButton onClick={toggleTheme}>
              {theme.palette.mode === "dark" ? (
                <SunIcon
                  sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }}
                />
              ) : (
                <Image
                  src={MoonIcon}
                  alt="Moon Icon"
                  width={21}
                  height={21}
                  style={{ objectFit: "contain" }}
                />
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
