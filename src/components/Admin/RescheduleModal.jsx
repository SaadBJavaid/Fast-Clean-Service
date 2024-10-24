import { Box, Dialog, DialogTitle, IconButton, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useEffect } from "react";
import ScheduleAppointment from "../../components/BookingForm/ScheduleAppointmentStep/smallScreenView";
import { FormProvider } from "../../contexts/MultiStepFormContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import useMultiStepForm from "../../hooks/useMultiStepForm";
import { ModalButton } from "../mui/AdminPkgs";

const RescheduleModal = ({ serviceType, handleCloseModal, open }) => {
  return (
    <FormProvider>
      <Modal serviceType={serviceType} handleCloseModal={handleCloseModal} open={open} />
    </FormProvider>
  );
};

export default RescheduleModal;

const Modal = ({ serviceType, handleCloseModal, open }) => {
  const form = useMultiStepForm();

  useEffect(() => {
    form.updateFormData({ service: serviceType });

    return () => {
      form.formData = {};
    };
  }, []);

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
            onClick={() => alert(`Resceduled to ${form.formData?.selectedTime}!`)}
          >
            Reschedule
          </ModalButton>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
