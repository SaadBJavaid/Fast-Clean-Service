"use client";
import React, { createContext, useContext, useState } from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "1",
          borderRadius: "8px",
          textTransform: "none",
          backgroundColor: "#333",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0,3)",
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "1",
          borderRadius: "8px",
          textTransform: "none",
          lineHeight: "1",
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
  },
});

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
