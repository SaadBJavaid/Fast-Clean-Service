"use client";
import { styled, Box, List } from "@mui/material";

export const AutoCareSection = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  margin: "15rem 2rem 0",
  background: `linear-gradient(to bottom, ${theme.palette.primary.accent2}, ${theme.palette.primary.accent}, ${theme.palette.primary.main})`,
  borderRadius: "20px",
  position: "relative",
}));

export const AutoTabContainer = styled(Box)(({ theme }) => ({
  //   backgroundColor: "red",
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "5rem",
  padding: "5rem",
  width: "100%",
  minWidth: "700px",
}));

export const AutoTab = styled(Box)(({ theme }) => ({
  height: "40rem",
  width: "27rem",
  position: "relative",
  perspective: "150rem",
  cursor: "pointer",

  "&.selected": {
    "& .tab__side--back": {
      transform: "rotateY(0)",
    },

    "& .tab__side--front": {
      transform: "rotateY(-180deg)",
    },
  },

  "& .tab__side": {
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    width: "100%",
    transition: "all 0.8s ease",
    position: "absolute",
    top: 0,
    left: 0,
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    // borderRadius: "3px",
    overflow: "hidden",
    boxShadow: "0 1.5rem 4rem rgba(0,0,0,0.15)",

    "&--front": {
      backgroundColor:
        theme.palette.mode === "light"
          ? `${theme.palette.primary.main}90`
          : `${theme.palette.primary.main}99`,
      backdropFilter: "blur(30px)",
    },

    "&--back": {
      transform: "rotateY(180deg)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      "&-1": {
        backgroundImage:
          "linear-gradient(to right bottom, #7ed56f, #28b485),url(5.jpg)",
      },
      "&-2": {
        backgroundImage:
          "linear-gradient(to right bottom, #2998ff, #5643fa),url(5.jpg)",
      },
      "&-3": {
        backgroundImage: "linear-gradient(to right bottom, #ffb900, #ff7730)",
      },
    },
  },

  "& .tab__picture": {
    backgroundSize: "cover",
    height: "23rem",
    backgroundBlendMode: "screen",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    borderRadius: "3px 3px 0 0",

    "&--1": {
      backgroundImage:
        "linear-gradient(to right bottom, #7ed56f, #28b485),url(5.jpg)",
    },
    "&--2": {
      backgroundImage:
        "linear-gradient(to right bottom, #2998ff, #5643fa),url(5.jpg)",
    },
    "&--3": {
      backgroundImage:
        "linear-gradient(to right bottom, #ffb900, #ff7730),url(5.jpg)",
    },
  },

  "& .MuiTypography-root.heading": {
    fontSize: "2.8rem",
    fontWeight: 300,
    textTransform: "uppercase",
    textAlign: "right",
    color: "#fff",
    position: "absolute",
    top: "17rem",
    right: "2rem",
    width: "75%",

    "& .heading--span": {
      padding: "1rem 1.5rem",
      "&-1": {
        backgroundImage:
          "linear-gradient(to right bottom, rgba(126, 213, 111, 0.85), rgba(40, 180, 133, 0.85))",
      },
      "&-2": {
        backgroundImage:
          "linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85))",
      },
      "&-3": {
        backgroundImage:
          "linear-gradient(to right bottom, rgba(255,185,0,0.85), rgba(255,119,48,0.85))",
      },
    },
  },

  "& .tab__cta": {
    textAlign: "center",
    color: "#fff",
    marginBottom: "4rem",

    "& .tab__price": {
      fontSize: "1.4rem",
      textTransform: "uppercase",
    },

    "& .tab__value": {
      fontSize: "4.5rem",
      fontWeight: "100",
      //   color: "#ffffffdd",
    },
  },
}));

export const AutoTabList = styled(List)(({ theme }) => ({
  padding: "3rem",
  margin: "0 auto",
  width: "80%",
  //   height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",

  "& li": {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "1.5rem",
    padding: "1rem",

    "&:not(:last-child)": {
      borderBottom: "1px solid #eee",
    },
  },
}));

export const CardContainer = styled(Box)(({ theme, color }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "2rem",
  height: "100vh",
  opacity: 0,
  transform: "translate(0, 100px)",
  filter: "blur(33px)",
  //   animation: "showContent 1s ease-in-out 0.3s 1 forwards",
}));

export const Card = styled(Box)(({ theme, color }) => ({
  backgroundColor: theme.palette.mode === "light" ? "#ffffff95" : "#00000080",
  padding: "3rem",
  borderRadius: "30px 30px 30px 30px",
  border: `1px solid ${
    theme.palette.mode === "light" ? "#00000080" : "#ffffff80"
  }`,
  position: "relative",
  overflow: "hidden",
  color: theme.palette.primary.contrastText,
  minWidth: "320px",
  width: "33%",
  maxWidth: "350px",

  "& .style": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: color,
    // clipPath:
    //   'path("M 0 100 Q -100 -100 100 0 Q 15.6 8 30.8 8 Q 2.6 8.8 0 100 Z")',
    clipPath: 'path("M 0 150 L 0 0 L 102 0 L 30 5 Q 7 7 5 30 Z")',
  },
}));

export const CardHeader = styled(Box)(({ theme, color }) => ({
  width: "100%",
  color: theme.palette.primary.contrastText,

  "& .MuiTypography-root": {
    "&.heading": {
      fontFamily: "JakartaSansBold",
      fontSize: "4rem",
      color: color,
    },

    "&.tagline": {
      fontSize: "2rem",
    },
  },
}));

export const CardInfo = styled(Box)(({ theme, color }) => ({
  display: "flex",
  color: theme.palette.primary.contrastText,

  "& .MuiTypography-root.price": {
    fontSize: "7rem",
    fontWeight: "bold",
    display: "flex",

    "&:before": {
      content: '"$"',
      fontFamily: "JakartaSansBold",
      fontSize: "3.5rem",
      fontWeight: "bold",
      color: color,
      alignSelf: "flex-start",
      marginTop: "5%",
    },
  },
}));

export const CardDetails = styled(List)(({ theme }) => ({
  padding: "2rem",
  margin: "0 auto",
  width: "100%",

  "& li": {
    display: "flex",
    textAlign: "center",
    fontSize: "1.5rem",
    padding: "1rem",

    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.primary.contrastText}`,
    },
  },
}));
