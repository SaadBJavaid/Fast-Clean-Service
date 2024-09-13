"use client";
import {
    AppBar,
    Toolbar,
    Typography,
    InputBase,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";
import styles from './Navbar.module.css';

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
            <Toolbar className={styles.toolbar}>
                <Typography variant="h6" component="div" className={styles.logo}>
                    Hello Admin!
                </Typography>

                <Box className={styles.searchBar}>
                    <SearchIcon sx={{ color: "#555", width: "18px", height: "18px" }} />
                    <InputBase placeholder="Search…" className={styles.inputField} />
                </Box>

                <IconButton onClick={handleMenuOpen} className={styles.iconButton}>
                    <AccountCircleIcon className={styles.userIcon} fontSize="inherit" />
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
