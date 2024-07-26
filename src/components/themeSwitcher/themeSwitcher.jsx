"use client";
import React from "react";
import { useTheme } from "../../app/contexts/themeContext";
import { Button } from "@mui/material";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Button
        variant="contained"
        // color="secondary"
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
        Toggle Theme
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
