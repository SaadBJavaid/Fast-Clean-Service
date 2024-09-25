import { Button, FormControl, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material";

export const CustomFormTextField = styled(TextField)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "0.9rem",

  "& .MuiInputBase-input": {
    padding: "0.8rem 1.35rem",
    color: "#050505",
    fontFamily: "Inter",
  },

  "& label": {
    border: "none",
    color: "#050505",
    fontSize: "1rem",
    position: "relative",
    transform: "translate(0%, -30%) scale(1)",
  },

  "& label.Mui-focused": {
    border: "none",
    color: theme.palette.primary.contrastText,
  },

  "& .MuiInput-underline:after": {
    border: "none",
  },

  "& .MuiOutlinedInput-root": {
    borderRadius: "10px !important",
    fontSize: "0.9rem",
    boxShadow: "0 2px 11.9px 0 rgba(0, 0, 0, 0.5)",
    border: "none",

    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset legend": {
      display: "hidden",
    },
    "&.Mui-focused fieldset": {
      border: "none",
      borderColor: "transparent",
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

export const CustomSelect = ({ name, label, options, value, onChange, ...props }) => {
  return (
    <FormControl>
      <InputLabel id={`${name}-label`} sx={{ color: "white !important", fontSize: "1.8rem" }}>
        {label}
      </InputLabel>
      <Select
        name={name}
        labelId={`${name}-label`}
        id={name}
        value={value}
        label={label}
        onChange={(e) => {
          e.target.name = name;
          onChange(e);
        }}
        {...props}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            padding: "2.6rem 1rem",
            color: "white !important",
          },
          "& .MuiOutlinedInput-input": {
            color: "white !important",
            fontSize: "1.8rem",
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
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
