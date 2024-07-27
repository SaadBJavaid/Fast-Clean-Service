"use client";
import React from "react";
import { styled, Typography } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  fontSize: "1.5rem",
  //   fontWeight: "600",
  color: theme.palette.text.primary,
  textAlign: "center",
  padding: "1em",
}));

const HomeTypography = React.forwardRef(function HomeTypography(
  { variant, children, sx, ...props },
  ref
) {
  return (
    <StyledTypography variant={variant} sx={{ ...sx }} ref={ref} {...props}>
      {children}
    </StyledTypography>
  );
});

export default HomeTypography;
