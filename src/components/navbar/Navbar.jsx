"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { NavbarContainer, NavbarCTA, NavLinksContainer } from "../mui/navbarPkgs";
import { Badge } from "../mui/HomePkgs";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import MoonIcon from "../../../public/navbar/Moon.svg";
import UserIcon from "../../../public/navbar/User.svg";
import { useTheme } from "../../app/contexts/themeContext";
import { useState } from "react";
import SunIcon from "@mui/icons-material/WbSunny";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handleServicesToggle = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <NavbarContainer>
            <Box sx={{ marginLeft: { xs: "2rem", sm: "3rem", md: "3rem", lg: "4rem", xl: "12rem" } }}>
                <Image src={Logo} alt="logo" width={99} height={61} style={{ objectFit: "contain" }} />
            </Box>

            <NavLinksContainer
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: '3rem', sm: '4rem', md: '6rem', lg: '7rem', xl: "9.3rem" },
                    zIndex: 10,
                }}
            >
                <Link href="/" passHref>
                    <Button
                        sx={{
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                        }}
                    >
                        Home
                    </Button>
                </Link>

                <Link href="/aboutus" passHref>
                    <Button
                        sx={{
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                        }}
                    >
                        About
                    </Button>
                </Link>

                <Box sx={{ position: 'relative' }}>
                    <Button
                        onClick={handleServicesToggle}
                        endIcon={<ArrowDropDownIcon sx={{ marginLeft: "0.5rem", color: "#FFF" }} />}
                        sx={{
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                            zIndex: "10",
                        }}
                    >
                        Services
                    </Button>

                    {isServicesOpen && (
                        <Box
                            sx={{
                                position: 'absolute',
                                top: { xs: "-4rem", sm: "-8rem", md: "-3.5rem", xl: "-4rem" },
                                left: { xs: "-2rem", sm: "-4rem", md: "-6rem" },
                                zIndex: 2,
                                backgroundColor: "rgba(35, 35, 35, 0.4)",
                                padding: { xs: "2rem", sm: "3rem", md: "3rem", xl: "4rem" },
                                borderRadius: "4px",
                                backdropFilter: "blur(4px)",
                                border: "0.01px solid #fff",
                                width: { xs: "15rem", sm: "17rem", md: "20.4rem", xl: "23.4rem" },
                                display: 'flex',
                                flexDirection: 'column',
                                gap: { xs: "1.5rem", sm: "1.7rem", md: "2rem", xl: "2.7rem" },
                            }}
                        >
                            <Typography
                                onClick={() => {
                                    window.location.href = '/fleet';
                                    setIsServicesOpen(false);
                                }}
                                sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, color: '#D5D5D5', cursor: 'pointer', marginTop: "4.5rem", fontFamily: "DMSans", fontWeight: "300" }}
                            >
                                FleetCare Pro
                            </Typography>
                            <Typography
                                onClick={() => {
                                    window.location.href = '/autocare';
                                    setIsServicesOpen(false);
                                }}
                                sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, color: '#D5D5D5', cursor: 'pointer', fontFamily: "DMSans", fontWeight: "300" }}
                            >
                                Anywhere AutoCare
                            </Typography>
                            <Typography
                                onClick={() => {
                                    window.location.href = '/subscribe';
                                    setIsServicesOpen(false);
                                }}
                                sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, color: '#D5D5D5', cursor: 'pointer', fontFamily: "DMSans", fontWeight: "300" }}
                            >
                                Subscription Plans
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                                    color: '#D5D5D5',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    cursor: 'not-allowed',
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
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' },
                        }}
                    >
                        Contact
                    </Button>
                </Link>
            </NavLinksContainer>

            <NavLinksContainer>
                <Link href="/booking" passHref>
                    <NavbarCTA sx={{
                        '@media (max-width: 1368px)': {
                            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' },
                            padding: { xs: '0.4rem 1rem', sm: '0.5rem 1.2rem', md: '0.6rem 1.2rem' },
                        },
                    }}>
                        Book Now
                    </NavbarCTA>
                </Link>

                <Box sx={{ marginLeft: { xs: '1rem', sm: '2rem', md: "3rem", xl: "11.4rem" }, display: 'flex', alignItems: 'center', gap: { xs: '2rem', sm: '2rem', md: '2rem', xl: "4rem" }, marginRight: { xs: '1rem', sm: '2rem', xl: "4rem" } }}>
                    <Image src={UserIcon} alt="User Icon" width={15} height={15} style={{ objectFit: "contain" }} />
                    <IconButton onClick={toggleTheme}>
                        {theme.palette.mode === 'dark' ? (
                            <SunIcon sx={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }} />
                        ) : (
                            <Image src={MoonIcon} alt="Moon Icon" width={21} height={21} style={{ objectFit: "contain" }} />
                        )}
                    </IconButton>
                </Box>
            </NavLinksContainer>
        </NavbarContainer>
    );
};

export default Navbar;
