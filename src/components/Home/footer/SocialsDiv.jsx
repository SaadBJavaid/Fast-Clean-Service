import { Facebook, Instagram, LinkedIn, Twitter, WhatsApp, X } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";
import styles from "./Footer.module.css";

const SocialsDiv = () => {
  return (
    <Box className={styles.socialLinks}>
      <IconButton href="#" className={`${styles.socialIcon} ${styles.facebook}`}>
        <Facebook />
      </IconButton>
      <IconButton href="#" className={`${styles.socialIcon} ${styles.instagram}`}>
        <Instagram />
      </IconButton>
      <IconButton href="#" className={`${styles.socialIcon} ${styles.linkedin}`}>
        <LinkedIn />
      </IconButton>
      <IconButton href="#" className={`${styles.socialIcon} ${styles.x}`}>
        <X />
      </IconButton>
      <IconButton href="https://wa.me/31202440994" className={`${styles.socialIcon} ${styles.whatsapp}`}>
        <WhatsApp />
      </IconButton>
    </Box>
  );
};

export default SocialsDiv;
