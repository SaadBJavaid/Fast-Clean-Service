import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material";

export const CustomFormTextField = styled(TextField)(({ theme }) => ({
  fontFamily: "JakartaSans",
  "& .MuiInputBase-input": {
    padding: "2.2rem 1rem",
    color: theme.palette.primary.contrastText,
  },
  "& label": {
    color: theme.palette.primary.contrastText,
    fontSize: "1.8rem",
    // transform: "translate(1.3rem, 1.2rem) scale(1)",
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.primary.contrastText,
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: theme.palette.primary.accent,
      // borderColor: theme.palette.primary.contrastText,
    },
    "&.Mui-focused fieldset legend": {
      fontSize: "1.4em !important",
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.primary.contrastText,
    },
  },
}));

export const CustomFormButton = styled(Button)(({ theme }) => ({
  marginTop: 3,
  marginBottom: 2,
  padding: "12px 48px",
  fontSize: "1.8rem",
  color: "white",
  borderRadius: "50px",
  backgroundColor: theme.palette.primary.accent,
  ":hover": {
    backgroundColor: theme.palette.primary.accent2,
  },
}));

export const CustomSelect = ({ name, label, options, value, handleChange, ...props }) => {
  return (
    <FormControl>
      <InputLabel id={`${name}-label`} sx={{ color: "white !important", fontSize: "1.8rem" }}>
        {label}
      </InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        value={value}
        label={label}
        onChange={handleChange}
        {...props}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            padding: "2.6rem 1rem",
            color: "white !important",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            color: "white !important",
            borderColor: "primary.contrastText",
          },

          "&.Mui-focused fieldset legend": {
            fontSize: "1.4em !important",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "white !important",
            borderColor: "white !important",
          },
          "& .MuiInputLabel-root": {
            color: "white",
            padding: "2.2rem 1rem",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white !important",
          },
          "& .MuiSelect-icon": {
            margin: "0.5rem 0",
            color: "primary.contrastText",
          },
          "& .MuiSelect-select": {
            color: "primary.contrastText",
          },
        }}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <>
            <MenuItem value={option.value}>{option.label}</MenuItem>
          </>
        ))}
      </Select>
    </FormControl>
  );
};
