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
      main: "#A0D7E4",
    },
    secondary: {
      main: "#485E9F",
      dark2: "#313687",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Poppins",
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
      main: "#485E9F",
    },
    secondary: {
      main: "#80AECE",
      light2: "#A0D7E4",
      black: "#313131",
    },
  },
  typography: {
    fontFamily: "Poppins",
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
