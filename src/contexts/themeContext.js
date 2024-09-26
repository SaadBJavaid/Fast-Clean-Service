"use client";
import React, {createContext, useContext, useState} from "react";
import {createTheme, ThemeProvider as MuiThemeProvider,} from "@mui/material/styles";


const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#fefefe",
      text1: "#00000080",
      text2: "#ffffff80",
      accent: "#00c3ff",
      accentDark: "#1B81D0",
      accent2: "#00607a",
      lightContrast: "#00000029",
    },
    secondary: {
      main: "#485E9F",
      dark2: "#313687",
      white: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Unbounded, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "1",
          borderRadius: "8px",
          textTransform: "none",
          color: "#A0D7E4",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        },
        primary: {
          fontSize: "1.2rem",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: "6rem",
          minWidth: "40px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0D0E12",
      text1: "#fefefe",
      text2: "#C2C2C2",
      accent: "#00c3ff",
    },
    secondary: {
      main: "#1F1F1F",
      main2: "#292929",
    },
  },
  typography: {
    fontFamily: "Unbounded, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          lineHeight: "1",
          borderRadius: "8px",
          textTransform: "none",
          color: "#485E9F",
        },
        contained: {
          boxShadow: "none",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
        },
        primary: {
          fontSize: "1.2rem",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          fontSize: "6rem",
          minWidth: "40px",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: "2rem",
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

export const FontSizes = {
  FAQ: {
    heading: "3.8rem",
    answer: "2.8rem",
  },
};
