"use client";
import { Popper, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLinksContainer, NavLinkT, BlurredPaper, NavLinkD } from "../mui/navbarPkgs";

const NavLink = ({ children, options = [], href }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <NavLinksContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavLinkT href={href}>
        {children}
        {options.length > 0 && (
          <Typography variant="span" sx={{ fontSize: "1.5rem", color: "primary.main" }}>
            {" "}
            ▼
          </Typography>
        )}
      </NavLinkT>

      {options.length > 0 && (
        <Popper sx={{ zIndex: 100 }} open={open} anchorEl={anchorEl} placement="bottom">
          <BlurredPaper elevation={4}>
            {options.map((option, index) => (
              <NavLinkD key={index} href={option}>
                {option}
              </NavLinkD>
            ))}
          </BlurredPaper>
        </Popper>
      )}
    </NavLinksContainer>
  );
};

export default NavLink;
