import { Box, styled } from "@mui/material";

export const RadialCircle = styled(Box)(({ theme, top, right, left, bottom }) => ({
  background: "radial-gradient(circle, #4AFFC9, transparent)",
  filter: "blur(175px)",
  height: "20rem",
  width: "20rem",
  position: "absolute",
  top: top || null,
  right: right || null,
  bottom: bottom || null,
  left: left || null,
  zIndex: -1,
}));

export default RadialCircle;
