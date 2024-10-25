import { Box, Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CustomFormTextField, CustomFormDateField } from "../mui/NewFormPkgs";
import { ModalButton } from "../mui/AdminPkgs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const EditBookingModal = ({ open, handleCloseModal, selectedBooking }) => {
  const handleInputChange = () => {};

  if (!open) return null;
  return (
    <>
      <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "60rem", width: "100%" } }}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "1.6rem",
          }}
        >
          Edit Booking Details
          <Box>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>

        <DialogContent>
          <form>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <CustomFormTextField
                sx={{ marginTop: "1rem" }}
                label="First Name"
                name="firstName"
                value={selectedBooking?.firstName}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <CustomFormTextField
                sx={{ marginTop: "1rem" }}
                label="Last Name"
                name="lastName"
                value={selectedBooking?.surname}
                onChange={handleInputChange}
                fullWidth
                required
              />

              <CustomFormTextField
                sx={{ marginTop: "1rem" }}
                label="Email"
                name="email"
                value={selectedBooking?.email}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <CustomFormTextField
                sx={{ marginTop: "1rem" }}
                label="Phone"
                name="phone"
                value={selectedBooking?.phoneNumberf}
                onChange={handleInputChange}
                fullWidth
                required
              />

              <CustomFormDateField
                label="Date"
                name="date"
                value={selectedBooking?.date}
                onChange={handleInputChange}
                fullWidth
                required
              />
              <CustomFormTextField
                sx={{ marginTop: "1rem" }}
                label="Time"
                name="time"
                value={selectedBooking?.time}
                onChange={handleInputChange}
                fullWidth
                required
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <ModalButton sx={{}} onClick={() => alert("Saved!")}>
                  Save
                </ModalButton>
              </Box>
            </LocalizationProvider>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
