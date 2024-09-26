import { Box, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "../../../contexts/themeContext";
import YouTubeIcon from "@mui/icons-material/YouTube";

const HomeSocialsBox = () => {
  const { theme } = useTheme();
  return (
    <Box
      sx={{
        position: "absolute",
        left: "4.3rem",
        bottom: "4.3rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        zIndex: 1000,
      }}
    >
      <IconButton
        sx={{
          color: "white",
          "& svg": {
            fontSize: "3rem !important",
          },
          "&:hover": {
            color: theme.palette.primary.accentDark,
          },
        }}
      >
        <FacebookIcon fontSize="large" />
      </IconButton>
      <IconButton
        sx={{
          color: "white",
          "& svg": {
            fontSize: "3rem !important",
          },
          "&:hover": {
            color: theme.palette.primary.accentDark,
          },
        }}
      >
        <InstagramIcon fontSize="inherit" />
      </IconButton>
      <IconButton
        sx={{
          color: "white",
          "& svg": {
            fontSize: "3rem !important",
          },
          "&:hover": {
            color: theme.palette.primary.accentDark,
          },
        }}
      >
        <TwitterIcon />
      </IconButton>
      <IconButton
        sx={{
          color: "white",
          "& svg": {
            fontSize: "3rem !important",
          },
          "&:hover": {
            color: theme.palette.primary.accentDark,
          },
        }}
      >
        <YouTubeIcon fontSize="inherit" />
      </IconButton>

      <Box
        sx={{
          width: "2px",
          height: "70px",
          backgroundColor: "white",
        }}
      />
    </Box>
  );
};

export default HomeSocialsBox;
