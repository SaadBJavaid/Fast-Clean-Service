"use client";
import React, { createContext, useContext, useState } from "react";
import { Poppins } from "next/font/google";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "500", "700"] });

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#485E9F",
      dark2: "#313687",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "1",
          borderRadius: "8px",
          textTransform: "none",
          color: "#A0D7E4",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0,3)",
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "inherit",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a0a0a",
      text1: "#fefefe",
      text2: "#ffffff80",
      accent: "#00607a",
    },
    secondary: {
      main: "#1F1F1F",
      main2: "#292929",
      accent: "",
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "1",
          borderRadius: "8px",
          textTransform: "none",
          lineHeight: "1",
          color: "#485E9F",
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
