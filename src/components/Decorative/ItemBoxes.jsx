import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Arrow from "../../../public/decorative/Down_Left_Arrow.svg";

export const DecorativeItemBoxes = ({ text, sx }) => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "1.2rem",
        boxShadow: "0 7px 16.8px -4px rgba(0, 0, 0, 0.25)",
        padding: "1.2rem 3.6rem",
        maxWidth: "25.3rem",
        marginBottom: "1rem",
        gap: "1rem",
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontSize: "1.2rem",
          fontWeight: 500,
          color: "primary.text",
        }}
      >
        {text}
      </Typography>
      <Image src={Arrow} alt="Decorative Arrow" width={20} height={-1} />
    </Box>
  );
};
