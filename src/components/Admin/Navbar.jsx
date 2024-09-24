"use client";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Box,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import styles from './Navbar.module.css'; // Import the CSS module

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" className={styles.appBar}>
            <Toolbar>
                {/* Company Logo */}
                <Typography variant="h5" component="div" className={styles.logo}>
                    Hello Hassan!
                </Typography>

                {/* Search Bar */}
                <Box className={styles.searchBar}>
                    <SearchIcon sx={{ color: "#555", width: "20px", heigth: "20px" }} />
                    <InputBase placeholder="Search…" className={styles.inputField} />
                </Box>

                {/* Admin Menu */}
                <IconButton onClick={handleMenuOpen} className={styles.iconButton}>
                    <Avatar alt="Admin" src="/path-to-your-avatar.png" className={styles.avatar} />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
