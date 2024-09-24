import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {IconWrapper, NavbarIcons, NavbarSearch, SearchInput} from "../mui/AdminPkgs";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useEffect, useState} from 'react';

const Navbar = ({ toggleDrawer }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 2,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : '#fff',
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
                backdropFilter: isScrolled ? 'blur(8px)' : 'none',
                transition: 'background-color 0.3s ease',
            }}
        >
            <Toolbar>
                <IconButton color="inherit" aria-label="open drawer" onClick={toggleDrawer} edge="start">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h4" noWrap component="div" sx={{ flexGrow: 1, fontSize: "1.8rem", fontWeight: "bold" }}>
                    Dashboard
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <NavbarSearch sx={{ fontSize: "1.3rem" }}>
                        <SearchInput placeholder="Search…" />
                    </NavbarSearch>
                    <NavbarIcons>
                        <IconWrapper sx={{ fontSize: "1.5rem" }}>
                            <NotificationsIcon />
                        </IconWrapper>
                        <IconWrapper sx={{ fontSize: "1.5rem" }}>
                            <SettingsIcon />
                        </IconWrapper>
                        <IconWrapper sx={{ fontSize: "1.5rem" }}>
                            <AccountCircleIcon />
                        </IconWrapper>
                    </NavbarIcons>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
