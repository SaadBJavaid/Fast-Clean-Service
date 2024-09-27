import { AppBar, Box, IconButton, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {useEffect, useState} from 'react';
import {useSession} from "next-auth/react";

const Navbar = ({ toggleDrawer, handleSignOut }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { data: session } = useSession();

    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
      setAnchorEl(null);
    };

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = 0;
        setIsScrolled(scrollTop > 0);
      };

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
                    <IconButton>
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>

                    <IconButton onClick={handleMenuOpen}>
                        <AccountCircleIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <MenuItem disabled>{session?.user?.email || 'Guest'}</MenuItem>
                        <MenuItem onClick={() => handleSignOut()}>Logout</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
