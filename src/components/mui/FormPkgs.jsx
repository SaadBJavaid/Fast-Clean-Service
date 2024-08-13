import { Button, styled, TextField } from "@mui/material";

export const CustomFormTextField = styled(TextField)(({ theme }) => ({
  "& label": {
    color: theme.palette.primary.contrastText,
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.contrastText,
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.contrastText,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.contrastText,
    },
  },
}));

export const CustomFormButton = styled(Button)(({ theme }) => ({
  marginTop: 3,
  marginBottom: 2,
  padding: "8px 0",
  fontSize: "16px",
  color: "white",
  borderRadius: "50px",
  backgroundColor: theme.palette.primary.accent,
  ":hover": {
    backgroundColor: theme.palette.primary.accent2,
  },
}));
