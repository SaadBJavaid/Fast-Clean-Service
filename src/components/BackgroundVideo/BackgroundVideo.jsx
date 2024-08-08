"use client";
import { Box } from "@mui/material";
import styles from "./BackgroundVideo.module.css";
import { useTheme } from "../../app/contexts/themeContext";

const BackgroundVideo = () => {
  const { theme } = useTheme();

  return (
    <Box
      className={styles.videoContainer}
      sx={{
        "&:before": { background: `var(--overlay-${theme.palette.mode})` },
      }}
    >
      <video src="/video1.mp4" autoPlay loop muted className={styles.video} />
      {/* Gradient overlay applied via CSS */}
    </Box>
  );
};

export default BackgroundVideo;
