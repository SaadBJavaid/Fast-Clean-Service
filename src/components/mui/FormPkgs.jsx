import { Button, InputLabel, MenuItem, Select, styled, TextField } from "@mui/material";

export const CustomFormTextField = styled(TextField)(({ theme }) => ({
  fontFamily: "JakartaSans",
  "& label": {
    color: theme.palette.primary.contrastText,
    fontSize: "1.2rem",
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

export const CustomSelect = ({ name, label, options, value, handleChange, ...props }) => {
  return (
    <>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        label={label}
        onChange={handleChange}
        {...props}
        sx={{
          "& .MuiInputLabel-root": {
          },
            color: "primary.contrastText",
          "& .MuiInputLabel-root.Mui-focused": {
            color: "primary.contrastText",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "primary.contrastText",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "primary.contrastText",
            },
            "&:hover fieldset": {
              borderColor: "primary.contrastText",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.contrastText",
            },
          },
          "& .MuiSelect-icon": {
            color: "primary.contrastText",
          },
          "& .MuiSelect-select": {
            color: "primary.contrastText",
          },
        }}
      >
        {/* <InputLabel id="demo-simple-select-helper-label" sx={{color: "red"}}>{name}</InputLabel> */}
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {options.map((option) => (
          <>
            <MenuItem value={option.value}>{option.label}</MenuItem>
          </>
        ))}
      </Select>
    </>
  );
};
