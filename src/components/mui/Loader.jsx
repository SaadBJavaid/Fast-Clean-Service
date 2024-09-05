import { Box, CircularProgress, styled } from "@mui/material";
import { useTheme } from "../../contexts/themeContext";

export const LoaderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const Loader = () => {
  const { theme } = useTheme();

  return (
    <LoaderContainer>
      {/* <CircularProgress color={theme.palette.primary.accent} />; */}
      Loading...
    </LoaderContainer>
  );
};
