"use client";
import { Box, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { NavbarContainer, NavbarCTA, NavLinksContainer } from "../mui/navbarPkgs";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import MoonIcon from "../../../public/navbar/Moon.svg";
import UserIcon from "../../../public/navbar/User.svg";
import { useTheme } from "../../app/contexts/themeContext";
import { useState } from "react";
import SunIcon from "@mui/icons-material/WbSunny";
import Link from "next/link";

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleServicesToggle = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavbarContainer>
            <Box>
                <Image src={Logo} alt="logo" width={100} height={61} style={{ objectFit: "contain" }} />
            </Box>

            <NavLinksContainer>
                <Link href="/" passHref>
                    <Button
                        sx={{
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: "1.6rem",
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
                            fontSize: "1.6rem",
                        }}
                    >
                        About
                    </Button>
                </Link>

                {/* Services Dropdown */}
                <Box>
                    <Button
                        onClick={handleServicesToggle}
                        sx={{
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: '1.6rem',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    >
                        Services
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        PaperProps={{
                            sx: {
                                backgroundColor: theme.palette.mode === 'dark' ? "rgba(35, 35, 35, 0.8)" : "rgba(255, 255, 255, 0.9)",
                                padding: "1rem",
                                borderRadius: "12px",
                                backdropFilter: "blur(10px)",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                border: "1px solid rgba(255, 255, 255, 0.3)",
                            },
                        }}
                    >
                        <MenuItem onClick={() => { window.location.href = '/fleet'; handleClose(); }}>FleetCare Pro</MenuItem>
                        <MenuItem onClick={() => { window.location.href = '/autocare'; handleClose(); }}>Anywhere AutoCare</MenuItem>
                        <MenuItem onClick={() => { window.location.href = '/subscribe'; handleClose(); }}>Subscription Plans</MenuItem>
                        <MenuItem disabled>Store <span>(Coming Soon)</span></MenuItem>
                    </Menu>
                </Box>

                <Link href="/contact" passHref>
                    <Button
                        sx={{
                            color: "#FFF",
                            textTransform: 'none',
                            fontFamily: "DMSans",
                            fontSize: "1.6rem",
                        }}
                    >
                        Contact
                    </Button>
                </Link>
            </NavLinksContainer>

            <NavLinksContainer>
                <Link href="/booking" passHref>
                    <NavbarCTA>Book Now</NavbarCTA>
                </Link>

                <Box sx={{ marginLeft: '2rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <Image src={UserIcon} alt="User Icon" width={16} height={16} style={{ objectFit: "contain" }} />
                    <IconButton onClick={toggleTheme}>
                        {theme.palette.mode === 'dark' ? (
                            <SunIcon sx={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }} />
                        ) : (
                            <Image src={MoonIcon} alt="Moon Icon" width={24} height={24} style={{ objectFit: "contain" }} />
                        )}
                    </IconButton>
                </Box>
            </NavLinksContainer>
        </NavbarContainer>
    );
};

export default Navbar;
