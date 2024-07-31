// components/PackageModal.js
import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const PackageModal = ({ open, handleClose, imageSrc, title, details }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: 600,
          bgcolor: "background.paper",
          borderRadius: 8,
          boxShadow: 24,
          p: 3,
          outline: "none",
          overflow: "hidden",
        }}
      >
        <Typography
          id="modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
          }}
        >
          {title}
        </Typography>
        <Image
          src={imageSrc}
          alt="modal image"
          width={200}
          height={200}
          style={{
            width: "200px",
            height: "200px",
            borderRadius: 8,
            objectFit: "cover",
          }}
        />
        <Typography
          id="modal-description"
          sx={{
            marginTop: 1,
          }}
        >
          {details}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClose}
          sx={{ mt: 2 }}
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PackageModal;
