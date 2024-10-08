"use client";

import { Box, Typography, Button, styled } from "@mui/material";

export const CalendarContainer = styled(Box)(({ theme }) => ({
  "& *": {
    fontFamily: "Unbounded !important",
  },
  "& .MuiPaper-root.MuiPaper-outlined.MuiPaper-rounded": {
    border: "none !important",
  },
  "& .MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall.MuiButton-colorPrimary.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeSmall.MuiButton-textSizeSmall":
    {
      fontSize: "11px",
      fontWeight: "regular",
      lineHeight: "120%",
      boxShadow: "none",
    },
  "& .MuiTableCell-root.MuiTableCell-body.MuiTableCell-alignCenter.MuiTableCell-sizeSmall": {
    borderBottom: "none",
    paddingTop: "0",
    paddingBottom: "0",
  },
  "& .MuiTableRow-root > th:first-of-type": {
    display: "none !important",
  },
  "& .MuiTableCell-root.MuiTableCell-head.MuiTableCell-stickyHeader.MuiTableCell-alignCenter.MuiTableCell-sizeSmall": {
    padding: "0 1rem !important",
    textAlign: "left",
    fontSize: "1rem",
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#212121",
    lineHeight: "120%",

    "&:not(:first-of-type)": {
      borderLeft: "none !important",
    },
  },
  "& .MuiTableCell-root .MuiPaper-root": {
    backgroundColor: "transparent",
    borderRadius: "200px",
    border: "2px solid #A4A4A4",
    padding: "0.5rem 1rem",
  },
  "& .selected": {
    backgroundColor: "#1C79CC",
  },
  "& .MuiTableCell-root  .MuiPaper-root p": {
    fontSize: "1rem",
    lineHeight: "120%",
    color: theme.palette.mode === "dark" ? "#FFFFFF" : "#525252",
    textAlign: "center",
  },
  "& .MuiTypography-root.MuiTypography-body2": {
    textAlign: "center !important",
    margin: "0 auto",
  },
  "& .MuiTableCell-root.MuiTableCell-body": {
    width: "max-content",
  },
  // "& tr:nth-child(-n+9):not(:first-child)": {
  //   // display: "none",
  //   display: currentMode === "week" ? "none" : "",
  // },
  "& .MuiButtonBase-root.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButton-root.MuiToggleButton-sizeSmall.MuiToggleButton-primary.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButtonGroup-lastButton":
    {
      display: "none",
    },
  "& .MuiButtonBase-root.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal.MuiToggleButton-root.Mui-selected.MuiToggleButton-sizeSmall.MuiToggleButton-primary.MuiToggleButtonGroup-grouped.MuiToggleButtonGroup-groupedHorizontal":
    {
      color: "#1C79CC !important",
      minWidth: "4rem",
    },
}));

export const LoaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "400px",
  width: "100%",
  color: "black",
}));


export const ModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "140px",
  maxHeight: "80vh",
  overflowY: "auto",
  backgroundColor: theme.palette.background.paper,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  padding: "1rem",
  textAlign: "center",
}));

export const ModalHeading = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
  fontWeight: 300,
  lineHeight: "0.96rem",
  marginBottom: "0.8rem",
  textAlign: "center",
}));


export const TimeSlotButton = styled(Button)(({ theme, selected }) => ({
  width: "100%",
  marginBottom: "0.8rem",
  padding: "0.5rem",
  backgroundColor: selected ? "#1C79CC" : "#FFFFFF",
  color: selected ? "#FFFFFF" : "#525252",
  borderRadius: "20px",
  border: selected ? "none" : "0.5px solid #A4A4A4",
  fontSize: "0.8rem",
  "&:hover": {
    backgroundColor: selected ? "#1C79CC" : "#F0F0F0",
  },
}));
