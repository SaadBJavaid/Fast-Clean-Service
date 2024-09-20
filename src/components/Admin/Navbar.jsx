"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavbarContainer, NavbarBox, NavbarHeading, NavbarSearch, SearchInput, NavbarIcons, IconWrapper } from "./../mui/AdminPkgs";

const Navbar = () => {
    return (
        <NavbarContainer
            position="fixed"
            sx={{
                height: "10vh",
                width: "calc(100% - 240px)",
                top: 0,
                left: "240px",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
            }}
        >
            <NavbarBox sx={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <NavbarHeading>Hello Admin!</NavbarHeading>


                <NavbarIcons sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <NavbarSearch sx={{ marginRight: "15px", display: "flex", alignItems: "center" }}>
                        <SearchIcon sx={{ color: "#555", width: "22px", height: "22px" }} />
                        <SearchInput placeholder="Search here..." />
                    </NavbarSearch>
                    <IconWrapper>
                        <AccountCircleIcon sx={{ fontSize: "24px" }} />
                    </IconWrapper>
                    <IconWrapper>
                        <SettingsIcon sx={{ fontSize: "24px" }} />
                    </IconWrapper>
                    <IconWrapper>
                        <NotificationsIcon sx={{ fontSize: "24px" }} />
                    </IconWrapper>
                </NavbarIcons>
            </NavbarBox>
        </NavbarContainer>
    );
};

export default Navbar;
