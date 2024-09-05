"use client";
import React from "react";
import { useTheme } from "../../contexts/themeContext";
import { Button } from "@mui/material";
import { WbSunny } from "@mui/icons-material"; // Import sun and moon icons
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Button
        variant="contained"
        onClick={toggleTheme}
        sx={{
          // padding: "2.3rem 0",
          borderRadius: "200px",
          fontSize: "2.5rem",
          backgroundColor: "transparent",
          // bgcolor: theme.palette.mode === "light" ? "#333" : "#f0f0f0",
          "&:hover": {
            // bgcolor: theme.palette.mode === "light" ? "#333" : "#f0f0f0",
            backgroundColor: "transparent",
            opacity: "0.8",
          },
        }}
      >
        {theme.palette.mode === "light" ? (
          <DarkModeIcon sx={{}} /> // Moon icon for light mode
        ) : (
          <WbSunny /> // Sun icon for dark mode
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
