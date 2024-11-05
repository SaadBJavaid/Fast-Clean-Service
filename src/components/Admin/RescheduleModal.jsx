import { Box, Dialog, DialogTitle, IconButton, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import ScheduleAppointment from "../../components/BookingForm/ScheduleAppointmentStep/smallScreenView";
import { FormProvider } from "../../contexts/MultiStepFormContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import { ModalButton } from "../mui/AdminPkgs";
import useSnackbar from "../../hooks/useSnackbar";

const RescheduleModal = ({ booking, serviceType, duration, handleCloseModal, open }) => {
  return (
    <FormProvider>
      <Modal booking={booking} serviceType={serviceType} duration={duration} handleCloseModal={handleCloseModal} open={open} />
    </FormProvider>
  );
};

export default RescheduleModal;

const Modal = ({ booking, serviceType, duration, handleCloseModal, open }) => {
  const form = useMultiStepForm();
  const { openSnackbar } = useSnackbar();

  useEffect(() => {
    form.updateFormData({ service: serviceType, duration: duration });

    return () => {
      form.formData = {};
    };
  }, []);

  async function handleRescheduleBooking(id, dateTime) {
    try {
      const response = await fetch("/api/booking/reschedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          dateTime,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to reschedule booking: ${response.statusText}`);
      }

      const booking = await response.json();
      return booking;
    } catch (error) {
      openSnackbar("Error rescheduling booking: " + error, "error");
      throw error;
    }
  }

  return (
    <Dialog open={open} onClose={handleCloseModal} PaperProps={{ style: { maxWidth: "60rem", width: "100%" } }}>
      <DialogTitle
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1.6rem",
        }}
      >
        Reschedule Booking
        <Box>
          <IconButton onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ScheduleAppointment />
        </LocalizationProvider>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <ModalButton
            disabled={!form.formData?.selectedTime}
            onClick={() => {
              handleRescheduleBooking(booking?._id, form.formData.selectedTime).then(() => {
                handleCloseModal();
              });
            }}
          >
            Reschedule
          </ModalButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
