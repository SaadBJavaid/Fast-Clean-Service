import { styled, Typography } from "@mui/material";

export const BookingStepHeading = styled(Typography)(({ theme }) => ({
  fontSize: "3.5rem",
  fontFamily: "BDSans",
  fontWeight: "bold",
  color: theme.palette.primary.contrastText,
  textAlign: "center",
}));

export const BookingStepSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: theme.palette.primary.text1,
  textAlign: "center",
  marginBottom: "4.5rem",
}));
