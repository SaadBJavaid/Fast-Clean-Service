"use client";
import React, { useState, useRef } from "react";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  SwipeableDrawer,
  useMediaQuery,
} from "@mui/material";
import {
  DropDownLink,
  LogoContainer,
  LogoImage,
  NavbarContainer,
  NavbarCTA,
  NavbarInnerContainer,
  NavBarLinksContainer,
  NavbarRightContainer,
  NavLinkButton,
  NavLinkDropDownContainer,
  NavLinksContainer,
} from "../mui/navbarPkgs";
import { Badge } from "../mui/HomePkgs";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import MoonIcon from "../../../public/navbar/Moon.svg";
import UserIcon from "../../../public/navbar/User.svg";
import EllipsisIcon from "../../../public/navbar/Ellipsis.svg";
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
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const NavbarLarge = () => {
  const { theme, toggleTheme } = useTheme();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const anchorEl = useRef(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LogoContainer>
          <LogoImage src={Logo} alt="logo" width={99} height={61} />
        </LogoContainer>

        <NavBarLinksContainer>
          <Link href="/" passHref>
            <NavLinkButton>Home</NavLinkButton>
          </Link>

          <Link href="/aboutus" passHref>
            <NavLinkButton>About</NavLinkButton>
          </Link>

          <NavLinkDropDownContainer>
            <NavLinkButton
              onClick={handleServicesToggle}
              endIcon={<ArrowDropDownIcon sx={{ marginLeft: "0.5rem", color: "#FFF" }} />}
              sx={{ zIndex: "10" }}
            >
              Services
              <ArrowDropDownIcon />
            </NavLinkButton>

            {isServicesOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                  left: { xs: "-2rem", sm: "-4rem", md: "-6rem" },
                  zIndex: 2,
                  backgroundColor: "rgba(35, 35, 35, 0.9)",
                  padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                  borderRadius: "4px",
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
                  paddingTop: "8rem !important",
                }}
              >
                <DropDownLink
                  onClick={() => {
                    window.location.href = "/fleet";
                    setIsServicesOpen(false);
                  }}
                >
                  FleetCare Pro
                </DropDownLink>
                <DropDownLink
                  onClick={() => {
                    window.location.href = "/autocare";
                    setIsServicesOpen(false);
                  }}
                >
                  Anywhere AutoCare
                </DropDownLink>
                <DropDownLink
                  onClick={() => {
                    window.location.href = "/subscribe";
                    setIsServicesOpen(false);
                  }}
                >
                  Subscription Plans
                </DropDownLink>
                <DropDownLink
                    onClick={() => {
                      window.location.href = "/other-vehicles";
                      setIsServicesOpen(false);
                    }}
                >
                  Diverse Vehicles
                </DropDownLink>
                <DropDownLink
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    cursor: "not-allowed",
                  }}
                >
                  Store <Badge sx={{ whiteSpace: "nowrap" }}>Coming Soon</Badge>
                </DropDownLink>
              </Box>
            )}
          </NavLinkDropDownContainer>

          <Link href="/contact" passHref>
            <NavLinkButton>Contact</NavLinkButton>
          </Link>
        </NavBarLinksContainer>

        <NavLinksContainer>
          <Link href="/booking" passHref>
            <NavbarCTA>Book Now</NavbarCTA>
          </Link>

          <NavbarRightContainer>
            <NavLinkDropDownContainer>
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
                <LogoImage src={UserIcon} alt="User Icon" width={15} height={15} style={{ objectFit: "contain" }} />
              </IconButton>

              {userMenuOpen && (
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                    left: "-2rem",
                    zIndex: 2,
                    backgroundColor: "rgba(35, 35, 35, 0.9)",
                    padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                    borderRadius: "4px",
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
                    paddingTop: "8rem !important",
                  }}
                >
                  <DropDownLink
                    onClick={() => {
                      window.location.href = "/admin";
                      setIsServicesOpen(false);
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={Users_Plus} alt="User Icon" width={20} height={20} />
                    Admin
                  </DropDownLink>
                  <DropDownLink
                    onClick={() => {
                      window.location.href = "/customer";
                      setIsServicesOpen(false);
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={User_StreamLine} alt="User Icon" width={20} height={20} />
                    Customer
                  </DropDownLink>
                  <DropDownLink
                    onClick={() => {
                      setOpenLogin(true);
                      setUserMenuOpen(false);
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={Arrow_Right} alt="User Icon" width={20} height={20} />
                    Login
                  </DropDownLink>
                  <DropDownLink
                    onClick={() => {
                      setOpenSignup(true);
                      setUserMenuOpen(false);
                    }}
                  >
                    <Image style={{ marginRight: "1rem" }} src={User_Cog} alt="User Icon" width={20} height={20} />
                    Signup
                  </DropDownLink>
                </Box>
              )}
            </NavLinkDropDownContainer>
            <IconButton onClick={toggleTheme} sx={{ zIndex: 10, marginLeft: "2rem" }}>
              {theme.palette.mode === "dark" ? (
                <SunIcon sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }} />
              ) : (
                <Image src={MoonIcon} alt="Moon Icon" width={21} height={21} style={{ objectFit: "contain" }} />
              )}
            </IconButton>
          </NavbarRightContainer>
        </NavLinksContainer>
      </NavbarInnerContainer>

      {openLogin && <LoginModal setOpenLogin={setOpenLogin} setOpenSignup={setOpenSignup} />}
      {openSignup && <SignUpModal setOpenSignup={setOpenSignup} setOpenLogin={setOpenLogin} />}
    </NavbarContainer>
  );
};

const NavbarSmall = () => {
  const { theme, toggleTheme } = useTheme();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const anchorEl = useRef(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleUserMenuToggle = () => {
    setUserMenuOpen((prev) => !prev);
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/aboutus",
    },
    {
      label: "Services",
      href: "/services",
      more: [
        {
          label: "FleetCare Pro",
          href: "/fleet",
        },
        {
          label: "Anywhere AutoCare",
          href: "/autocare",
        },
        {
          label: "Subscription Plans",
          href: "/subscribe",
        },
      ],
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  const NavbarDrawerList = (
    <Box sx={{ width: 300 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {navLinks.map((item, index) => (
          <>
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                onClick={() => {
                  if (item.more) {
                    setIsServicesOpen(!isServicesOpen);
                  } else {
                    window.location.href = item.href;
                  }
                }}
              >
                <ListItemText primary={item.label} />
                {item.more && item.more.length > 0 && <>{isServicesOpen ? <ExpandLess /> : <ExpandMore />}</>}
              </ListItemButton>
            </ListItem>

            {item.more && (
              <Collapse in={isServicesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.more.map((subItem, index) => (
                    <ListItemButton sx={{ pl: 4 }} key={subItem.label} onClick={() => (window.location.href = subItem.href)}>
                      <ListItemText primary={subItem.label} />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            )}
          </>
        ))}
      </List>
      <Divider />
      <ListItem disablePadding>
        <ListItemButton onClick={() => (window.location.href = "/booking")}>
          <NavbarCTA sx={{ marginLeft: "0 !important" }}>Book Now</NavbarCTA>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <IconButton
          onClick={toggleDrawer(true)}
          ref={null}
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          sx={{
            zIndex: "10",
          }}
        >
          <LogoImage
            src={EllipsisIcon}
            alt="User Icon"
            width={15}
            height={15}
            style={{ objectFit: "contain", filter: "invert(1)" }}
          />
        </IconButton>

        <NavbarRightContainer>
          <NavLinkDropDownContainer>
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
              <LogoImage src={UserIcon} alt="User Icon" width={15} height={15} style={{ objectFit: "contain" }} />
            </IconButton>

            <SwipeableDrawer open={drawerOpen} onOpen={toggleDrawer(true)} onClose={toggleDrawer(false)}>
              {NavbarDrawerList}
            </SwipeableDrawer>

            {userMenuOpen && (
              <Box
                sx={{
                  position: "absolute",
                  top: "-4rem",
                  right: "-9rem",
                  zIndex: 2,
                  backgroundColor: "rgba(35, 35, 35, 0.4)",
                  padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                  borderRadius: "4px",
                  backdropFilter: "blur(4px)",
                  border: "0.01px solid #fff",
                  width: {
                    xs: "20rem",
                    sm: "24rem",
                  },
                  display: "flex",
                  flexDirection: "column",
                  gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                  paddingTop: "8rem !important",
                }}
              >
                <DropDownLink
                  onClick={() => {
                    window.location.href = "/admin";
                    setIsServicesOpen(false);
                  }}
                >
                  <Image style={{ marginRight: "1rem" }} src={Users_Plus} alt="User Icon" width={20} height={20} />
                  Admin
                </DropDownLink>
                <DropDownLink
                  onClick={() => {
                    window.location.href = "/customer";
                    setIsServicesOpen(false);
                  }}
                >
                  <Image style={{ marginRight: "1rem" }} src={User_StreamLine} alt="User Icon" width={20} height={20} />
                  Customer
                </DropDownLink>
                <DropDownLink
                  onClick={() => {
                    setOpenLogin(true);
                    setIsUserOpen(false);
                  }}
                >
                  <Image style={{ marginRight: "1rem" }} src={Arrow_Right} alt="User Icon" width={20} height={20} />
                  Login
                </DropDownLink>
                <DropDownLink
                  onClick={() => {
                    setOpenSignup(true);
                    setIsUserOpen(false);
                  }}
                >
                  <Image style={{ marginRight: "1rem" }} src={User_Cog} alt="User Icon" width={20} height={20} />
                  Signup
                </DropDownLink>
              </Box>
            )}
          </NavLinkDropDownContainer>
          <IconButton onClick={toggleTheme} sx={{ zIndex: 10, marginLeft: "2rem" }}>
            {theme.palette.mode === "dark" ? (
              <SunIcon sx={{ fontSize: "2rem", color: "white", cursor: "pointer" }} />
            ) : (
              <Image src={MoonIcon} alt="Moon Icon" width={21} height={21} style={{ objectFit: "contain" }} />
            )}
          </IconButton>
        </NavbarRightContainer>
      </NavbarInnerContainer>

      {openLogin && <LoginModal setOpenLogin={setOpenLogin} />}
      {openSignup && <SignUpModal setOpenSignup={setOpenSignup} />}
    </NavbarContainer>
  );
};

const Navbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:950px)");

  return isSmallScreen ? <NavbarSmall /> : <NavbarLarge />;
};

export default Navbar;
