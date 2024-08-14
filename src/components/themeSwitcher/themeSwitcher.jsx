"use client";
import React from "react";
import { useTheme } from "../../app/contexts/themeContext";
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
          fontSize: "1.5rem",
          bgcolor: theme.palette.mode === "light" ? "#333" : "#f0f0f0",
          "&:hover": {
            bgcolor: theme.palette.mode === "light" ? "#333" : "#f0f0f0",
            opacity: "0.8",
          },
        }}
      >
        {theme.palette.mode === "light" ? (
          <DarkModeIcon fontSize="xl" /> // Moon icon for light mode
        ) : (
          <WbSunny fontSize="xl" /> // Sun icon for dark mode
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
