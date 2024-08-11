import { Box, Button, styled } from "@mui/material";

export const LoginBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "background.default",
}));

export const FormButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "15px",
  backgroundColor: "#80AECE",
  color: "black",
  borderRadius: "5px",
}));
